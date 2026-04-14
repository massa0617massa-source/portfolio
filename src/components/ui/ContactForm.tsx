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
        <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">NAME</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
          placeholder="山田 太郎"
        />
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">EMAIL</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
          placeholder="example@mail.com"
        />
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">MESSAGE</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none"
          placeholder="ご依頼内容をお書きください"
        />
      </div>

      {status === "success" && (
        <p className="text-[10px] tracking-[0.3em] text-gray-500">
          送信しました。ありがとうございます。
        </p>
      )}
      {status === "error" && (
        <p className="text-[10px] tracking-[0.3em] text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="text-[10px] tracking-[0.4em] border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300 disabled:opacity-40"
      >
        {status === "sending" ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
}
