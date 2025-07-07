import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, position, coverLetter } = body;

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "udhofarms@gmail.com",
      subject: `New Career Application: ${position}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nCover Letter: ${coverLetter}`,
    });

    return NextResponse.json({ success: true, message: "Application submitted!" }, { status: 200 });
  } catch (error: any) {
    console.error("Careers form error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
