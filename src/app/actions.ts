'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function sanitizeDisplayName(name: string) {
  // Remove characters that can break "Name <email@...>" formatting
  // Keep it simple and safe for email headers.
  return name.replace(/[<>"]/g, '').replace(/\s+/g, ' ').trim().slice(0, 60);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitApplication(_: any, formData: FormData) {
  try {
    const nameRaw = String(formData.get('name') ?? '').trim();
    const emailRaw = String(formData.get('email') ?? '')
      .trim()
      .toLowerCase();
    const phoneRaw = String(formData.get('phone') ?? '').trim();
    const messageRaw = String(formData.get('message') ?? '').trim();
    const jobTitle = String(formData.get('jobTitle') ?? '').trim();
    const jobId = String(formData.get('jobId') ?? '').trim();

    // Server-side validation (never rely only on client validation)
    if (!nameRaw)
      return { success: false, message: 'Please enter your full name.' };
    if (!emailRaw || !isValidEmail(emailRaw)) {
      return {
        success: false,
        message:
          'Please enter a valid email address (example: name@gmail.com).',
      };
    }
    if (!phoneRaw)
      return { success: false, message: 'Please enter your phone number.' };
    if (!jobTitle || !jobId)
      return {
        success: false,
        message: 'Job details missing. Please reopen the application form.',
      };

    const safeName = sanitizeDisplayName(nameRaw);

    // ✅ Resend requires replyTo to be "email@example.com" OR "Name <email@example.com>"
    // We'll always send a safe format. [web:24][web:25]
    const replyTo = safeName ? `${safeName} <${emailRaw}>` : emailRaw;

    // File (optional, but your UI sets required)
    const file = formData.get('resume') as File | null;
    const attachments: { filename: string; content: Buffer }[] = [];

    if (file && file.size > 0) {
      // You can enforce size here too (example: 5MB)
      const MAX = 5 * 1024 * 1024;
      if (file.size > MAX)
        return {
          success: false,
          message: 'Resume too large. Please upload under 5MB.',
        };

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    const { error } = await resend.emails.send({
      from: 'Careers Form <noreply@magnivida.com>',
      to: ['info@magnivida.com'],
      subject: `New Application: ${nameRaw} — ${jobTitle} (${jobId})`,
      replyTo, // ✅ fixed
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.5">
          <h2>New Job Application</h2>
          <p><strong>Position:</strong> ${jobTitle}</p>
          <p><strong>Job ID:</strong> ${jobId}</p>
          <hr />
          <p><strong>Name:</strong> ${nameRaw}</p>
          <p><strong>Email:</strong> ${emailRaw}</p>
          <p><strong>Phone:</strong> ${phoneRaw}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${messageRaw ? messageRaw.replaceAll('\n', '<br/>') : '(No message provided)'}</p>
          <p style="color:#666;font-size:12px;margin-top:16px">
            Resume is attached (if provided).
          </p>
        </div>
      `,
      attachments,
    });

    if (error) {
      console.error('Resend Error:', error);
      // Send a user-friendly message back to the modal
      return {
        success: false,
        message:
          'Unable to send application right now. Please try again in 1 minute.',
      };
    }

    return { success: true, message: 'Application sent successfully!' };
  } catch (err) {
    console.error('submitApplication crash:', err);
    return {
      success: false,
      message: 'Something went wrong on the server. Please try again.',
    };
  }
}
