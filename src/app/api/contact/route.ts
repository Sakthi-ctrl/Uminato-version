import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateInternalNotificationEmail,
  generateVisitorConfirmationEmail,
  generateHarborTwinInternalEmail,
  ContactSubmission,
  HarborTwinSubmission,
} from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formType = (body.formType || "contact").toString().toLowerCase().trim();

    // Check if Google Apps Script URL is set for direct backend forwarding
    const googleScriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const gasResponse = await fetch(googleScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const gasData = await gasResponse.json();
        return NextResponse.json(gasData, { status: 200 });
      } catch (gasErr) {
        console.warn("Google Apps Script forwarding error, falling back to local handler:", gasErr);
      }
    }

    // Handle HarborTwin Discovery Booking
    if (formType === "harbortwin") {
      const { fullName, email, facility, priorityFocus, pageUrl } = body;

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
          { error: "A valid corporate email address is required." },
          { status: 400 }
        );
      }

      if (!facility || typeof facility !== "string" || !facility.trim()) {
        return NextResponse.json(
          { error: "Port / Terminal Facility is required." },
          { status: 400 }
        );
      }

      const submission: HarborTwinSubmission = {
        fullName: fullName.trim(),
        email: email.trim(),
        facility: facility.trim(),
        priorityFocus: priorityFocus && priorityFocus.trim() ? priorityFocus.trim() : "Port Operations",
        pageUrl: pageUrl || "https://uminato.com/harbortwin",
        submittedAt: new Date().toISOString(),
      };

      const internalMail = generateHarborTwinInternalEmail(submission);

      // SMTP dispatch
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const rawReceiverEmails = process.env.CONTACT_RECEIVER_EMAIL || "admin@uminatogroup.com";
      const receiverEmails = rawReceiverEmails
        .split(",")
        .map((e) => e.trim())
        .filter((e) => e.length > 0);
      const senderFrom = process.env.SMTP_FROM || `"UMINATO" <${smtpUser || "uminatomaritime@gmail.com"}>`;

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
          connectionTimeout: 10000,
        });

        await transporter.sendMail({
          from: senderFrom,
          to: receiverEmails,
          replyTo: internalMail.replyTo,
          subject: internalMail.subject,
          text: internalMail.text,
          html: internalMail.html,
        });
      } else {
        console.log("[DEV MODE - HARBORTWIN DISCOVERY SUBMISSION]", submission);
      }

      return NextResponse.json(
        {
          success: true,
          result: "success",
          message: "Thank you! Your HarborTwin discovery request has been received. Our team will contact you shortly.",
        },
        { status: 200 }
      );
    }

    // Standard Website Contact Submission
    const { fullName, organization, email, subject, message, pageUrl } = body;

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

    // 2. Prepare Transport
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const rawReceiverEmails = process.env.CONTACT_RECEIVER_EMAIL || "admin@uminatogroup.com";
    const receiverEmails = rawReceiverEmails
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e.length > 0);
    const senderFrom = process.env.SMTP_FROM || `"UMINATO" <${smtpUser || "uminatomaritime@gmail.com"}>`;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
      });

      // Send both internal notification and visitor confirmation in parallel
      const [teamResult, visitorResult] = await Promise.allSettled([
        transporter.sendMail({
          from: senderFrom,
          to: receiverEmails,
          replyTo: internalMail.replyTo,
          subject: "New Website Contact Enquiry",
          text: internalMail.text,
          html: internalMail.html,
        }),
        transporter.sendMail({
          from: senderFrom,
          to: submission.email,
          subject: visitorMail.subject,
          text: visitorMail.text,
          html: visitorMail.html,
        }),
      ]);

      if (teamResult.status === "rejected") {
        console.error("Failed to send internal team email:", teamResult.reason);
        throw new Error("Unable to deliver message to support team. Please try again later.");
      }

      if (visitorResult.status === "rejected") {
        console.warn("Failed to send visitor auto-reply email:", visitorResult.reason);
      }
    } else {
      if (process.env.NODE_ENV === "production") {
        console.error("[CRITICAL] SMTP credentials are not configured in production environment variables.");
        return NextResponse.json(
          { error: "Email service is temporarily unconfigured. Please contact us directly via email." },
          { status: 503 }
        );
      }

      // In development when SMTP is not configured, log to console
      console.log("-----------------------------------------");
      console.log("[DEV MODE - NO SMTP DETECTED - CONTACT FORM SUBMISSION]");
      console.log("To (Team):", receiverEmails.join(", "));
      console.log("Reply-To:", internalMail.replyTo);
      console.log("Subject:", "New Website Contact Enquiry");
      console.log("\n" + internalMail.text);
      console.log("-----------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        result: "success",
        message: "Your message has been sent successfully. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

