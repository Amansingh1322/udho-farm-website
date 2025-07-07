import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, preferredDate, message, formType } = body;

    if (!name || !email || !preferredDate || !formType) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "udhofarms@gmail.com",
      subject: `New ${formType} Request`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${preferredDate}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Request submitted!" }, { status: 200 });
  } catch (error: any) {
    console.error("Schedule form error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
