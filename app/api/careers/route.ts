import { NextResponse } from "next/server";
import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs/promises";
import { IncomingMessage } from "http";
import { Readable } from "stream";

// Required for form parsing in App Router
export const dynamic = "force-dynamic"; // To prevent caching

const resend = new Resend(process.env.RESEND_API_KEY);

// Convert Web Request to Node IncomingMessage
async function toNodeRequest(request: Request): Promise<IncomingMessage> {
  const { headers } = request;
  const readable = Readable.fromWeb(request.body as any) as any;

  const req = Object.assign(readable, {
    headers: Object.fromEntries(headers),
    method: request.method,
    url: request.url,
  });

  return req;
}

function parseFormData(req: IncomingMessage): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = formidable({ keepExtensions: true, multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: Request) {
  try {
    const nodeReq = await toNodeRequest(req);
    const { fields, files } = await parseFormData(nodeReq);

    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      coverLetter,
    } = fields;

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const attachments = [];
    const resumeFile = Array.isArray(files.resume)
      ? files.resume[0]
      : files.resume;

    if (resumeFile) {
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
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Position: ${position}
Cover Letter: ${coverLetter}`,
      attachments,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
