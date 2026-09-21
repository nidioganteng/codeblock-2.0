import SmartImage from './SmartImage.jsx';
import ArrowRight from './ArrowRight.jsx';
import { hero } from '../data/content.js';
import { cn, container } from '../lib/styles.js';

const glow = 'pointer-events-none absolute rounded-full bg-[radial-gradient(closest-side,rgba(4,52,254,0.5),rgba(4,52,254,0))]';

const btn =
  'group inline-flex min-h-14 flex-[1_1_200px] items-center justify-center gap-3 rounded-[10px] border-[3px] px-6 text-[17px] leading-tight font-semibold text-white transition md:min-h-[79px] md:px-8 md:text-xl lg:min-w-[233px] lg:flex-none';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-navy-950 pt-[120px] pb-14 text-white lg:min-h-[clamp(680px,62.5vw,900px)] lg:pb-[72px]"
    >
      {/* Cahaya biru di latar belakang */}
      <div className={cn(glow, 'top-[16%] -left-[10%] aspect-square w-[min(46vw,640px)]')} aria-hidden="true" />
      <div className={cn(glow, '-bottom-[22%] left-[28%] aspect-square w-[min(40vw,560px)]')} aria-hidden="true" />

      <div
        className={cn(
          container,
          'relative flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-6'
        )}
      >
        {/* Judul — mobile: atas, desktop: kolom kiri baris 1 */}
        <h1 className="order-1 text-hero font-bold lg:col-start-1 lg:row-start-1 lg:self-end">
          <span className="block">{hero.titleLine1}</span>
          <span className="block text-brand">{hero.titleLine2}</span>
        </h1>

        {/* Gambar — mobile: tengah, desktop: kolom kanan spanning 2 baris */}
        <div className="relative order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div
            className="pointer-events-none absolute -top-[12%] -right-[8%] -bottom-[28%] left-[8%] bg-[radial-gradient(closest-side,rgba(4,52,255,0.65),rgba(4,52,255,0))]"
            aria-hidden="true"
          />
          <SmartImage
            src="/assets/hero.png"
            alt="Mockup website Codeblock di laptop dan ponsel"
            className="relative aspect-[649/433] h-auto w-full rounded-[20px]"
            fit="contain"
            eager
          />
        </div>

        {/* Deskripsi + tombol — mobile: bawah, desktop: kolom kiri baris 2 */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="max-w-[691px] text-lead">{hero.lead}</p>
          <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap gap-[clamp(16px,2.8vw,40px)]">
            <a className={cn(btn, 'relative overflow-hidden border-brand bg-brand hover:brightness-[1.15]')} href={hero.primaryCta.href}>
              <span className="transition-transform duration-200 group-hover:-translate-x-2">{hero.primaryCta.label}</span>
              <span className="absolute right-6 opacity-0 transition-all duration-200 group-hover:opacity-100">
                <ArrowRight size={16} />
              </span>
            </a>
            <a className={cn(btn, 'relative overflow-hidden border-white bg-transparent hover:bg-white/10')} href={hero.secondaryCta.href} target="_blank" rel="noopener noreferrer">
              <span className="transition-transform duration-200 group-hover:-translate-x-2">{hero.secondaryCta.label}</span>
              <span className="absolute right-6 opacity-0 transition-all duration-200 group-hover:opacity-100">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
