"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name    = formData.get("name")?.toString().trim();
  const email   = formData.get("email")?.toString().trim();
  const phone   = formData.get("phone")?.toString().trim();
  const interest = formData.get("interest")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Mitchell Parsons Realty <contact@mitchellparsonsrealty.com>",
      to:   "mitchellparsonsrealty@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1C1C1E;">
          <h2 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">New Website Inquiry</h2>
          <p style="color: #B8975A; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 32px;">mitchellparsonsrealty.com</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${email}</td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${phone}</td>
            </tr>` : ""}
            ${interest ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Interested In</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${interest}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #F9F6F1;">
            <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
            <p style="line-height: 1.7; color: #1C1C1E;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    return { status: "success", message: "Thank you — I'll be in touch shortly." };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again or email me directly." };
  }
}
