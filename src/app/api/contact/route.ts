import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure environment variables exist
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Use `POST` function (Not handler)
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON request body
    console.log("✅ Received request body:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.error("❌ Missing fields:", { name, email, message });
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "**7eventy7** Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
