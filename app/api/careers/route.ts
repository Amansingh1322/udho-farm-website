import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import formidable, { File } from "formidable";
import fs from "fs/promises";
import { Readable } from "stream";


const resend = new Resend(process.env.RESEND_API_KEY);

// Convert Next.js request to a Node.js stream
async function convertToNodeStream(req: NextRequest): Promise<NodeJS.ReadableStream> {
    const reader = req.body?.getReader();
    const chunks = [];

    if (!reader) throw new Error("Body reader not available");

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }

    return Readable.from(Buffer.concat(chunks));
}

export async function POST(req: NextRequest) {
    try {
        const stream = await convertToNodeStream(req);

        const form = formidable({ multiples: false });

        const [fields, files] = await new Promise<any>((resolve, reject) => {
            form.parse(stream, (err, fields, files) => {
                if (err) reject(err);
                else resolve([fields, files]);
            });
        });

        const {
            firstName,
            lastName,
            email,
            phone,
            position,
            coverLetter
        } = fields;

        if (!firstName || !lastName || !email || !phone || !position) {
            return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
        }

        let attachments = [];

        if (files.resume) {
            const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume as File;
            const fileBuffer = await fs.readFile(resumeFile.filepath);
            attachments.push({
                filename: resumeFile.originalFilename,
                content: fileBuffer.toString("base64"),
                encoding: "base64",
            });
        }

        await resend.emails.send({
            from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
            to: process.env.CONTACT_RECEIVER_EMAIL || "udhofarms@gmail.com",
            subject: `New Career Application: ${position}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nCover Letter: ${coverLetter}`,
            attachments,
        });

        return NextResponse.json({ success: true, message: "Application submitted!" }, { status: 200 });

    } catch (error: any) {
        console.error("Careers form error:", error);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}
