# Proyek React + Tailwind CSS v4 (Vite)

Proyek ini telah dikonfigurasi menggunakan **React 19**, **Tailwind CSS v4** (CSS-first engine), **Vite**, dan **Lucide React**.

---

## 🚀 Perintah Cepat

### 1. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di alamat yang tertera di terminal (biasanya `http://localhost:5173`).

### 2. Membangun Proyek untuk Production (Build)
```bash
npm run build
```

### 3. Meninjau Hasil Build (Preview)
```bash
npm run preview
```

---

## 📁 Struktur Direktori

```text
├── index.html          # HTML entry point dengan Google Fonts (Plus Jakarta Sans)
├── package.json        # Dependensi dan script NPM
├── vite.config.js      # Konfigurasi Vite & plugin @tailwindcss/vite
├── src/
│   ├── main.jsx        # Root entry point React
│   ├── App.jsx         # Komponen utama dengan starter UI interaktif modern
│   ├── index.css       # File konfigurasi Tailwind CSS v4 (@import "tailwindcss";)
│   └── App.css         # Custom styling tambahan jika diperlukan
```

---

## 🎨 Konfigurasi Tailwind CSS v4

Pada versi Tailwind CSS v4:
- Menggunakan plugin resmi `@tailwindcss/vite` di [vite.config.js](file:///d:/RIEZKYA/SEMESTER%207/Tubes%20magang/PT%20SM/vite.config.js).
- Diimpor langsung pada file [src/index.css](file:///d:/RIEZKYA/SEMESTER%207/Tubes%20magang/PT%20SM/src/index.css) menggunakan:
  ```css
  @import "tailwindcss";
  ```
- Tidak memerlukan file `tailwind.config.js` atau `postcss.config.js` tambahan.
