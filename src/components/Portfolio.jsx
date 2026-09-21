import { useState } from 'react';
import { Icon } from '@iconify/react';
import SectionHead from './SectionHead.jsx';
import SmartImage from './SmartImage.jsx';
import ArrowRight from './ArrowRight.jsx';
import { portfolio, site } from '../data/content.js';
import { cn, container, sectionY } from '../lib/styles.js';

function ProjectLink({ project }) {
  const base = 'group inline-flex h-12 items-center gap-3 rounded-[20px] px-6 text-[15px] font-medium transition-colors';

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer"
        className={cn(base, 'border border-brand bg-white/10 text-brand-ink hover:bg-brand hover:text-white')}>
        <Icon icon="mdi:web" width="18" height="18" />
        Lihat Website
        <span className="transition-transform duration-200 group-hover:translate-x-1.5"><ArrowRight size={14} /></span>
      </a>
    );
  }
  if (project.github) {
    return (
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className={cn(base, 'border border-black/20 bg-white/10 text-gray-800 hover:bg-black hover:text-white')}>
        <Icon icon="akar-icons:github-fill" width="18" height="18" />
        Lihat di GitHub
        <span className="transition-transform duration-200 group-hover:translate-x-1.5"><ArrowRight size={14} /></span>
      </a>
    );
  }
  return (
    <a href={site.phoneLink} target="_blank" rel="noopener noreferrer"
      className={cn(base, 'border border-brand bg-white/10 text-brand-ink hover:bg-brand hover:text-white')}>
      {portfolio.cta}
      <span className="transition-transform duration-200 group-hover:translate-x-1.5"><ArrowRight size={14} /></span>
    </a>
  );
}

const PER_PAGE = 3;

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = portfolio.projects.filter((p) => filter === 'all' || p.category === filter);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleFilter(id) {
    setFilter(id);
    setPage(1);
  }

  function handlePage(p) {
    setPage(p);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="portfolio" className={sectionY}>
      <div className={container}>
        <SectionHead badge={portfolio.badge} title={portfolio.title} />

        <div className="mb-[clamp(24px,3vw,40px)] flex flex-wrap gap-6" role="group" aria-label="Filter project">
          {portfolio.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => handleFilter(f.id)}
              className={cn(
                'min-h-11 rounded-[40px] border-2 border-black px-5 text-filter font-medium transition-colors sm:px-[43px]',
                filter === f.id ? 'bg-black text-white' : 'bg-transparent hover:bg-black/5'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="grid gap-[clamp(20px,1.9vw,27px)]">
          {visible.map((project) => (
            <li
              key={project.title}
              className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,595fr)_minmax(0,686fr)] lg:gap-[30px]"
            >
              <SmartImage
                src={project.image}
                alt={`Tampilan project ${project.title}`}
                className="aspect-[595/330] h-auto w-full rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
              />
              <div>
                <span className="text-lead leading-normal font-semibold text-brand">{project.categoryLabel}</span>
                <h3 className="mt-1 text-h2 font-semibold">{project.title}</h3>
                <p className="mt-2 text-body">{project.text}</p>

                <ul className="mt-4 grid grid-cols-2 gap-x-[clamp(20px,3.9vw,50px)] gap-y-4 sm:grid-cols-[repeat(4,minmax(0,116px))]">
                  {project.features.map((feature) => (
                    <li key={feature.label} className="flex flex-col gap-1.5">
                      <span className="grid size-[45px] place-items-center rounded-[10px] bg-navy-800 text-white">
                        <Icon icon={feature.icon} width="27" height="27" />
                      </span>
                      <span className="text-feature font-medium">{feature.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <ProjectLink project={project} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination — hanya tampil jika lebih dari 1 halaman */}
        {totalPages > 1 && (
          <div className="mt-[clamp(32px,4vw,56px)] flex justify-center gap-2" aria-label="Navigasi halaman">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                aria-current={p === page ? 'page' : undefined}
                onClick={() => handlePage(p)}
                className={cn(
                  'grid size-11 place-items-center rounded-[10px] border-2 text-base font-semibold transition-colors',
                  p === page
                    ? 'border-navy-800 bg-navy-800 text-white'
                    : 'border-black/20 bg-transparent hover:bg-black/5'
                )}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
