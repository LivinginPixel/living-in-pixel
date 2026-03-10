interface ContactSectionProps {
  email: string;
}

export function ContactSection({ email }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#040408] px-6 py-28 text-center lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(82,130,255,0.12)_0%,transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="reveal font-display text-5xl font-black leading-none tracking-[-3px] text-white md:text-7xl">
          Ready to look
          <br />
          like you <span className="text-lipBlue">mean it?</span>
        </h2>

        <p className="reveal mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
          Tell us what you are building. We will show you how to make it impossible to ignore.
        </p>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${email}`} className="rounded-full bg-lipBlue px-8 py-4 text-sm font-bold text-white">
            Start a Project
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/10 px-8 py-4 text-sm text-textMain hover:border-white/30 hover:text-white"
          >
            View Work First
          </a>
        </div>
      </div>
    </section>
  );
}
