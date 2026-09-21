import { Icon } from '@iconify/react';
import SectionHead from './SectionHead.jsx';
import SmartImage from './SmartImage.jsx';
import { contact, site } from '../data/content.js';
import { cn, container } from '../lib/styles.js';

const cardBase =
  'flex min-h-[149px] items-center gap-4 rounded-[30px] border-[0.5px] border-black/25 bg-white pr-5 pl-[clamp(20px,2.9vw,42px)] shadow-soft transition xs:gap-6 xs:pr-8';

function ContactCard({ card }) {
  const body = (
    <>
      <span className="grid size-14 flex-none place-items-center rounded-2xl bg-black text-white xs:size-[70px] xs:rounded-[20px]">
        <Icon icon={card.icon} width="48" height="48" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-lead leading-[1.3] font-semibold [overflow-wrap:anywhere]">{card.title}</span>
        {/* Kartu tanpa nilai (Jam Operasional) memakai keterangan berukuran besar */}
        <span className={cn('leading-[1.3] text-black/50', card.value ? 'text-sm' : 'text-lead')}>{card.hint}</span>
        {card.value && (
          <span className="text-lead leading-[1.3] font-semibold [overflow-wrap:anywhere]">{card.value}</span>
        )}
      </span>
      {card.href && (
        <svg className="flex-none text-black" width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
          <path d="M3 2l8 7-8 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  if (!card.href) {
    return (
      <li>
        <div className={cardBase}>{body}</div>
      </li>
    );
  }

  const external = card.href.startsWith('http');
  return (
    <li>
      <a
        className={cn(cardBase, 'hover:-translate-y-0.5 hover:shadow-lift')}
        href={card.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="pt-[clamp(32px,3.05vw,44px)] pb-[clamp(48px,4.6vw,66px)]">
      <div className={container}>
        <SectionHead badge={contact.badge} title={contact.title}>
          <p className="max-w-[743px] text-lead leading-[1.4]">{contact.text}</p>
        </SectionHead>

        <div className="grid grid-cols-1 items-stretch gap-[clamp(24px,3.5vw,50px)] lg:grid-cols-[minmax(0,751fr)_minmax(0,534fr)]">
          <figure className="relative m-0 grid min-h-[320px] place-items-center overflow-hidden rounded-[30px] bg-navy-800 text-white lg:min-h-[420px]">
            <SmartImage
              src={contact.image}
              alt="Suasana tenang dengan gerbang torii"
              className="absolute inset-0 size-full"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
            <blockquote className="relative max-w-[624px] p-6 text-center text-quote font-semibold">
              {contact.quote}
            </blockquote>
            <figcaption className="absolute right-7 bottom-6 inline-flex items-center gap-2 text-xl font-semibold">
              <SmartImage
                src="/assets/logo.png"
                alt=""
                className="h-[31px] w-[30px] object-contain"
                fallback="none"
              />
              <span>{site.name}</span>
            </figcaption>
          </figure>

          <ul className="grid content-start gap-[27px]">
            {contact.cards.map((card) => (
              <ContactCard key={card.title} card={card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
