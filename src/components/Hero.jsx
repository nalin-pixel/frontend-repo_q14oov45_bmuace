import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">Engineer • Builder • Explorer</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1]">
          Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400">futuristic</span> products
          that people love.
        </h1>
        <p className="text-white/70 max-w-2xl text-lg">
          I design, engineer, and ship end-to-end experiences across web, AI, and creative tech. Currently crafting delightful developer tools and playful experiments.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <a href="#projects" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">View Work</a>
          <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/20 hover:border-white/40 text-white/90">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
