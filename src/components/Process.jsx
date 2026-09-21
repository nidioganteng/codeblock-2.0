import { Icon } from '@iconify/react';
import Badge from './Badge.jsx';
import { approach } from '../data/content.js';
import { cn, container, sectionY } from '../lib/styles.js';

export default function Process() {
  return (
    <section className={sectionY} aria-labelledby="process-title">
      <div className={container}>
        <div className="grid grid-cols-1 items-center gap-[clamp(24px,3.5vw,48px)] rounded-[30px] bg-[#7691ff]/10 px-[clamp(24px,3.5vw,47px)] py-[clamp(28px,4.5vw,64px)] backdrop-blur-[4px] xl:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)]">
          <div className="flex flex-col items-start gap-2">
            <Badge>{approach.badge}</Badge>
            <h2 id="process-title" className="text-process font-semibold">
              {approach.title}
            </h2>
          </div>

          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-0">
            {approach.steps.map((step, index) => (
              <li key={step.number} className="relative">
                {/* Garis penghubung ke langkah berikutnya */}
                <span
                  className={cn(
                    'absolute top-[41px] right-0 left-[82px] hidden h-px bg-[#535353] sm:block',
                    index === approach.steps.length - 1 && 'sm:hidden'
                  )}
                  aria-hidden="true"
                />
                <span className="relative grid size-[82px] place-items-center rounded-full bg-white text-black">
                  <Icon icon={step.icon} width="54" height="54" />
                </span>
                <span className="mt-3 block text-xl leading-[1.2] font-bold text-brand">{step.number}</span>
                <h3 className="text-xl leading-[1.2] font-bold">{step.title}</h3>
                <p className="mt-2 max-w-[170px] text-base leading-[1.35] text-black/60">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
