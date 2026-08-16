import { SOCIAL_LINKS, CONTACT_EMAIL, LAST_UPDATED } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 pr-4 md:pr-16 border-t border-gray-100">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] text-gray-600 hover:text-accent transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[11px] tracking-[0.2em] text-gray-600 hover:text-accent transition-colors duration-300 uppercase"
            >
              Mail
            </a>
          </div>

          {/* colophon: このサイト自体が制作物であることを示す */}
          <p className="text-[11px] text-gray-600 leading-relaxed">
            このサイトは Next.js / TypeScript / Tailwind CSS で自作しています。
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-[11px] tracking-[0.2em] text-gray-600">
            最終更新 {LAST_UPDATED}
          </p>
          <p className="text-[11px] tracking-[0.2em] text-gray-600">
            © 2026 Masatoshi Sato
          </p>
        </div>
      </div>
    </footer>
  );
}
