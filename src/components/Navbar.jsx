import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-tight">
          <span className="text-fuchsia-400">n</span>aitik<span className="text-fuchsia-400">g</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/naitikg" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/naitikg/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="text-white/80 hover:text-white"><Mail size={18} /></a>
          </div>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
