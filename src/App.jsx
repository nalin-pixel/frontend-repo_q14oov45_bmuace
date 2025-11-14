import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'

export default function App() {
  const projects = [
    {
      title: 'CursorGPT — AI Pair Programmer',
      description: 'Autocomplete, refactor, and generate code with a playful UX and powerful context awareness.',
      tags: ['TypeScript', 'AI', 'Electron'],
      href: 'https://naitikg.me',
      image: 'https://images.unsplash.com/photo-1610986603166-f78428624e76?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDdXJzb3JHUFQlMjAlRTIlODAlOTQlMjBBSSUyMFBhaXIlMjBQcm9ncmFtbWVyfGVufDB8MHx8fDE3NjMwODUxMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      title: 'MotionLab — Generative Motion Playground',
      description: 'A creative sandbox that lets you paint motion and export snappy micro-interactions.',
      tags: ['WebGL', 'Framer Motion', 'Canvas'],
      href: 'https://naitikg.me',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'PromptBoard — Visual Prompt IDE',
      description: 'Design, version, and share prompts collaboratively with instant previews.',
      tags: ['Next.js', 'OpenAI', 'Tailwind'],
      href: 'https://naitikg.me',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const experiences = [
    { role: 'Software Engineer', company: 'Indie Builder', time: '2021 — Present', points: [
      'Shipped 10+ products across web and AI with thousands of users',
      'Led product design and full‑stack development end‑to‑end',
      'Obsessed with performance, interaction design, and craft'
    ]},
    { role: 'Creative Technologist', company: 'Studio Work', time: '2018 — 2021', points: [
      'Prototyped interactive installations and playful experiments',
      'Built data‑driven storytelling tools and visual systems'
    ]}
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Hi, I’m Naitik — I build delightful, future‑facing software.">
          <p className="max-w-3xl text-lg leading-relaxed">
            I love turning ideas into polished, expressive products. My work blends engineering, interaction design, and a bit of sci‑fi taste. I’ve built tools for developers and designers, playful experiments in the browser, and thoughtful interfaces that feel alive.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div key={exp.role} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs text-white/60">{exp.time}</span>
                </div>
                <p className="text-white/70 text-sm mt-1">{exp.company}</p>
                <ul className="mt-3 space-y-2 list-disc pl-4 text-white/80 text-sm">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected Work" title="Projects that spark joy">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s make something amazing together">
          <div className="max-w-3xl">
            <p className="text-white/80">Open to collaborations, consulting, and ambitious ideas. Reach out — I’d love to chat.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@naitikg.me" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Email</a>
              <a href="https://cal.com/naitik" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md border border-white/20 hover:border-white/40 text-white/90">Book time</a>
              <a href="https://github.com/naitikg" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md border border-white/20 hover:border-white/40 text-white/90">GitHub</a>
            </div>
          </div>
          <p className="mt-10 text-xs text-white/50">Designed and built with love — © {new Date().getFullYear()} Naitik</p>
        </Section>
      </main>
    </div>
  )
}
