import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, description, tags = [], href, image }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
      {image && (
        <img src={image} alt="" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition" />
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ArrowUpRight className="text-white/70 group-hover:text-white" size={18} />
        </div>
        <p className="text-white/70 text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/15 text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
