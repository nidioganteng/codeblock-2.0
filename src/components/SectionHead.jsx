import Badge from './Badge.jsx';

// Kepala section: badge kecil, judul, dan (opsional) paragraf pengantar
export default function SectionHead({ badge, title, children }) {
  return (
    <div className="mb-[clamp(32px,4.5vw,64px)] flex flex-col items-center gap-3 text-center">
      <Badge>{badge}</Badge>
      <h2 className="max-w-[761px] text-h2 font-semibold">{title}</h2>
      {children}
    </div>
  );
}
