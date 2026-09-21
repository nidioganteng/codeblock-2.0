import { Icon } from '@iconify/react';
import SmartImage from './SmartImage.jsx';
import { footer, site } from '../data/content.js';
import { cn, container } from '../lib/styles.js';

const linkHover = 'transition-colors hover:text-white';

function LinkColumn({ heading, items, label }) {
  return (
    <nav aria-label={label}>
      <h2 className="mb-3 text-xl leading-[1.2] font-semibold">{heading}</h2>
      <ul className="space-y-[9px]">
        {items.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={cn('text-lg', linkHover)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className={cn(container, 'pt-[clamp(40px,4.5vw,48px)] pb-6')}>
        <div className="grid grid-cols-1 gap-[clamp(24px,3vw,48px)] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-semibold">
              <SmartImage src="/assets/logo.png" alt="" className="h-[46px] w-[45px] object-contain" fallback="none" />
              <span>{site.name}</span>
            </a>
            <p className="mt-3 max-w-[325px] text-lead leading-[1.35]">{footer.description}</p>
            <ul className="mt-6 flex gap-[27px]">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('inline-flex items-center', linkHover)}
                  >
                    <Icon icon={s.icon} width="35" height="35" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <LinkColumn heading="Links" items={footer.links} label="Tautan footer" />
          <LinkColumn heading="Services" items={footer.services} label="Layanan" />

          <div>
            <h2 className="mb-3 text-xl leading-[1.2] font-semibold">Contact</h2>
            <ul className="grid gap-6">
              <li>
                <a
                  href={site.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('inline-flex items-center gap-3 text-lead [overflow-wrap:anywhere]', linkHover)}
                >
                  <Icon icon="akar-icons:whatsapp-fill" width="35" height="35" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className={cn('inline-flex items-center gap-3 text-lead [overflow-wrap:anywhere]', linkHover)}
                >
                  <Icon icon="clarity:email-solid" width="35" height="35" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(28px,3vw,40px)] flex flex-wrap justify-between gap-x-6 gap-y-2 text-base">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            <a href="#home" className={linkHover}>
              Terms &amp; Conditions
            </a>{' '}
            |{' '}
            <a href="#home" className={linkHover}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
