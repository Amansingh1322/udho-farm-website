import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, preferredDate, message, type } = await request.json();

    // Validation
    if (!name || !email || !preferredDate || !type) {
      return NextResponse.json(
        { success: false, message: "Name, Email, Preferred Date, and Type are required." },
        { status: 400 }
      );
    }

    // 1. Send data to Google Sheet via webhook
    if (process.env.FORM_SUBMISSION_WEBHOOK_URL) {
      try {
        await fetch(process.env.FORM_SUBMISSION_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: type,
            name,
            email,
            phone,
            preferredDate,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Google Sheets webhook error:", err);
        // Continue without throwing — webhook failure shouldn't block the user
      }
    }

    // 2. Send confirmation email to admin
    await resend.emails.send({
      from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "delivered@resend.dev",
      subject: `🗓️ New ${type} Request from ${name}`,
      html: `
        <h2>New Scheduling Request</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Message:</strong><br/>${message ? message.replace(/\n/g, "<br/>") : "No additional message."}</p>
        <hr/>
        <p style="font-size: 12px; color: #888;">Generated automatically from Udho Farm website</p>
      `,
    });

    // 3. Respond to frontend
    return NextResponse.json({
      success: true,
      message: `Your ${type} request was submitted successfully. We'll contact you shortly.`,
    });
  } catch (error) {
    console.error("Schedule form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
