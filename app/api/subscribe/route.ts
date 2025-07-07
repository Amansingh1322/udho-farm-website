import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "udhofarms@gmail.com",
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to the newsletter.\n\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true, message: "Subscription received!" }, { status: 200 });
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}
