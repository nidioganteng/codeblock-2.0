import Badge from './Badge.jsx';
import { about } from '../data/content.js';
import { cn, container } from '../lib/styles.js';

export default function About() {
  return (
    <section id="about" className="pt-[clamp(48px,5.8vw,83px)] pb-[clamp(32px,3.05vw,44px)]">
      <div
        className={cn(
          container,
          'grid grid-cols-1 items-start gap-[clamp(32px,6vw,90px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]'
        )}
      >
        <div className="flex flex-col items-start gap-2">
          <Badge>{about.badge}</Badge>
          <h2 className="text-h2 font-semibold">
            {about.titleStart}
            <span className="text-brand">{about.titleAccent}</span>
          </h2>
        </div>

        <div>
          <div className="space-y-4 leading-[1.55]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 xs:grid-cols-3">
            {about.stats.map((stat) => (
              // Markup memakai urutan dt lalu dd (valid), tampilan dibalik supaya angka ada di atas label
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-lead leading-[1.3] font-medium">{stat.label}</dt>
                <dd className="text-stat font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
