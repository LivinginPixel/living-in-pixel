import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pb-24 lg:pt-40">
      <div className="flex flex-col">
        <h1 className="font-display text-[clamp(36px,4.6vw,58px)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink">
          Everything it takes to bring customers{' '}
          <span className="text-lipBlue">through the door.</span>
        </h1>

        <p className="mt-6 max-w-[50ch] text-[clamp(16px,1.5vw,18px)] leading-[1.6] text-muted">
          We build your brand, your website, the systems that capture leads, and the software and
          automation that run your business, so every stage of growth works together.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-lipBlue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(59,107,240,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2f5be0]"
          >
            See our work
          </a>
          <a
            href="mailto:hello@livinginpixel.com"
            className="rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-surface"
          >
            Start a project →
          </a>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-border shadow-[0_30px_70px_-40px_rgba(31,32,35,0.45)]">
        <Image
          src="/site/hero.jpg"
          alt="A marketing team planning a growth strategy together"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
