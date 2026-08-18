export interface ContactSubmission {
  fullName: string;
  organization?: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Helper to escape HTML characters in dynamic strings to prevent injection
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * 1. Internal Team Notification Email
 */
export function generateInternalNotificationEmail(data: ContactSubmission) {
  const safeFullName = data.fullName?.trim() || "Visitor";
  const safeOrganization = data.organization?.trim() || "Not provided";
  const safeEmail = data.email?.trim() || "";
  const safeSubject = data.subject?.trim() || "General Enquiry";
  const rawMessage = data.message?.trim() || "";

  const emailSubject = `New Contact Form Submission — ${safeSubject}`;

  // Exact plain text structure as requested
  const text = `Hello UMINATO Team,

You have received a new message through the UMINATO website contact form.

CONTACT DETAILS

Name: ${safeFullName}
Organization: ${safeOrganization}
Email: ${safeEmail}
Subject: ${safeSubject}

MESSAGE

${rawMessage}

Please review the enquiry and respond directly to the sender at ${safeEmail}.

Best regards,
UMINATO Website
Maritime Innovation & Venture Studio`;

  // HTML format suitable for Gmail, Outlook, Apple Mail & Mobile
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(emailSubject)}</title>
  <style>
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      background-color: #08101E;
      color: #E2E8F0;
      padding: 24px 12px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0E1B31;
      border: 1px solid #1E3158;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #0E1B31 0%, #162B4E 100%);
      padding: 28px 32px;
      border-bottom: 2px solid #4AB8E8;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .brand-subtitle {
      font-size: 11px;
      letter-spacing: 1.5px;
      color: #4AB8E8;
      text-transform: uppercase;
      font-weight: 600;
    }
    .body-content {
      padding: 32px;
    }
    .greeting {
      font-size: 15px;
      color: #CBD5E1;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .section-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #4AB8E8;
      text-transform: uppercase;
      margin-top: 24px;
      margin-bottom: 12px;
      padding-bottom: 4px;
      border-bottom: 1px solid #1E3158;
    }
    .table-details {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .table-details td {
      padding: 10px 12px;
      font-size: 13px;
      border-bottom: 1px solid #142442;
      vertical-align: top;
    }
    .table-details td.label {
      width: 120px;
      color: #8AAFC8;
      font-weight: 600;
    }
    .table-details td.value {
      color: #FFFFFF;
    }
    .message-box {
      background-color: #08101E;
      border: 1px solid #1E3158;
      border-left: 3px solid #4AB8E8;
      border-radius: 4px;
      padding: 16px;
      color: #F1F5F9;
      font-size: 14px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-break: break-word;
      margin-bottom: 24px;
    }
    .action-note {
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.6;
      margin-bottom: 28px;
    }
    .btn-reply {
      display: inline-block;
      background-color: #4AB8E8;
      color: #08101E !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 4px;
      margin-top: 8px;
    }
    .footer {
      background-color: #08101E;
      padding: 20px 32px;
      border-top: 1px solid #1E3158;
      font-size: 11px;
      color: #64748B;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand-title">UMINATO</div>
      <div class="brand-subtitle">Maritime Innovation &amp; Venture Studio</div>
    </div>
    <div class="body-content">
      <p class="greeting">
        Hello UMINATO Team,<br><br>
        You have received a new message through the <strong>UMINATO website contact form</strong>.
      </p>

      <div class="section-title">Contact Details</div>
      <table class="table-details" role="presentation">
        <tr>
          <td class="label">Name:</td>
          <td class="value"><strong>${escapeHtml(safeFullName)}</strong></td>
        </tr>
        <tr>
          <td class="label">Organization:</td>
          <td class="value">${escapeHtml(safeOrganization)}</td>
        </tr>
        <tr>
          <td class="label">Email:</td>
          <td class="value"><a href="mailto:${escapeHtml(safeEmail)}" style="color: #4AB8E8; text-decoration: none;">${escapeHtml(safeEmail)}</a></td>
        </tr>
        <tr>
          <td class="label">Subject:</td>
          <td class="value">${escapeHtml(safeSubject)}</td>
        </tr>
      </table>

      <div class="section-title">Message</div>
      <div class="message-box">${escapeHtml(rawMessage)}</div>

      <p class="action-note">
        Please review the enquiry and respond directly to the sender at <a href="mailto:${escapeHtml(safeEmail)}" style="color: #4AB8E8; text-decoration: none;">${escapeHtml(safeEmail)}</a>.
        <br><br>
        <a href="mailto:${escapeHtml(safeEmail)}?subject=Re:%20${encodeURIComponent(safeSubject)}" class="btn-reply">Reply to ${escapeHtml(safeFullName)}</a>
      </p>
    </div>
    <div class="footer">
      <strong>UMINATO Website</strong><br>
      Maritime Innovation &amp; Venture Studio<br>
      Accelerating the transition toward green, autonomous, and resilient maritime systems.
    </div>
  </div>
</body>
</html>`;

  return {
    subject: emailSubject,
    text,
    html,
    replyTo: safeEmail,
  };
}

/**
 * 2. Visitor Acknowledgment / Confirmation Auto-Reply Email
 */
export function generateVisitorConfirmationEmail(data: ContactSubmission) {
  const safeFullName = data.fullName?.trim() || "there";
  const safeOrganization = data.organization?.trim() || "Not provided";
  const safeSubject = data.subject?.trim() || "General Enquiry";

  const emailSubject = `Thank you for contacting UMINATO — ${safeSubject}`;

  const text = `Hello ${safeFullName},

Thank you for reaching out to UMINATO.

We have successfully received your message regarding ${safeSubject}. Our team will review your enquiry and get back to you as soon as possible.

Your enquiry details:

Organization: ${safeOrganization}
Subject: ${safeSubject}

Thank you for your interest in building the future of maritime systems with UMINATO.

Best regards,
UMINATO Team
Maritime Innovation & Venture Studio
Building Green, Autonomous, Resilient, and Future-Ready Maritime Systems`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(emailSubject)}</title>
  <style>
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      background-color: #08101E;
      color: #E2E8F0;
      padding: 24px 12px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0E1B31;
      border: 1px solid #1E3158;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #0E1B31 0%, #162B4E 100%);
      padding: 28px 32px;
      border-bottom: 2px solid #4AB8E8;
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .brand-subtitle {
      font-size: 11px;
      letter-spacing: 1.5px;
      color: #4AB8E8;
      text-transform: uppercase;
      font-weight: 600;
    }
    .body-content {
      padding: 32px;
    }
    .greeting {
      font-size: 15px;
      color: #E2E8F0;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    .info-card {
      background-color: #08101E;
      border: 1px solid #1E3158;
      border-radius: 6px;
      padding: 16px 20px;
      margin: 20px 0;
    }
    .info-row {
      margin-bottom: 8px;
      font-size: 13px;
      color: #CBD5E1;
    }
    .info-row strong {
      color: #4AB8E8;
      display: inline-block;
      min-width: 100px;
    }
    .footer {
      background-color: #08101E;
      padding: 20px 32px;
      border-top: 1px solid #1E3158;
      font-size: 11px;
      color: #64748B;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand-title">UMINATO</div>
      <div class="brand-subtitle">Maritime Innovation &amp; Venture Studio</div>
    </div>
    <div class="body-content">
      <p class="greeting">
        Hello <strong>${escapeHtml(safeFullName)}</strong>,<br><br>
        Thank you for reaching out to <strong>UMINATO</strong>.<br><br>
        We have successfully received your message regarding <strong>${escapeHtml(safeSubject)}</strong>. Our team will review your enquiry and get back to you as soon as possible.
      </p>

      <div class="info-card">
        <div class="info-row">
          <strong>Organization:</strong> ${escapeHtml(safeOrganization)}
        </div>
        <div class="info-row" style="margin-bottom: 0;">
          <strong>Subject:</strong> ${escapeHtml(safeSubject)}
        </div>
      </div>

      <p class="greeting" style="margin-top: 24px; margin-bottom: 0;">
        Thank you for your interest in building the future of maritime systems with UMINATO.<br><br>
        Best regards,<br>
        <strong>UMINATO Team</strong><br>
        <span style="font-size: 12px; color: #8AAFC8;">Maritime Innovation &amp; Venture Studio</span><br>
        <span style="font-size: 11px; color: #64748B;">Building Green, Autonomous, Resilient, and Future-Ready Maritime Systems</span>
      </p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} UMINATO. All rights reserved.
    </div>
  </div>
</body>
</html>`;

  return {
    subject: emailSubject,
    text,
    html,
  };
}

/**
 * HarborTwin Discovery Booking Submission Type
 */
export interface HarborTwinSubmission {
  fullName: string;
  email: string;
  facility: string;
  priorityFocus?: string;
  submittedAt?: string;
  pageUrl?: string;
}

/**
 * 3. HarborTwin Discovery Internal Notification Email
 */
export function generateHarborTwinInternalEmail(data: HarborTwinSubmission) {
  const safeFullName = data.fullName?.trim() || "Executive Visitor";
  const safeEmail = data.email?.trim() || "";
  const safeFacility = data.facility?.trim() || "Not specified";
  const safeFocus = data.priorityFocus?.trim() || "General Discovery";
  const safePageUrl = data.pageUrl?.trim() || "https://uminato.com/harbortwin";
  const safeDate = data.submittedAt ? new Date(data.submittedAt).toUTCString() : new Date().toUTCString();

  const emailSubject = `New HarborTwin Discovery Request`;

  const text = `NEW HARBORTWIN™ DISCOVERY REQUEST
===================================

Full Name:               ${safeFullName}
Corporate Email:         ${safeEmail}
Port / Terminal:         ${safeFacility}
Primary Priority Focus:  ${safeFocus}
Submission Date (UTC):   ${safeDate}
Page URL:                ${safePageUrl}

-----------------------------------
Please respond directly to ${safeFullName} at ${safeEmail}.
UMINATO Maritime Group - HarborTwin™ Autonomous Port Intelligence`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #08101E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F1F5F9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #0E1B31; border: 1px solid #1E3158; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0E1B31 0%, #162B4E 100%); border-bottom: 2px solid #4AB8E8;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">UMINATO</div>
                    <div style="font-size: 11px; letter-spacing: 1.5px; color: #4AB8E8; text-transform: uppercase; font-weight: 600; margin-top: 2px;">HarborTwin™ Intelligence Platform</div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(74, 184, 232, 0.15); border: 1px solid #4AB8E8; color: #4AB8E8; font-size: 10px; font-family: monospace; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      Discovery Request
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              <p style="font-size: 15px; color: #CBD5E1; margin: 0 0 20px 0; line-height: 1.6;">
                Hello UMINATO Team,<br><br>
                An executive inquiry has been submitted for a <strong>HarborTwin™ Discovery Session &amp; Workshop</strong>.
              </p>

              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #4AB8E8; text-transform: uppercase; margin: 24px 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid #1E3158;">
                Discovery Booking Information
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; width: 150px; border-bottom: 1px solid #142442;">Full Name:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; font-weight: 700; border-bottom: 1px solid #142442;">${escapeHtml(safeFullName)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; border-bottom: 1px solid #142442;">Corporate Email:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #4AB8E8; border-bottom: 1px solid #142442;">
                    <a href="mailto:${escapeHtml(safeEmail)}" style="color: #4AB8E8; text-decoration: none; font-weight: 600;">${escapeHtml(safeEmail)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; border-bottom: 1px solid #142442;">Port / Terminal Facility:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">${escapeHtml(safeFacility)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; border-bottom: 1px solid #142442;">Primary Priority Focus:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">
                    <span style="display: inline-block; background-color: #08101E; border: 1px solid #1E3158; padding: 4px 10px; border-radius: 4px; font-size: 12px;">
                      ${escapeHtml(safeFocus)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; border-bottom: 1px solid #142442;">Submission Timestamp:</td>
                  <td style="padding: 10px 12px; font-size: 12px; color: #94A3B8; font-family: monospace; border-bottom: 1px solid #142442;">${escapeHtml(safeDate)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: #8AAFC8; font-weight: 600; border-bottom: 1px solid #142442;">Source Page URL:</td>
                  <td style="padding: 10px 12px; font-size: 12px; color: #94A3B8; border-bottom: 1px solid #142442; word-break: break-all;">
                    <a href="${escapeHtml(safePageUrl)}" style="color: #8AAFC8; text-decoration: underline;">${escapeHtml(safePageUrl)}</a>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; background-color: #08101E; border: 1px solid #1E3158; border-left: 4px solid #4AB8E8; border-radius: 6px; padding: 16px;">
                <tr>
                  <td style="padding: 14px 16px;">
                    <div style="font-size: 13px; color: #CBD5E1; line-height: 1.6; margin-bottom: 12px;">
                      Hit reply to email <strong>${escapeHtml(safeFullName)}</strong> directly at <a href="mailto:${escapeHtml(safeEmail)}" style="color: #4AB8E8; text-decoration: none;">${escapeHtml(safeEmail)}</a>.
                    </div>
                    <a href="mailto:${escapeHtml(safeEmail)}?subject=Re:%20HarborTwin%20Discovery%20Session%20%E2%80%94%20UMINATO" style="display: inline-block; background-color: #4AB8E8; color: #08101E; text-decoration: none; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 6px;">
                      Reply to ${escapeHtml(safeFullName)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="background-color: #08101E; padding: 20px 32px; border-top: 1px solid #1E3158; font-size: 11px; color: #64748B; line-height: 1.5;">
              <strong>UMINATO HarborTwin™</strong> &bull; Maritime AI &amp; Digital Twin Intelligence<br>
              Unified Operations, Predictive Maintenance, Computer Vision &amp; Decarbonization for Global Ports.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: emailSubject,
    text,
    html,
    replyTo: safeEmail,
  };
}

