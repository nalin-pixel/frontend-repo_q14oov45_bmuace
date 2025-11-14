export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.15),transparent),radial-gradient(1000px_400px_at_0%_80%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/70">{eyebrow}</p>}
        {title && <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">{title}</h2>}
        <div className="text-white/80">
          {children}
        </div>
      </div>
    </section>
  );
}
