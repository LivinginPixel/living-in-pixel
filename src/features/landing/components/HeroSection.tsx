const HERO_TYPE = {
  subline: 'font-serif text-white/40'
} as const;

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pb-[100px] pt-[160px] text-center lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(82,130,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(82,130,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(82,130,255,0.1)_0%,transparent_65%)]" />

      <div className="mb-10 inline-flex animate-fadeUp items-center gap-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(82,130,255,0.05)] px-4 py-[7px] text-[11px] uppercase tracking-[2px] text-lipBlue">
        <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-lipBlue" />
        Available for new projects
      </div>

      <h1 className="animate-fadeUp font-display text-[clamp(48px,8vw,100px)] font-black leading-[0.95] tracking-[-3px] text-white opacity-0 [animation-delay:0.15s]">
        Software That
        <br />
        <em className="not-italic text-lipBlue">Helps Businesses</em>
        <br />
        <span className="font-[300] text-white/40">0perate Smarter.</span>
      </h1>

      <p className="animate-fadeUp mt-4 max-w-[520px] text-[clamp(15px,2vw,18px)] leading-[1.7] text-muted opacity-0 [animation-delay:0.3s]">
        Custom software, business websites, and automation systems designed to
        simplify operations and accelerate growth.
      </p>

      <div className="mt-[50px] flex animate-fadeUp flex-wrap justify-center gap-4 opacity-0 [animation-delay:0.45s]">
        <a
          href="#work"
          className="rounded-full bg-lipBlue px-9 py-4 text-sm font-bold text-white shadow-[0_0_40px_rgba(82,130,255,0.3)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_50px_rgba(82,130,255,0.45)]"
        >
          See Our Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[rgba(255,255,255,0.06)] px-9 py-4 text-sm text-textMain transition-[border-color,color] duration-200 hover:border-[rgba(255,255,255,0.2)] hover:text-white"
        >
          Start a Project →
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 animate-fadeUp flex-col items-center gap-2 opacity-0 [animation-delay:0.8s]">
        <span className="text-[10px] uppercase tracking-[3px] text-muted">
          Scroll
        </span>
        <div className="h-10 w-px animate-scrollPulse bg-[linear-gradient(to_bottom,#5282ff,transparent)]" />
      </div>
    </section>
  );
}
