import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        await resend.emails.send({
            from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
            to: process.env.CONTACT_RECEIVER_EMAIL || "delivered@resend.dev",
            subject,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        });

        if (process.env.FORM_SUBMISSION_WEBHOOK_URL) {
            try {
                await fetch(process.env.FORM_SUBMISSION_WEBHOOK_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message,
                        formType: "Contact Us", // important for Google Sheet routing
                    }),
                });
            } catch (webhookError) {
                console.error("Error sending webhook:", webhookError);
            }
        }

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}
