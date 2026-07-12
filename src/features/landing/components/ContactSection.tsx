interface ContactSectionProps {
  email: string;
}

export function ContactSection({ email }: ContactSectionProps) {
  return (
    <section id="contact" className="px-6 pb-24 lg:px-16">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[32px] border border-border bg-surface px-6 py-20 text-center lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,107,240,0.12)_0%,transparent_62%)]" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="reveal font-display text-[clamp(32px,5vw,58px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Ready to fill <span className="text-lipBlue">your calendar?</span>
          </h2>

          <p className="reveal mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Tell us about your business and where you want to grow. We&rsquo;ll show you exactly how a
            system would work for you. No jargon, no pressure.
          </p>

          <div className="reveal mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-lipBlue px-8 py-4 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(59,107,240,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2f5be0]"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-border bg-white px-8 py-4 text-sm font-semibold text-ink transition hover:border-ink/25 hover:bg-surface2"
            >
              View work first
            </a>
          </div>

          <p className="reveal mt-6 text-sm text-muted">
            or email us at{' '}
            <a href={`mailto:${email}`} className="font-medium text-lipBlue hover:underline">
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
