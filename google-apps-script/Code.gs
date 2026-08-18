/**
 * ============================================================================
 * UMINATO MARITIME GROUP - UNIFIED GOOGLE APPS SCRIPT EMAIL BACKEND
 * ============================================================================
 * Handles both:
 * 1. Website Contact Form (formType: "contact")
 * 2. HarborTwin™ Discovery Booking Form (formType: "harbortwin")
 *
 * Deliverability & Security:
 * - Direct routing to admin@uminatogroup.com
 * - Dynamic Reply-To header pointing to visitor email
 * - HTML entity escaping against XSS/injection
 * - Clean semantic HTML tables compatible with Gmail, Apple Mail & Outlook
 * - CORS-compliant JSON response
 * ============================================================================
 */

// Global Configuration
const CONFIG = {
  RECEIVER_EMAIL: "admin@uminatogroup.com",
  BRAND_NAME: "UMINATO",
  STUDIO_NAME: "Maritime Innovation & Venture Studio",
  PRIMARY_COLOR: "#4AB8E8",     // Sky Blue accent
  BG_DARK: "#08101E",           // Void Dark
  BG_CARD: "#0E1B31",           // Slate Navy
  BORDER_COLOR: "#1E3158",      // Subdued Border
  TEXT_LIGHT: "#F1F5F9",
  TEXT_MUTED: "#8AAFC8"
};

/**
 * Handle incoming POST requests from frontend forms
 */
function doPost(e) {
  try {
    // 1. Parse incoming payload (supports application/json and form-urlencoded)
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // 2. Identify Form Type (default to 'contact' for backward compatibility)
    const formType = (data.formType || data.type || "contact").toString().toLowerCase().trim();

    // 3. Route to respective handler
    if (formType === "harbortwin") {
      return handleHarborTwinSubmission(data);
    } else {
      return handleContactSubmission(data);
    }

  } catch (error) {
    Logger.log("doPost Error: " + error.toString());
    return createJsonResponse({
      status: "error",
      result: "error",
      message: "An internal server error occurred while processing your request: " + error.toString()
    });
  }
}

/**
 * Handle GET requests (Useful for quick health checks)
 */
function doGet(e) {
  return createJsonResponse({
    status: "ok",
    result: "success",
    service: "UMINATO Unified Email Endpoint",
    timestamp: new Date().toISOString()
  });
}

/**
 * ----------------------------------------------------------------------------
 * 1. HARBORTWIN DISCOVERY BOOKING FORM HANDLER
 * ----------------------------------------------------------------------------
 */
