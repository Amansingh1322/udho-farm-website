import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }

    // ✅ Send to Google Sheet via webhook
    if (process.env.FORM_SUBMISSION_WEBHOOK_URL) {
      try {
        await fetch(process.env.FORM_SUBMISSION_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: "contact",
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Error sending to Google Sheet:", err);
      }
    }

    // ✅ Send Email via Resend
    await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "delivered@resend.dev",
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
