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

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "APIキーが設定されていません。" };
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "massa0617massa@gmail.com",
    subject: `【ポートフォリオ】${name}様からお問い合わせ`,
    text: `名前: ${name}\nメール: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: `送信に失敗しました: ${error.message}` };
  }

  return { success: true };
}
