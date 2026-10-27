# PT Solo Murni - Project Repository

Repositori proyek PT Solo Murni (Fullstack React + Laravel).

## 📁 Struktur Direktori

```text
PT-SOLO-MURNI/
├── frontend/        # Frontend Client (React 19 + Tailwind CSS v4 + Vite)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/         # Backend API (Laravel 12 + PHP 8.2+)
│   ├── app/
│   ├── routes/
│   ├── database/
│   ├── artisan
│   └── composer.json
└── README.md
```

---

## 🚀 Panduan Menjalankan

### 1. Frontend (React + Tailwind CSS v4)
```bash
cd frontend
npm install
npm run dev
```
Akses di: `http://localhost:5173`

### 2. Backend (Laravel 12)
```bash
cd backend
php artisan serve
```
Akses di: `http://localhost:8000`

---

## 🛠️ Catatan Setup Backend

- **Environment**: File `.env` sudah dibuat dengan `APP_KEY` yang ter-generate otomatis.
- **Database default**: SQLite (`database/database.sqlite`), migrasi default sudah dijalankan.
- Jika ingin menghubungkan ke database MySQL/PostgreSQL, cukup sesuaikan konfigurasi di [backend/.env](backend/.env).
