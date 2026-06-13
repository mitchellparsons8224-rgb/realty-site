"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ValuationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitValuationRequest(
  address: string,
  name: string,
  phone: string,
  email: string
): Promise<ValuationState> {
  if (!address || !name || !phone || !email) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Mitchell Parsons Realty <contact@mitchellparsonsrealty.com>",
      to: "mitchellparsonsrealty@gmail.com",
      replyTo: email,
      subject: `Home Valuation Request — ${address}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1C1C1E;">
          <h2 style="font-weight: 300; font-size: 28px; margin-bottom: 8px;">Home Valuation Request</h2>
          <p style="color: #B8975A; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 32px;">mitchellparsonsrealty.com</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Property</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${email}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 20px; background: #F9F6F1;">
            <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Next Step</p>
            <p style="line-height: 1.7; color: #1C1C1E;">Prepare a comparative market analysis for the property above and follow up within one business day.</p>
          </div>
        </div>
      `,
    });

    return { status: "success", message: "Request received." };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
