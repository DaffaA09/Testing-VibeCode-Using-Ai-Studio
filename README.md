# Indo Kreasi — Pixel World

Official company profile website for **PT Indo Kreasi**, an independent Indonesian game development studio creating original voxel, block-based, and pixel-art game worlds.

---

## 🌟 Overview & Product Vision

PT Indo Kreasi menggabungkan estetika retro 16-bit dan dunia sandbox voxel 3D dengan pendekatan visual orisinal (terinspirasi dari dunia blok tanpa menggunakan aset berhak cipta). Website ini berfungsi sebagai company profile profesional dan interaktif untuk calon klien, publisher, mitra bisnis, dan komunitas gamer.

### Key Sections & Functional Features

- **FR-001 Navigation Bar**: Fixed navbar berdesain pixel-art dengan scroll tracking aktif, hamburger drawer mobile responsif, clearance offset smooth scrolling, dan tautan langsung ke setiap seksi.
- **FR-002 Hero Section**: Menampilkan slogan *"WE BUILD WORLDS. YOU CREATE THE STORIES."*, subteks visi, tombol CTA ganda (`EXPLORE OUR GAMES` & `MEET THE STUDIO`), serta pulau terapung voxel interaktif dengan fitur mining block interaktif.
- **FR-003 About Us ("Behind The Blocks")**: Menjelaskan identitas studio, visi, misi, diorama stasiun kerja developer pixel, dan 4 pilar nilai studio: *Creativity, Innovation, Collaboration, dan Quality*.
- **FR-004 Our Services ("What We Craft")**: Rincian 4 kapabilitas utama: *Game Development, Game Design, Game Art & Assets, dan Interactive Experiences* lengkap dengan daftar deliverables dan toolchain.
- **FR-005 Our Games / Portfolio ("Worlds We've Created")**: Grid showcase game orisinal dengan filter genre (*Action RPG, Roguelike, Sandbox Sim, Turn-Based Tactics*), penanda eksplisit `CONCEPT PROJECT`, serta **Game Detail Modal** aksesibel (Esc key listener & backdrop handler).
- **FR-006 Our Team ("The Minds Behind The Worlds")**: Pengenalan tim konseptual dengan avatar pixel art, bidang keahlian, dan kutipan filosofi perancangan game.
- **FR-007 Contact Section ("Let's Build Something Great")**: Formulir kontak interaktif dengan validasi browser-side (email regex & kelengkapan field), banner notifikasi demo statis sesuai PRD, dan tombol langsung `mailto:hello@indokreasi.games`.
- **FR-008 Footer**: Wordmark piksel, sitemap cepat, tautan sosial, copyright dinamis tahun berjalan, dan tombol *Back to Top*.
- **AI Voxel Companion (Gemini Multi-Turn Chatbot)**: Fitur asisten virtual interaktif menggunakan model Gemini (`gemini-3.5-flash`, `gemini-3.1-pro-preview`, `gemini-3.1-flash-lite`) dengan 3 persona (*Budi the Builder, Dewi the Lore Keeper, Rian the Producer*).
- **Voxel Concept Forge (Gemini Image Generation)**: Generator konsep visual voxel dengan model `gemini-3-pro-image-preview`, affordance resolusi `1K`, `2K`, dan `4K`, preset biome nusantara, serta preview dan unduh hasil.

---

## 🎨 Design Tokens & Visual Architecture

| Token | Nilai Hex | Penggunaan |
|---|---|---|
| Grass Green | `#62B34D` | Warna brand utama, tombol aksi, highlight rim |
| Forest Green | `#285943` | Aksen sekunder, border blok |
| Sky Blue | `#79C9F2` | Indikator teknis, elemen langit |
| Soil Brown | `#8B5A36` | Blok tanah & aksen material |
| Sand Beige | `#F2D6A2` | Permukaan sekunder |
| Pixel Gold | `#F5C84C` | Sorotan CTA, ore kristal, status konsep |
| Night Navy | `#182536` | Background kanvas utama, teks gelap |
| Cloud White | `#F7F7F0` | Teks utama, awan piksel |

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Pixel Art CSS utilities
- **Icons**: Lucide React
- **Full-Stack Runtime**: Express backend proxy (`server.ts`) dengan `@google/genai` SDK
- **Typography**: Google Fonts (`Press Start 2P`, `Silkscreen`, `Plus Jakarta Sans`)

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

1. **Clone & Masuk ke Folder Proyek**:
   ```bash
   git clone <repo-url>
   cd indo-kreasi-website
   ```

2. **Instalasi Dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan Mode Pengembangan (Development Server)**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:3000`.

4. **Uji Type Checking & Linting**:
   ```bash
   npm run lint
   ```

5. **Build Produksi**:
   ```bash
   npm run build
   ```

---

## 📦 Panduan Deployment (Static / Serverless)

Aplikasi ini dapat di-deploy secara instan ke platform hosting modern seperti Vercel, Netlify, atau Cloud Run:

### Vercel / Netlify Deployment:
1. Hubungkan repository GitHub ke dashboard Vercel / Netlify.
2. Konfigurasi build command: `npm run build`
3. Konfigurasi publish directory: `dist`
4. Masukkan environment variable `GEMINI_API_KEY` pada panel dashboard project settings.
5. Klik **Deploy**.

---

## 📋 Acceptance Verification Checklist

- [x] **FR-001 Navbar**: Berfungsi pada desktop & mobile, smooth scroll dengan offset clearance, active state indicator.
- [x] **FR-002 Hero Section**: Teks eyebrow, heading utama, supporting text, CTA ganda, dan visual pulau voxel interaktif.
- [x] **FR-003 About Us**: Narasi studio, visi misi, nilai inti, dan ilustrasi diorama dev lab.
- [x] **FR-004 Services**: 4 kartu layanan dengan ikon piksel, deliverables, dan teknologi pendukung.
- [x] **FR-005 Portfolio**: Filter kategori, label eksplisit `CONCEPT PROJECT`, dan modal detail game dengan Esc listener.
- [x] **FR-006 Team**: Profil peran konseptual studio dengan penandaan jelas.
- [x] **FR-007 Contact**: Validasi browser formulir, peringatan demo statis tanpa server database, dan fallback `mailto:`.
- [x] **FR-008 Footer**: Wordmark, tautan navigasi, tahun copyright otomatis, dan tombol back to top.
- [x] **Gemini Chatbot**: Multi-turn chat, riwayat pesan, scrollable thread, peran NPC, pilihan model (3.1-pro, 3.5-flash, 3.1-flash-lite).
- [x] **Image Generator**: Menggunakan `gemini-3-pro-image-preview` dengan opsi ukuran 1K, 2K, dan 4K.
- [x] **NFR-001 Responsif**: Layout teruji pada mobile, tablet, dan desktop tanpa horizontal overflow.
