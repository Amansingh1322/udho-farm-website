import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as stringn;
    const position = formData.get("position") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!resumeFile) {
      return NextResponse.json({ message: "No resume file uploaded" }, { status: 400 });
    }

    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const attachments = [
      {
        filename: resumeFile.name,
        content: buffer,
      },
    ];

    const data = await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "delivered@resend.dev",
      subject: `Career Application - ${firstName} ${lastName}`,
      html: `<p>First Name: ${firstName}</p>
             <p>Last Name: ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Position: ${position}</p>
             <p>Cover Letter: ${coverLetter}</p>`,
      attachments: attachments,
    });

    if (process.env.FORM_SUBMISSION_WEBHOOK_URL) {
      try {
        const webhookData = {
          formType: "Careers Applications", // 🔑 required for Google Sheet routing
          firstName,
          lastName,
          email,
          phone,
          position,
          coverLetter,
          resumeFileName: resumeFile.name,
        };

        const webhookResponse = await fetch(process.env.FORM_SUBMISSION_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        });

        if (!webhookResponse.ok) {
          console.error("Webhook request failed:", webhookResponse.status, webhookResponse.statusText);
        }
      } catch (webhookError: any) {
        console.error("Error sending data to webhook:", webhookError.message);
      }
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
  }
}
