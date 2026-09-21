// Membundel ikon Iconify yang dipakai di src/ ke src/icons.generated.json,
// supaya situs tidak bergantung pada API Iconify saat runtime.
//
// Cara pakai:
//   1. Pasang set ikon yang dibutuhkan (tanpa menyimpan), contoh:
//        npm install --no-save @iconify-json/bx @iconify-json/mdi
//   2. Jalankan: npm run icons
//
// Ikon baru yang belum dibundel tetap tampil saat development lewat API Iconify (fallback otomatis),
// jalankan skrip ini lagi sebelum deploy supaya ikon tersebut ikut dibundel.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getIcons } from '@iconify/utils';

const require = createRequire(import.meta.url);
const srcDir = fileURLToPath(new URL('../src/', import.meta.url));

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

// Kumpulkan semua ID ikon dari properti icon (icon: 'set:nama' atau icon="set:nama") di kode sumber
const wanted = new Map();
for (const file of walk(srcDir)) {
  if (!/\.(jsx?|mjs)$/.test(file)) continue;
  const text = readFileSync(file, 'utf8');
  for (const m of text.matchAll(/\bicon\s*[:=]\s*\{?\s*['"`]([a-z0-9]+(?:-[a-z0-9]+)*):([a-z0-9]+(?:-[a-z0-9]+)*)['"`]/g)) {
    const [, prefix, name] = m;
    if (!wanted.has(prefix)) wanted.set(prefix, new Set());
    wanted.get(prefix).add(name);
  }
}

const collections = [];
const problems = [];
for (const [prefix, names] of wanted) {
  let data;
  try {
    data = JSON.parse(readFileSync(require.resolve(`@iconify-json/${prefix}/icons.json`), 'utf8'));
  } catch {
    problems.push(`Set "${prefix}" belum terpasang (npm install --no-save @iconify-json/${prefix}): ${[...names].join(', ')}`);
    continue;
  }
  const subset = getIcons(data, [...names]);
  const found = new Set([...Object.keys(subset?.icons ?? {}), ...Object.keys(subset?.aliases ?? {})]);
  for (const n of names) if (!found.has(n)) problems.push(`Ikon tidak ditemukan: ${prefix}:${n}`);
  if (subset) collections.push(subset);
}

writeFileSync(join(srcDir, 'icons.generated.json'), JSON.stringify(collections));
const total = collections.reduce((n, c) => n + Object.keys(c.icons).length, 0);
console.log(`Ikon dibundel: ${total} dari ${collections.length} set`);
if (problems.length) {
  console.log('\nPerlu perhatian:');
  problems.forEach((p) => console.log(' -', p));
  process.exitCode = 1;
}
