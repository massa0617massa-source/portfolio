"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "入力内容を確認してください。" };
  }

  const fallbackError =
    "送信できませんでした。お手数ですが massa0617massa@gmail.com へ直接ご連絡ください。";

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return { success: false, error: fallbackError };
  }

  const { error } = await resend.emails.send({
    from: "Masatoshi Sato Portfolio <onboarding@resend.dev>",
    to: "massa0617massa@gmail.com",
    replyTo: email,
    subject: `【ポートフォリオ】${name}様からお問い合わせ`,
    text: `名前: ${name}\nメール: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: fallbackError };
  }

  return { success: true };
}
