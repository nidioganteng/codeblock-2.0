// Penggabung class sederhana: cn('a', kondisi && 'b') -> "a b"
export const cn = (...classes) => classes.filter(Boolean).join(' ');

// Pola yang dipakai di banyak section
export const container = 'mx-auto w-full max-w-[1440px] px-gutter';
export const sectionY = 'py-[clamp(32px,3.05vw,44px)]';
