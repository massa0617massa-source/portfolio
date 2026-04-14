import AnimatedBlock from "@/components/ui/AnimatedBlock";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-32 pr-16">
      <AnimatedBlock direction="left">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 mb-8 uppercase">Contact</p>
        <h2 className="text-4xl font-light text-gray-900 mb-6 leading-snug">
          まずは、話してみてください。
        </h2>
        <p className="text-sm text-gray-500 mb-6 leading-loose">
          お仕事のご依頼・ご相談はこちらから。どんな内容でもお気軽に。
        </p>
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-16">
          対応時間：8:00 〜 22:00
        </p>
      </AnimatedBlock>

      <AnimatedBlock direction="right" delay={0.1}>
        <form className="space-y-8 max-w-sm">
          <div>
            <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">NAME</label>
            <input
              type="text"
              required
              className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">EMAIL</label>
            <input
              type="email"
              required
              className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
              placeholder="example@mail.com"
            />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.3em] text-gray-400 mb-3">MESSAGE</label>
            <textarea
              required
              rows={5}
              className="w-full border-b border-gray-200 pb-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none"
              placeholder="ご依頼内容をお書きください"
            />
          </div>
          <button
            type="submit"
            className="text-[10px] tracking-[0.4em] border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            SEND
          </button>
        </form>
      </AnimatedBlock>
    </section>
  );
}
