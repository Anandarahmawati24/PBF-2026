# 🚀 [MyApp]

![Next.js](https://img.shields.io/badge/Next.js-15.3.8-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-11.x-orange?style=flat-square&logo=firebase)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

---

## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Prasyarat](#-prasyarat)
- [Instalasi](#-instalasi)
- [Konfigurasi Environment](#-konfigurasi-environment)
- [Cara Menjalankan](#-cara-menjalankan)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Struktur Folder](#-struktur-folder)
- [Kontributor](#-kontributor)

---

## ✨ Fitur

- 🔐 **Autentikasi** — Login & Register dengan NextAuth (Google, GitHub, Credentials)
- 🛒 **Halaman Produk** — Menampilkan daftar produk dengan fitur filter
- 🏪 **Halaman Toko** — Dynamic routing untuk halaman toko
- 👤 **Profil Pengguna** — Manajemen data pengguna dan ganti password
- 📝 **Blog** — Halaman blog dengan dynamic slug
- ⚙️ **Pengaturan** — Halaman setting aplikasi
- 📊 **Admin Panel** — Halaman khusus admin
- 📱 **Responsive** — Tampilan optimal di semua ukuran layar

---

## 🛠 Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.3.8 | Framework utama (SSR, SSG, API Routes) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [React](https://react.dev/) | 19.x | UI Library |
| [NextAuth.js](https://next-auth.js.org/) | 4.x | Autentikasi |
| [Firebase](https://firebase.google.com/) | 11.x | Database & Storage |
| [SWR](https://swr.vercel.app/) | 2.x | Data fetching & caching |
| [Sass](https://sass-lang.com/) | 1.x | CSS Preprocessor |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | 5.x | Enkripsi password |
| [Jest](https://jestjs.io/) | 29.x | Unit Testing |
| [Vercel](https://vercel.com/) | - | Deployment |

---

## ✅ Prasyarat

Pastikan sudah terinstall di komputer anda:

- **Node.js** versi 18.x atau lebih baru
- **npm** versi 9.x atau lebih baru
- Akun **Firebase** (untuk database)
- Akun **Google** & **GitHub** (untuk OAuth)

---

## 📦 Instalasi

1. **Clone repository ini**
   ```bash
   git clone https://github.com/Anandarahmawati24/PBF-2026.git
   cd PBF-2026/praktikum/Pertemuan_20
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 🔑 Konfigurasi Environment

Buat file `.env.local` di root folder project, lalu isi dengan variabel berikut:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=isi_dengan_secret_key_random

# Google OAuth
GOOGLE_CLIENT_ID=isi_dengan_google_client_id
GOOGLE_CLIENT_SECRET=isi_dengan_google_client_secret

# GitHub OAuth
GITHUB_ID=isi_dengan_github_client_id
GITHUB_SECRET=isi_dengan_github_client_secret

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=isi_dengan_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=isi_dengan_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=isi_dengan_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=isi_dengan_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=isi_dengan_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=isi_dengan_app_id
```


## ▶️ Cara Menjalankan

### Mode Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.

### Mode Production (lokal)
```bash
npm run build
npm run start
```

### Cek Linting
```bash
npm run lint
```

---

## 🧪 Testing

### Jalankan semua test
```bash
npm run test
```

### Jalankan test dengan coverage
```bash
npm run test:coverage
```

---

## 🚀 Deployment

Project ini di-deploy menggunakan **Vercel**.

### Langkah Deploy Manual

1. Push kode ke branch `main`
   ```bash
   git add .
   git commit -m "pesan commit"
   git push origin main
   ```

2. Vercel akan otomatis melakukan build dan deploy.

3. Pastikan semua **Environment Variables** sudah diisi di dashboard Vercel:
   - Buka [vercel.com](https://vercel.com) → Project → Settings → Environment Variables
   - Tambahkan semua variabel dari `.env.local`

### Cek Build Sebelum Deploy
```bash
npm run build
```
Pastikan build sukses sebelum push ke GitHub.

---

## 📁 Struktur Folder

```
Pertemuan_20/
├── public/              # Asset statis (gambar, favicon, dll)
├── src/
│   ├── __test__/        # File unit test
│   │   ├── components/
│   │   └── pages/
│   ├── components/      # Komponen reusable
│   │   └── layouts/
│   │       ├── Appshell/
│   │       └── navbar/
│   ├── pages/           # Halaman Next.js (Pages Router)
│   │   ├── api/         # API Routes
│   │   ├── auth/        # Login & Register
│   │   ├── blog/
│   │   ├── produk/
│   │   ├── shop/
│   │   ├── user/
│   │   └── ...
│   ├── styles/          # File SCSS / CSS
│   ├── types/           # TypeScript type declarations
│   └── views/           # Komponen view per halaman
├── .env.local           # Environment variables (tidak di-commit)
├── next.config.ts       # Konfigurasi Next.js
├── tsconfig.json        # Konfigurasi TypeScript
├── jest.config.ts       # Konfigurasi Jest
└── package.json
```

## 📄 Lisensi

Project ini dibuat untuk keperluan **Praktikum mata kuliah Pengembangan Berbasis Framework (PBF) 2026**.

---

<p align="center">Dibuat dengan ❤️ untuk praktikum PBF 2026</p>