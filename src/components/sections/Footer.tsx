import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 pr-4 md:pr-16 border-t border-gray-100">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors duration-300 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[10px] tracking-[0.3em] text-gray-400">
          © 2026 Masatoshi Sato
        </p>
      </div>
    </footer>
  );
}
