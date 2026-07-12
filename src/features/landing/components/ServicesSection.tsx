import type { Service } from '../../../lib/types';

interface ServicesSectionProps {
  services: Service[];
  intro: string;
}

function StageIcon({ id }: { id: Service['id'] }) {
  const shared = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-6 w-6 text-lipBlue'
  };

  if (id === '01') {
    return (
      <svg {...shared}>
        <path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" />
        <path d="M13 8l3 3" />
      </svg>
    );
  }

  if (id === '02') {
    return (
      <svg {...shared}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    );
  }

  if (id === '03') {
    return (
      <svg {...shared}>
        <path d="M4 5h16l-6 8v6l-4 2v-8L4 5z" />
      </svg>
    );
  }

  if (id === '04') {
    return (
      <svg {...shared}>
        <path d="M9 8l-5 4 5 4" />
        <path d="M15 8l5 4-5 4" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </svg>
  );
}

export function ServicesSection({ services, intro }: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto max-w-[1180px] px-6 py-24 lg:px-16 lg:py-28">
      <div className="max-w-[640px]">
        <div className="reveal mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lipBlue before:block before:h-px before:w-6 before:bg-lipBlue before:content-['']">
          How we help you grow
        </div>
        <h2 className="reveal font-display text-[clamp(30px,4vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
          From first impression to full scale.
        </h2>
        <p className="reveal mt-5 text-[16px] leading-relaxed text-muted">{intro}</p>
      </div>

      <ol className="relative mt-16 flex flex-col">
        <div aria-hidden className="absolute left-7 top-2 bottom-2 w-px bg-border" />

        {services.map((service) => (
          <li key={service.id} className="reveal relative flex gap-6 pb-12 last:pb-0">
            <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-border bg-white shadow-sm">
              <StageIcon id={service.id} />
            </div>

            <div className="flex-1 pt-1">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">
                Stage {service.id}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                {service.title}
              </h3>
              <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted">
                {service.description}
              </p>
              {service.outcome ? (
                <p className="mt-3 text-sm font-medium text-lipBlue">{service.outcome}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
