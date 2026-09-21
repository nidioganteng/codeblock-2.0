// Semua teks dan data halaman ada di sini, jadi mudah diubah tanpa menyentuh komponen.
// Nama ikon memakai ID Iconify (contoh: "bx:world"). Cari ikon lain di https://icon-sets.iconify.design

export const site = {
  name: 'codeblock',
  phone: '+62 856-0406-1730',
  phoneLink: 'https://wa.me/6285604061730',
  email: 'codeblock.id@gmail.com',
  instagram: '@codeblock.id',
  instagramLink: 'https://instagram.com/codeblock.id',
  // Ganti dengan URL profil asli
  githubLink: 'https://github.com/nidioganteng',
  linkedinLink: '#',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const languages = [
  { code: 'id', label: 'Indonesia', icon: 'twemoji:flag-indonesia' },
  { code: 'en', label: 'English', icon: 'twemoji:flag-united-states' },
];

export const hero = {
  titleLine1: 'Build Better.',
  titleLine2: 'Grow Smarter.',
  lead: 'Kami membantu bisnis membangun website profesional dan solusi digital yang membantu mereka berkembang.',
  primaryCta: { label: 'View Services', href: '#services' },
  secondaryCta: { label: 'Start a Project', href: site.phoneLink },
};

export const about = {
  badge: 'Tentang Kami',
  titleStart: 'Kami membantu bisnis berkembang melalui ',
  titleAccent: 'website profesional, solusi digital, dan teknologi AI.',
  paragraphs: [
    'Codeblock adalah partner digital yang berfokus pada pembuatan website dan solusi teknologi untuk membantu bisnis tumbuh di era digital.',
    'Kami percaya setiap bisnis memiliki potensi besar. Dengan pendekatan yang tepat, teknologi dapat menjadi alat yang kuat untuk menciptakan pengalaman yang lebih baik bagi pelanggan dan memberikan dampak yang lebih nyata bagi bisnis.',
  ],
  stats: [
    { value: '15+', label: 'Project Completed' },
    { value: '15+', label: 'Happy Client' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
};

export const services = {
  badge: 'Layanan Kami',
  title: 'Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda.',
  cta: 'Lihat lebih lengkap',
  items: [
    {
      title: 'Website Development',
      icon: 'bx:world',
      text: 'Membangun website profesional, modern, dan responsif yang dirancang sesuai kebutuhan serta karakter bisnis Anda.',
    },
    {
      title: 'Website Maintenance',
      icon: 'ep:tools',
      text: 'Membantu memperbaiki, mengembangkan, dan memelihara website agar tetap optimal, aman, dan berjalan dengan baik.',
    },
    {
      title: 'AI Customer Service',
      icon: 'fluent:bot-16-filled',
      text: 'Menghadirkan customer service berbasis AI untuk membantu menjawab pertanyaan pelanggan secara otomatis.',
    },
  ],
};

export const approach = {
  badge: 'pendekatan kami',
  title: 'Proses yang jelas, hasil yang maksimal',
  steps: [
    {
      number: '01',
      title: 'Discover',
      icon: 'ant-design:search-outlined',
      text: 'Memahami bisnis, tujuan, dan kebutuhan Anda.',
    },
    {
      number: '02',
      title: 'Plan',
      icon: 'akar-icons:file',
      text: 'Merancang solusi dan menentukan strategi yang tepat.',
    },
    {
      number: '03',
      title: 'Build',
      icon: 'carbon:code',
      text: 'Mengembangkan solusi dengan kualitas terbaik dan komunikasi jelas.',
    },
    {
      number: '04',
      title: 'Launch',
      icon: 'fluent:rocket-28-regular',
      text: 'Testing, deployment, dan handover. Kami tetap mendampingi Anda.',
    },
  ],
};

export const portfolio = {
  badge: 'Portofolio',
  title: 'Apa yang Telah Kami Bangun',
  cta: 'Lihat lebih lengkap',
  filters: [
    { id: 'all', label: 'All Project' },
    { id: 'website', label: 'Website Development' },
    { id: 'ai', label: 'AI Solution' },
  ],
  projects: [
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Mijn Amor Tour & Travel',
      image: '/assets/project-travel.png',
      url: '',
      github: '',
      text: 'Platform booking dan manajemen perjalanan yang memungkinkan pengguna melihat produk wisata, melakukan booking, melakukan pembayaran, serta melihat riwayat perjalanan melalui satu sistem terintegrasi.',
      features: [
        { label: 'Pemesanan Online', icon: 'mdi:airplane' },
        { label: 'Integrasi Pembayaran', icon: 'akar-icons:wallet' },
        { label: 'Dashboard Admin', icon: 'fa-solid:user-friends' },
        { label: 'Manajemen Perjalanan', icon: 'eos-icons:cluster-management' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Smart Spend',
      image: '/assets/project-finance.png',
      url: '',
      github: '',
      text: 'Sistem realisasi anggaran universitas berbasis NFC dan QR yang dirancang untuk membantu mencegah penyalahgunaan keuangan secara preventif melalui validasi transaksi dan fraud risk scoring sebelum dana dicairkan.',
      features: [
        { label: 'Pemantauan Anggaran', icon: 'eos-icons:monitoring' },
        { label: 'Validasi Transaksi', icon: 'icon-park-solid:transaction-order' },
        { label: 'Penilaian Risiko', icon: 'jam:triangle-danger-f' },
        { label: 'Jejak Audit', icon: 'iconmind:test-report-duotone-bold' },
      ],
    },
    {
      category: 'ai',
      categoryLabel: 'AI Solution',
      title: 'AI Customer Service Support',
      image: '/assets/project-ai.png',
      url: '',
      github: '',
      text: 'Platform AI customer service yang memungkinkan bisnis menyediakan asisten AI untuk menjawab pertanyaan pelanggan berdasarkan informasi dan knowledge base yang dimiliki bisnis.',
      features: [
        { label: 'Layanan Pelanggan AI', icon: 'material-symbols:support-agent-sharp' },
        { label: 'Basis Pengetahuan', icon: 'mdi:book-open-page-variant' },
        { label: 'Respons Otomatis', icon: 'carbon:ibm-cloud-pak-manta-automated-data-lineage' },
        { label: 'Manajemen Dokumen', icon: 'streamline-ultimate:office-stamp-document-bold' },
      ],
    },
    {
      category: 'ai',
      categoryLabel: 'AI Solution',
      title: 'Your Skin',
      image: '/assets/project-yourskin.png',
      url: '',
      github: '',
      text: 'Platform deteksi risiko kanker kulit berbasis AI dengan dua tahap pemeriksaan: analisis gejala klinis dan klasifikasi gambar kulit. Pengguna mendapatkan penilaian risiko secara langsung beserta rekomendasi tindakan — mulai dari anjuran konsultasi dokter hingga tips pencegahan dini.',
      features: [
        { label: 'Analisis Gejala', icon: 'mdi:clipboard-pulse-outline' },
        { label: 'Deteksi Gambar AI', icon: 'mdi:image-search-outline' },
        { label: 'Penilaian Risiko', icon: 'jam:triangle-danger-f' },
        { label: 'Rekomendasi Kesehatan', icon: 'mdi:hospital-box-outline' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Beta Zeta',
      image: '/assets/project-betazeta.png',
      url: '',
      github: '',
      text: 'Platform e-commerce yang menghubungkan pedagang kecil langsung dengan pemasok barang kebutuhan pokok. Dilengkapi katalog produk lengkap, proses pembelian yang cepat, serta fitur kontak langsung ke penjual beserta informasi lokasi mereka.',
      features: [
        { label: 'Katalog Produk', icon: 'mdi:store-outline' },
        { label: 'Kontak Penjual', icon: 'selfhst:whatsapp' },
        { label: 'Info Lokasi Toko', icon: 'mdi:map-marker-outline' },
        { label: 'Antarmuka Simpel', icon: 'mdi:cellphone-check' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Cloud Resort Management System',
      image: '/assets/project-serenebali.png',
      url: '',
      github: '',
      text: 'Sistem manajemen resort berbasis cloud dengan dua portal terintegrasi: portal tamu untuk menjelajahi villa, melakukan reservasi, dan mengajukan permintaan layanan; serta portal manajer untuk mengelola reservasi, operasional harian, pemeliharaan fasilitas, dan laporan keuangan — semuanya dalam satu platform terpusat.',
      features: [
        { label: 'Reservasi Villa', icon: 'mdi:bed-outline' },
        { label: 'Portal Tamu', icon: 'mdi:account-outline' },
        { label: 'Manajemen Properti', icon: 'mdi:office-building-outline' },
        { label: 'Laporan Keuangan', icon: 'mdi:chart-line' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Neura Bloom',
      image: '/assets/project-neurabloom.png',
      url: '',
      github: '',
      text: 'Platform belajar interaktif yang dirancang khusus untuk anak-anak dengan autisme. Setiap modul menggabungkan video pembelajaran dengan kuis yang langsung mengikuti, dalam tampilan yang sederhana, ramah, dan mudah dipahami.',
      features: [
        { label: 'Video Pembelajaran', icon: 'mdi:play-box-outline' },
        { label: 'Kuis Interaktif', icon: 'mdi:head-question-outline' },
        { label: 'UI Ramah Anak', icon: 'mdi:palette-outline' },
        { label: 'Modul Terstruktur', icon: 'mdi:book-open-outline' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Medical Chain',
      image: '/assets/project-medicalchain.png',
      url: '',
      github: '',
      text: 'Platform yang memberikan pasien kendali penuh atas rekam medis mereka sendiri. Data kesehatan dapat dibagikan secara aman ke berbagai fasilitas kesehatan dengan perlindungan enkripsi tinggi dan pengaturan akses yang bisa dikontrol langsung oleh pasien.',
      features: [
        { label: 'Rekam Medis Digital', icon: 'mdi:file-lock-outline' },
        { label: 'Keamanan Enkripsi', icon: 'mdi:shield-check-outline' },
        { label: 'Kontrol Akses', icon: 'mdi:key-outline' },
        { label: 'Berbagi Lintas RS', icon: 'mdi:hospital-building' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Website Portofolio',
      image: '/assets/project-portfolio.png',
      url: '',
      github: '',
      text: 'Situs portofolio pribadi yang dirancang untuk menampilkan proyek, keahlian, dan pengalaman secara profesional. Hadir dengan tampilan bersih dan modern, cepat diakses, serta nyaman dilihat di berbagai perangkat.',
      features: [
        { label: 'Showcase Proyek', icon: 'mdi:briefcase-outline' },
        { label: 'Profil Keahlian', icon: 'mdi:lightning-bolt-outline' },
        { label: 'Formulir Kontak', icon: 'mdi:email-outline' },
        { label: 'Desain Responsif', icon: 'mdi:cellphone-check' },
      ],
    },
    {
      category: 'website',
      categoryLabel: 'Website Development',
      title: 'Pureskin',
      image: '/assets/project-pureskin.png',
      url: '',
      github: '',
      text: 'Website klinik kecantikan yang memudahkan klien menjelajahi layanan treatment, berbelanja produk skincare, dan melakukan booking konsultasi — semuanya dalam satu tampilan yang nyaman tanpa harus berpindah halaman.',
      features: [
        { label: 'Katalog Skincare', icon: 'mdi:bottle-tonic-outline' },
        { label: 'Keranjang Belanja', icon: 'mdi:cart-outline' },
        { label: 'Booking Konsultasi', icon: 'mdi:calendar-check-outline' },
        { label: 'Daftar Treatment', icon: 'mdi:spa-outline' },
      ],
    },
  ],
};

export const contact = {
  badge: 'Contact',
  title: 'Mari Mulai Project Anda.',
  text: 'Hubungi Codeblock dan ceritakan kebutuhan Anda. Kami akan membantu mengubahnya menjadi solusi digital yang nyata.',
  quote: 'Great things begin with a simple idea.',
  image: '/assets/contact.jpg',
  cards: [
    {
      title: 'WhatsApp',
      hint: 'Chat langsung dengan kami',
      value: site.phone,
      href: site.phoneLink,
      icon: 'selfhst:whatsapp',
    },
    {
      title: 'Instagram',
      hint: 'Lihat Update Project Kami',
      value: site.instagram,
      href: site.instagramLink,
      icon: 'selfhst:instagram',
    },
    {
      title: 'Email',
      hint: 'Kirim detail Project Anda',
      value: site.email,
      href: `mailto:${site.email}`,
      icon: 'selfhst:gmail',
    },
    {
      title: 'Jam Operasional',
      hint: 'Setiap Hari',
      icon: 'bxs:time-five',
    },
  ],
};

export const footer = {
  description:
    'Digital develop service yang membantu bisnis membangun dan mengembangkan solusi digital memulai website dan AI.',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    // Belum ada section Pricing di desain, sementara diarahkan ke Contact
    { label: 'Pricing', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Website Development', href: '#services' },
    { label: 'Website Maintenance', href: '#services' },
    { label: 'AI Customer Service', href: '#services' },
  ],
  socials: [
    { label: 'Instagram', icon: 'akar-icons:instagram-fill', href: site.instagramLink },
    { label: 'GitHub', icon: 'akar-icons:github-fill', href: site.githubLink },
    { label: 'LinkedIn', icon: 'akar-icons:linkedin-box-fill', href: site.linkedinLink },
  ],
};
