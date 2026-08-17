import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateInternalNotificationEmail,
  generateVisitorConfirmationEmail,
  ContactSubmission,
} from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, organization, email, subject, message } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      fullName: fullName.trim(),
      organization: organization && organization.trim() ? organization.trim() : "Not provided",
      email: email.trim(),
      subject: subject && subject.trim() ? subject.trim() : "General Enquiry",
      message: message.trim(),
    };

    // 1. Generate Email Contents
    const internalMail = generateInternalNotificationEmail(submission);
    const visitorMail = generateVisitorConfirmationEmail(submission);

    // 2. Prepare Transport (if SMTP environment variables are set)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const rawReceiverEmails = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "info@uminato.com";
    const receiverEmails = rawReceiverEmails
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e.length > 0);
    const senderFrom = process.env.SMTP_FROM || `"UMINATO" <${smtpUser || "no-reply@uminato.com"}>`;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send internal notification to UMINATO team (all configured recipients)
      await transporter.sendMail({
        from: senderFrom,
        to: receiverEmails,
        replyTo: internalMail.replyTo,
        subject: internalMail.subject,
        text: internalMail.text,
        html: internalMail.html,
      });

      // Send visitor confirmation auto-reply
      try {
        await transporter.sendMail({
          from: senderFrom,
          to: submission.email,
          subject: visitorMail.subject,
          text: visitorMail.text,
          html: visitorMail.html,
        });
      } catch (autoReplyErr) {
        console.error("Auto-reply notification error:", autoReplyErr);
      }
    } else {
      // In development or when SMTP is pending configuration, log securely to console
      console.log("-----------------------------------------");
      console.log("[CONTACT FORM SUBMISSION RECEIVED]");
      console.log("To (Team):", receiverEmail);
      console.log("Reply-To:", internalMail.replyTo);
      console.log("Subject:", internalMail.subject);
      console.log("\n" + internalMail.text);
      console.log("-----------------------------------------");
      console.log("[VISITOR AUTO-REPLY GENERATED]");
      console.log("To (Visitor):", submission.email);
      console.log("Subject:", visitorMail.subject);
      console.log("\n" + visitorMail.text);
      console.log("-----------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    // Generic error message without exposing backend internals
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
