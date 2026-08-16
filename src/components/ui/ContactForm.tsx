"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "エラーが発生しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full md:max-w-sm">
      <div>
        <label className="block text-[11px] tracking-[0.2em] text-gray-600 mb-3">NAME</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
          placeholder="山田 太郎"
        />
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.2em] text-gray-600 mb-3">EMAIL</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
          placeholder="example@mail.com"
        />
      </div>
      <div>
        <label className="block text-[11px] tracking-[0.2em] text-gray-600 mb-3">MESSAGE</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none"
          placeholder="ご依頼内容をお書きください"
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-gray-700" role="status">
          送信しました。ありがとうございます。
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700 leading-relaxed" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-sm tracking-[0.1em] border border-gray-900 bg-gray-900 text-white px-10 py-4 hover:bg-white hover:text-gray-900 transition-colors duration-300 disabled:opacity-40"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
