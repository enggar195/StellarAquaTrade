import type { Dictionary } from "../get-dictionary";

export const id: Dictionary = {
  navigation: {
    sections: {
      primary: "Ringkasan",
      supply: "Pasokan",
      trade: "Dagang",
      operations: "Operasi",
      management: "Manajemen",
      configuration: "Konfigurasi",
      monitoring: "Pemantauan",
      web3: "Web3",
      system: "Sistem",
    },
    dashboard: "Dasbor",
    operationsDashboard: "Dasbor Operasi",
    fishCatalog: "Katalog Ikan",
    fishBatches: "Batch Ikan",
    privateCatalog: "Katalog Privat",
    rfqs: "RFQ",
    quotations: "Penawaran",
    tradeOrders: "Pesanan Dagang",
    packing: "Pengemasan",
    shipments: "Pengiriman",
    arrivalInspection: "Inspeksi Kedatangan",
    claims: "Klaim",
    companies: "Perusahaan",
    documentVerification: "Verifikasi Dokumen",
    masterData: "Data Master",
    systemConfiguration: "Konfigurasi Sistem",
    auditMonitoring: "Audit & Pemantauan",
    notifications: "Notifikasi",
    companyProfile: "Profil Perusahaan",
    testXlm: "Uji XLM",
  },
  languageSwitcher: {
    label: "Bahasa",
    ariaChange: "Ubah bahasa",
  },
  common: {
    explain: "Jelaskan {title}",
  },
  dashboard: {
    prototypeLabel: "Ruang Kerja Prototipe",
    workspaceName: "Ruang Kerja AquaTrade",
    roleLabel: "Pembeli",
    userName: "Pengguna Demo",
    userRole: "Pembeli · Prototipe",
    pageTitle: "Dasbor",
    breadcrumbHome: "Beranda",
    bannerTitle: "Kerangka aplikasi prototipe",
    bannerBody:
      "Ini adalah kerangka aplikasi AquaTrade yang dapat dipakai ulang. Modul dasbor bisnis (metrik, tabel, grafik) akan ditambahkan pada tugas slicing berikutnya — belum ada data langsung yang terhubung.",
    comingSoon: "Segera hadir",
    comingSoonTooltip: "Modul ini termasuk fase implementasi mendatang dan belum tersedia.",
    collapseSidebar: "Ciutkan sidebar",
    expandSidebar: "Bentangkan sidebar",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    notifications: "Notifikasi",
    notificationsNote: "Notifikasi hanya placeholder prototipe — tidak ada peringatan langsung.",
    companySwitcher: "Ruang Kerja",
    userMenu: "Akun",
    shellStatus: {
      title: "Status kerangka",
      body: "Kerangka aplikasi, navigasi, tata letak responsif, dan dukungan multibahasa sudah siap. Data bisnis belum terhubung.",
      tooltip:
        "Kerangka aplikasi, navigasi, tata letak responsif, dan dukungan multibahasa tersedia, sedangkan data bisnis belum terhubung.",
    },
    availableNow: {
      title: "Tersedia sekarang",
      tooltip: "Modul frontend yang saat ini sudah diimplementasikan dan aman diakses.",
      items: ["Antarmuka Login", "Uji XLM", "Navigasi multibahasa", "Kerangka aplikasi responsif"],
    },
    comingNext: {
      title: "Berikutnya",
      tooltip: "Konten dasbor Pembeli dan Eksportir akan dibuat pada tugas slicing terpisah.",
      items: ["Dasbor Pembeli", "Dasbor Eksportir"],
    },
  },
  accessibility: {
    primaryNav: "Utama",
    sidebar: "Navigasi sidebar",
    mobileMenu: "Navigasi seluler",
    breadcrumb: "Remah roti",
  },
  auth: {
    eyebrow: "Akses aman",
    heading: "Masuk ke ruang kerja dagang Anda",
    subtitle:
      "Akses akun AquaTrade Anda, tinjau aktivitas perdagangan, dan lanjutkan perjalanan White Belt Stellar Testnet Anda.",
    brand: {
      name: "AquaTrade Pay",
      subtitle: "Stellar Testnet · White Belt L1",
    },
    showcase: {
      tagline:
        "Perdagangan ikan lintas negara yang tepercaya, didukung alur kerja transparan dan pembelajaran Stellar Testnet.",
      description:
        "AquaTrade membantu eksportir dan pembeli internasional mengoordinasikan batch ikan hias, dokumen, pengiriman, dan alur pembelajaran pembayaran dalam satu ruang kerja yang tenang dan dapat dilacak.",
      chips: [
        "Paspor Batch Ikan",
        "RFQ & Penawaran",
        "Pelacakan Pengiriman",
        "Inspeksi Kedatangan",
        "Klaim DOA",
        "Pembayaran Testnet",
      ],
    },
    form: {
      title: "Masuk",
      emailLabel: "Email kerja",
      emailPlaceholder: "nama@perusahaan.com",
      passwordLabel: "Kata sandi",
      passwordPlaceholder: "Masukkan kata sandi Anda",
      showPassword: "Tampilkan kata sandi",
      hidePassword: "Sembunyikan kata sandi",
      rememberMe: "Ingat saya",
      forgotPassword: "Lupa kata sandi?",
      signIn: "Masuk",
      signingIn: "Sedang masuk…",
      noAccount: "Baru di AquaTrade?",
      createAccount: "Buat akun",
      prototypeMessage:
        "Layanan autentikasi akan dihubungkan pada fase business-MVP berikutnya.",
    },
    testnet: {
      title: "Informasi Testnet",
      networkLabel: "Jaringan",
      networkValue: "Stellar Testnet",
      stageLabel: "Tahap program",
      stageValue: "White Belt L1",
      scopeLabel: "Cakupan pembayaran",
      scopeValue: "XLM Testnet langsung",
      futureLabel: "Cakupan mendatang",
      futureValue: "Escrow kontrak pintar",
    },
    trust: {
      title: "Catatan kepercayaan",
      items: [
        "Tidak perlu seed phrase",
        "Koneksi dompet dilakukan di Uji XLM",
        "Hanya Testnet — tanpa nilai aset nyata",
      ],
    },
    testXlmLink: "Buka halaman publik Uji XLM",
    tooltips: {
      loginForm:
        "Formulir ini adalah antarmuka autentikasi akun AquaTrade dan terpisah dari penandatanganan dompet Stellar. Autentikasi nyata belum terhubung pada tahap slicing frontend saat ini.",
      testnetInfo:
        "Jaringan White Belt yang aktif adalah Stellar Testnet. XLM Testnet tidak memiliki nilai uang, dan cakupan pembayaran saat ini adalah transfer Testnet langsung, bukan escrow.",
      trustNote:
        "AquaTrade tidak pernah meminta seed phrase atau kunci rahasia. Koneksi dompet Freighter dilakukan di halaman publik Uji XLM.",
    },
  },
  validation: {
    emailRequired: "Masukkan email kerja Anda.",
    emailInvalid: "Masukkan alamat email yang valid.",
    passwordRequired: "Masukkan kata sandi Anda.",
  },
};
