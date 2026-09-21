import { Icon } from '@iconify/react';
import SectionHead from './SectionHead.jsx';
import ArrowRight from './ArrowRight.jsx';
import { services, site } from '../data/content.js';
import { cn, container, sectionY } from '../lib/styles.js';

// Posisi cahaya biru di tiap kartu, sesuai desain
const glowPosition = ['-top-5 -right-[60px]', '-bottom-10 left-[10%]', 'bottom-[30px] -left-[70px]'];

export default function Services() {
  return (
    <section id="services" className={sectionY}>
      <div className={container}>
        <SectionHead badge={services.badge} title={services.title} />

        <ul className="grid grid-cols-1 items-start gap-[clamp(20px,3.8vw,56px)] lg:grid-cols-3">
          {services.items.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                'relative flex flex-col gap-6 overflow-hidden rounded-[40px] border-[0.5px] border-black/50 bg-navy-800',
                'px-[clamp(24px,2.9vw,41px)] py-[clamp(32px,5.5vw,79px)] text-white shadow-card lg:min-h-[500px]',
                // Kartu tengah sedikit naik, seperti di desain
                index === 1 && 'lg:-translate-y-[31px]'
              )}
            >
              <span
                className={cn(
                  'pointer-events-none absolute aspect-square w-[240px] rounded-full bg-[radial-gradient(closest-side,rgba(4,52,254,0.6),rgba(4,52,254,0))]',
                  glowPosition[index]
                )}
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-5">
                <span className="grid size-[81px] flex-none place-items-center rounded-[15px] bg-white text-black">
                  <Icon icon={item.icon} width="54" height="54" />
                </span>
                <h3 className="text-card-title font-bold">{item.title}</h3>
              </div>
              <p className="relative text-service font-medium">{item.text}</p>
              <a
                href={site.phoneLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${services.cta}: ${item.title}`}
                className="group relative mt-auto flex h-[69px] items-center justify-center gap-4 rounded-[20px] border border-white/20 bg-white/10 text-lead font-medium shadow-soft backdrop-blur-[20px] transition-colors hover:bg-white/20"
              >
                {services.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                  <ArrowRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
