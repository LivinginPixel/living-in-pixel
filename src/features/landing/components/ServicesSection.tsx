import type { Service } from '../../../lib/types';

interface ServicesSectionProps {
  services: Service[];
}

function ServiceIcon({ id }: { id: Service['id'] }) {
  if (id === '01') {
    return (
      <svg className="mb-6 h-11 w-11 text-lipBlue" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="8" width="36" height="28" rx="3" />
        <path d="M14 20l4 4-4 4M22 28h8" />
      </svg>
    );
  }

  if (id === '02') {
    return (
      <svg className="mb-6 h-11 w-11 text-lipBlue" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <rect x="24" y="4" width="16" height="16" rx="3" />
        <rect x="4" y="24" width="16" height="16" rx="3" />
        <rect x="24" y="24" width="16" height="16" rx="3" />
      </svg>
    );
  }

  return (
    <svg className="mb-6 h-11 w-11 text-lipBlue" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="22" cy="22" r="16" />
      <path d="M22 6v4M22 34v4M6 22h4M34 22h4" />
      <circle cx="22" cy="22" r="6" />
    </svg>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-[60px] py-[120px] max-[900px]:px-6 max-[900px]:py-20">
      <div className="reveal mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
        What We Do
      </div>
      <h2 className="reveal font-display text-[clamp(32px,4vw,52px)] font-black leading-[1.05] tracking-[-2px] text-white">
        Three things.
        <br />
        <em className="font-serif text-white/40">Done exceptionally.</em>
      </h2>

      <div className="mt-[60px] grid gap-[2px] min-[901px]:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="reveal group relative overflow-hidden rounded border border-white/[0.06] bg-surface px-9 py-11 transition-colors first:rounded-[16px_4px_4px_4px] last:rounded-[4px_4px_16px_4px] hover:border-lipBlue/30 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_0%,rgba(82,130,255,0.07)_0%,transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
          >
            <div className="relative z-10">
              <div className="mb-6 font-display text-[11px] font-normal tracking-[2px] text-lipBlue">{service.id}</div>
              <ServiceIcon id={service.id} />
              <h3 className="mb-[14px] font-display text-[17px] font-bold leading-[1.3] tracking-[-0.5px] text-white">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-muted">{service.description}</p>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.5px] text-lipBlue transition-[gap] duration-200 hover:gap-[14px]"
              >
                Explore →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
