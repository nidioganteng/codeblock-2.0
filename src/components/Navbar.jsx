import { useEffect, useState } from 'react';
import SmartImage from './SmartImage.jsx';
import { navLinks, site } from '../data/content.js';
import { cn, container } from '../lib/styles.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Tandai menu yang sesuai dengan section yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Tutup menu saat tekan Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-white transition-[background-color,backdrop-filter] duration-300',
        solid && 'bg-navy-950/90 backdrop-blur-md'
      )}
    >
      <div
        className={cn(
          container,
          'flex h-[76px] items-center gap-6 transition-[height] duration-300',
          !solid && 'lg:h-[100px]'
        )}
      >
        <a
          href="#home"
          className="mr-auto inline-flex items-center gap-2 text-2xl font-semibold lg:mr-0"
          aria-label={`${site.name}, kembali ke beranda`}
        >
          <SmartImage
            src="/assets/logo.png"
            alt="Logo Codeblock"
            className="h-[46px] w-[45px] object-contain"
            fallback="none"
            eager
          />
          <span>{site.name}</span>
        </a>

        <nav
          id="primary-nav"
          aria-label="Navigasi utama"
          className={cn(
            'absolute inset-x-0 top-full bg-navy-950 px-gutter pt-3 pb-6',
            'lg:static lg:ml-auto lg:block lg:bg-transparent lg:p-0',
            menuOpen ? 'block' : 'hidden'
          )}
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:gap-[clamp(24px,4.3vw,62px)]">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'relative block py-3 text-xl font-semibold',
                      'lg:inline-block lg:py-1.5 lg:text-nav',
                      // Garis bawah biru di desktop
                      'lg:after:absolute lg:after:inset-x-0 lg:after:-bottom-0.5 lg:after:h-[3px]',
                      'lg:after:origin-left lg:after:scale-x-0 lg:after:bg-brand-ink lg:after:transition-transform',
                      'lg:hover:after:scale-x-100',
                      isActive && 'text-[#075fff] lg:text-white lg:after:scale-x-100'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col justify-center gap-[5px] bg-transparent px-2.5 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="h-[3px] rounded-sm bg-white" aria-hidden="true" />
          <span className="h-[3px] rounded-sm bg-white" aria-hidden="true" />
          <span className="h-[3px] rounded-sm bg-white" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
