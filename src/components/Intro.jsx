import { useEffect, useState } from 'react';
import { site } from '../data/content.js';

const letters = site.name.split('');

// Ukuran elemen (px) — sesuai dengan Navbar
const LOGO_W = 45;
const GAP = 10;
const TEXT_W = 110; // lebar estimasi "codeblock" di font Inter 24px
const GROUP_W = LOGO_W + GAP + TEXT_W;

// Offset logo dari titik tengah layar agar grup (logo+teks) tampak centered
const LOGO_OFFSET = -(GROUP_W / 2 - LOGO_W / 2); // −60px
// Offset teks: tepat di sebelah kanan logo yang sudah digeser
const TEXT_OFFSET = LOGO_W / 2 + GAP + LOGO_OFFSET; // −27.5px

export default function Intro() {
  const [phase, setPhase] = useState('show');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => setPhase('shrink'), 600);
    const t2 = setTimeout(() => setPhase('fade'), 1700);
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 2200);
    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  const shrunk = phase === 'shrink' || phase === 'fade';

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#000c23]"
      style={{ opacity: phase === 'fade' ? 0 : 1, transition: 'opacity 0.5s ease' }}
    >
      {/* Logo — saat show: tepat tengah layar; saat shrink: geser kiri */}
      <img
        src="/assets/logo.png"
        alt="Logo Codeblock"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          height: 46,
          width: LOGO_W,
          objectFit: 'contain',
          transform: shrunk
            ? `translate(calc(-50% + ${LOGO_OFFSET}px), -50%) scale(1)`
            : 'translate(-50%, -50%) scale(2.8)',
          transition: 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Teks — tepat di sebelah kanan logo, letters muncul satu per satu */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(${TEXT_OFFSET}px, -50%)`,
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'white',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: shrunk ? 1 : 0,
              transform: shrunk ? 'translateX(0)' : 'translateX(-6px)',
              transition: `opacity 0.2s ease ${i * 35}ms, transform 0.2s ease ${i * 35}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}