function handleHarborTwinSubmission(data) {
  const fullName = sanitize(data.fullName || data.name || "Executive Visitor");
  const email = sanitize(data.email || data.corporateEmail || "");
  const facility = sanitize(data.facility || data.terminal || data.port || "Not specified");
  const priorityFocus = sanitize(data.priorityFocus || data.focus || data.primaryFocus || "General Discovery");
  const pageUrl = sanitize(data.pageUrl || data.url || "https://uminato.com/harbortwin");
  const submittedAt = data.submittedAt ? new Date(data.submittedAt).toLocaleString("en-US", { timeZone: "UTC", dateStyle: "full", timeStyle: "long" }) : new Date().toUTCString();

  // Email Validation
  if (!email || !isValidEmail(email)) {
    return createJsonResponse({
      status: "error",
      result: "error",
      message: "A valid corporate email address is required."
    });
  }

  const subject = "New HarborTwin Discovery Request";

  // Plain Text Version (deliverability fallback)
  const plainText = [
    "NEW HARBORTWIN™ DISCOVERY REQUEST",
    "===================================",
    "",
    `Full Name:               ${fullName}`,
    `Corporate Email:         ${email}`,
    `Port / Terminal:         ${facility}`,
    `Primary Priority Focus:  ${priorityFocus}`,
    `Submission Date (UTC):   ${submittedAt}`,
    `Page URL:                ${pageUrl}`,
    "",
    "-----------------------------------",
    `Please respond directly to ${fullName} at ${email}.`,
    "UMINATO Maritime Group - HarborTwin™ Autonomous Port Intelligence"
  ].join("\n");

  // Premium Branded Blue Theme HTML Template
  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: ${CONFIG.BG_DARK}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${CONFIG.TEXT_LIGHT};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: ${CONFIG.BG_CARD}; border: 1px solid ${CONFIG.BORDER_COLOR}; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0E1B31 0%, #162B4E 100%); border-bottom: 2px solid ${CONFIG.PRIMARY_COLOR};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">${CONFIG.BRAND_NAME}</div>
                    <div style="font-size: 11px; letter-spacing: 1.5px; color: ${CONFIG.PRIMARY_COLOR}; text-transform: uppercase; font-weight: 600; margin-top: 2px;">HarborTwin™ Intelligence Platform</div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(74, 184, 232, 0.15); border: 1px solid ${CONFIG.PRIMARY_COLOR}; color: ${CONFIG.PRIMARY_COLOR}; font-size: 10px; font-family: monospace; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      Discovery Request
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">
              <p style="font-size: 15px; color: #CBD5E1; margin: 0 0 20px 0; line-height: 1.6;">
                Hello UMINATO Team,<br><br>
                An executive inquiry has been submitted for a <strong>HarborTwin™ Discovery Session &amp; Workshop</strong>.
              </p>

              <!-- Section: Details Table -->
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: ${CONFIG.PRIMARY_COLOR}; text-transform: uppercase; margin: 24px 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid ${CONFIG.BORDER_COLOR};">
                Discovery Booking Information
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; width: 150px; border-bottom: 1px solid #142442;">Full Name:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; font-weight: 700; border-bottom: 1px solid #142442;">${escapeHtml(fullName)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Corporate Email:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.PRIMARY_COLOR}; border-bottom: 1px solid #142442;">
                    <a href="mailto:${escapeHtml(email)}" style="color: ${CONFIG.PRIMARY_COLOR}; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Port / Terminal Facility:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">${escapeHtml(facility)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Primary Priority Focus:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">
                    <span style="display: inline-block; background-color: #08101E; border: 1px solid ${CONFIG.BORDER_COLOR}; padding: 4px 10px; border-radius: 4px; font-size: 12px;">
                      ${escapeHtml(priorityFocus)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Submission Timestamp:</td>
                  <td style="padding: 10px 12px; font-size: 12px; color: #94A3B8; font-family: monospace; border-bottom: 1px solid #142442;">${escapeHtml(submittedAt)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Source Page URL:</td>
                  <td style="padding: 10px 12px; font-size: 12px; color: #94A3B8; border-bottom: 1px solid #142442; word-break: break-all;">
                    <a href="${escapeHtml(pageUrl)}" style="color: #8AAFC8; text-decoration: underline;">${escapeHtml(pageUrl)}</a>
                  </td>
                </tr>
              </table>

              <!-- Action Callout -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px; background-color: ${CONFIG.BG_DARK}; border: 1px solid ${CONFIG.BORDER_COLOR}; border-left: 4px solid ${CONFIG.PRIMARY_COLOR}; border-radius: 6px; padding: 16px;">
                <tr>
                  <td style="padding: 14px 16px;">
                    <div style="font-size: 13px; color: #CBD5E1; line-height: 1.6; margin-bottom: 12px;">
                      Hit reply to email <strong>${escapeHtml(fullName)}</strong> directly at <a href="mailto:${escapeHtml(email)}" style="color: ${CONFIG.PRIMARY_COLOR}; text-decoration: none;">${escapeHtml(email)}</a>.
                    </div>
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20HarborTwin%20Discovery%20Session%20%E2%80%94%20UMINATO" style="display: inline-block; background-color: ${CONFIG.PRIMARY_COLOR}; color: #08101E; text-decoration: none; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 6px;">
                      Reply to ${escapeHtml(fullName)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${CONFIG.BG_DARK}; padding: 20px 32px; border-top: 1px solid ${CONFIG.BORDER_COLOR}; font-size: 11px; color: #64748B; line-height: 1.5;">
              <strong>${CONFIG.BRAND_NAME} HarborTwin™</strong> &bull; Maritime AI &amp; Digital Twin Intelligence<br>
              Unified Operations, Predictive Maintenance, Computer Vision &amp; Decarbonization for Global Ports.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  // Dispatch Email via MailApp
  MailApp.sendEmail({
    to: CONFIG.RECEIVER_EMAIL,
    replyTo: email,
    subject: subject,
    body: plainText,
    htmlBody: htmlBody,
    name: "UMINATO HarborTwin Alerts"
  });

  return createJsonResponse({
    status: "success",
    result: "success",
    message: "Thank you! Your HarborTwin discovery request has been received. Our team will contact you shortly."
  });
}

/**
 * ----------------------------------------------------------------------------
 * 2. WEBSITE CONTACT ENQUIRY FORM HANDLER
 * ----------------------------------------------------------------------------
 */
function handleContactSubmission(data) {
  const fullName = sanitize(data.fullName || data.name || "Website Visitor");
  const organization = sanitize(data.organization || data.company || "Not provided");
  const email = sanitize(data.email || "");
  const subjectCategory = sanitize(data.subject || data.topic || "General Enquiry");
  const message = sanitize(data.message || data.comments || "No message content provided.");
  const pageUrl = sanitize(data.pageUrl || data.url || "https://uminato.com/contact");
  const submittedAt = data.submittedAt ? new Date(data.submittedAt).toLocaleString("en-US", { timeZone: "UTC", dateStyle: "full", timeStyle: "long" }) : new Date().toUTCString();

  // Email Validation
  if (!email || !isValidEmail(email)) {
    return createJsonResponse({
      status: "error",
      result: "error",
      message: "A valid email address is required."
    });
  }

  const subject = "New Website Contact Enquiry";

  // Plain Text Version
  const plainText = [
    "NEW WEBSITE CONTACT ENQUIRY",
    "===========================",
    "",
    `Name:          ${fullName}`,
    `Organization:  ${organization}`,
    `Email:         ${email}`,
    `Subject:       ${subjectCategory}`,
    `Date (UTC):    ${submittedAt}`,
    `Page URL:      ${pageUrl}`,
    "",
    "MESSAGE:",
    "--------",
    message,
    "",
    "---------------------------",
    `Please respond directly to ${email}.`,
    "UMINATO Website"
  ].join("\n");

  // Branded HTML Template
  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: ${CONFIG.BG_DARK}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${CONFIG.TEXT_LIGHT};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <!-- Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: ${CONFIG.BG_CARD}; border: 1px solid ${CONFIG.BORDER_COLOR}; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0E1B31 0%, #162B4E 100%); border-bottom: 2px solid ${CONFIG.PRIMARY_COLOR};">
              <div style="font-size: 20px; font-weight: 800; letter-spacing: 2px; color: #FFFFFF; text-transform: uppercase;">${CONFIG.BRAND_NAME}</div>
              <div style="font-size: 11px; letter-spacing: 1.5px; color: ${CONFIG.PRIMARY_COLOR}; text-transform: uppercase; font-weight: 600; margin-top: 2px;">${CONFIG.STUDIO_NAME}</div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <p style="font-size: 15px; color: #CBD5E1; margin: 0 0 20px 0; line-height: 1.6;">
                Hello UMINATO Team,<br><br>
                You have received a new message through the <strong>UMINATO website contact form</strong>.
              </p>

              <!-- Section: Details Table -->
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: ${CONFIG.PRIMARY_COLOR}; text-transform: uppercase; margin: 24px 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid ${CONFIG.BORDER_COLOR};">
                Contact Details
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; width: 140px; border-bottom: 1px solid #142442;">Name:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; font-weight: 700; border-bottom: 1px solid #142442;">${escapeHtml(fullName)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Organization:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">${escapeHtml(organization)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Email:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.PRIMARY_COLOR}; border-bottom: 1px solid #142442;">
                    <a href="mailto:${escapeHtml(email)}" style="color: ${CONFIG.PRIMARY_COLOR}; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-size: 13px; color: ${CONFIG.TEXT_MUTED}; font-weight: 600; border-bottom: 1px solid #142442;">Subject:</td>
                  <td style="padding: 10px 12px; font-size: 13px; color: #FFFFFF; border-bottom: 1px solid #142442;">${escapeHtml(subjectCategory)}</td>
                </tr>
              </table>

              <!-- Section: Message Box -->
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: ${CONFIG.PRIMARY_COLOR}; text-transform: uppercase; margin: 24px 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid ${CONFIG.BORDER_COLOR};">
                Message Content
              </div>
              <div style="background-color: ${CONFIG.BG_DARK}; border: 1px solid ${CONFIG.BORDER_COLOR}; border-left: 3px solid ${CONFIG.PRIMARY_COLOR}; border-radius: 4px; padding: 16px; color: #F1F5F9; font-size: 14px; line-height: 1.7; white-space: pre-wrap; word-break: break-word; margin-bottom: 24px;">
                ${escapeHtml(message)}
              </div>

              <!-- Quick Reply Action -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 16px;">
                <tr>
                  <td>
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(subjectCategory)}" style="display: inline-block; background-color: ${CONFIG.PRIMARY_COLOR}; color: #08101E; text-decoration: none; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 6px;">
                      Reply to ${escapeHtml(fullName)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${CONFIG.BG_DARK}; padding: 20px 32px; border-top: 1px solid ${CONFIG.BORDER_COLOR}; font-size: 11px; color: #64748B; line-height: 1.5;">
              <strong>${CONFIG.BRAND_NAME} Website</strong> &bull; ${CONFIG.STUDIO_NAME}<br>
              Accelerating the transition toward green, autonomous, and resilient maritime systems.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  // Dispatch Email via MailApp
  MailApp.sendEmail({
    to: CONFIG.RECEIVER_EMAIL,
    replyTo: email,
    subject: subject,
    body: plainText,
    htmlBody: htmlBody,
    name: "UMINATO Website Alerts"
  });

  return createJsonResponse({
    status: "success",
    result: "success",
    message: "Thank you for reaching out! We have received your message and will get back to you shortly."
  });
}

/**
 * ----------------------------------------------------------------------------
 * UTILITY & SECURITY HELPERS
 * ----------------------------------------------------------------------------
 */

function sanitize(input) {
  if (input === null || input === undefined) return "";
  return String(input).trim();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
