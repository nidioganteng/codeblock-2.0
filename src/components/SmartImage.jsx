import { useState } from 'react';

// Menampilkan gambar dari /public/assets. Kalau file belum ada, tampil kotak placeholder
// (atau tidak tampil sama sekali jika fallback="none") supaya layout tidak rusak.
// Rounded dan ukuran diatur lewat className dari pemanggil.
export default function SmartImage({ src, alt, className = '', fit = 'cover', eager = false, fallback = 'box' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (fallback === 'none') return null;
    return (
      <div
        className={`grid min-h-40 w-full place-items-center bg-linear-to-br from-[#0b2270] to-brand p-4 text-center text-sm text-white/75 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectFit: fit }}
      onError={() => setFailed(true)}
    />
  );
}
