import { useState } from 'react'
import {
  Code2,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  Copy,
  ExternalLink,
  Terminal,
  Cpu,
  Palette,
  ChevronRight,
  Flame
} from 'lucide-react'

export default function App() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [clickCount, setClickCount] = useState(0)

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const stackItems = [
    {
      name: 'React 19',
      category: 'Core Framework',
      desc: 'Library UI modern berbasis komponen dan virtual DOM tercepat.',
      color: 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30',
      badge: 'v19.x'
    },
    {
      name: 'Tailwind CSS v4',
      category: 'Styling Engine',
      desc: 'Versi terbaru dengan performa CSS-first engine berbasis @tailwindcss/vite.',
      color: 'from-teal-500/20 to-emerald-500/10 text-teal-300 border-teal-500/30',
      badge: 'v4.x'
    },
    {
      name: 'Vite 6',
      category: 'Build Tool',
      desc: 'Lightning-fast Hot Module Replacement (HMR) dan bundling instan.',
      color: 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30',
      badge: 'v6.x'
    },
    {
      name: 'Lucide Icons',
      category: 'Iconography',
      desc: 'Koleksi icon SVG modern, ringan, fleksibel dan konsisten.',
      color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
      badge: 'Latest'
    }
  ]

  const commands = [
    { title: 'Jalankan Dev Server', cmd: 'npm run dev' },
    { title: 'Build untuk Production', cmd: 'npm run build' },
    { title: 'Preview Build Hasil', cmd: 'npm run preview' }
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Background Decorative Glow Effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-cyan-500/20 to-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[500px] rounded-full bg-purple-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 -left-40 -z-10 h-[400px] w-[500px] rounded-full bg-blue-600/15 blur-[100px]" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                <Flame className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white">
                PT SM <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Project</span>
              </span>
              <span className="block text-[11px] font-medium text-slate-400">React + Tailwind CSS v4</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Siap Digunakan
            </span>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
            >
              Docs Tailwind v4
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 pt-12 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 shadow-sm shadow-indigo-500/10">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Setup Berhasil Dikonfigurasi</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modern React dengan{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Tailwind CSS v4
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Template starter siap pakai yang telah dioptimasi dengan arsitektur Vite terbaru, Tailwind CSS v4 berbasis Vite plugin, dan struktur komponen modular.
          </p>

          {/* Interactive Hero Action */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setClickCount(prev => prev + 1)}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/40 active:scale-95"
            >
              <Zap className="h-4 w-4 transition-transform group-hover:rotate-12" />
              <span>Tes Interaktivitas ({clickCount} klik)</span>
            </button>

            <button
              onClick={() => setActiveTab(activeTab === 'overview' ? 'commands' : 'overview')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-slate-600 hover:bg-slate-800/60"
            >
              <Terminal className="h-4 w-4 text-slate-400" />
              <span>{activeTab === 'overview' ? 'Lihat Terminal Commands' : 'Lihat Fitur Stack'}</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900/60 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              Stack & Arsitektur
            </button>
            <button
              onClick={() => setActiveTab('commands')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'commands'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="h-3.5 w-3.5" />
              Perintah Cepat
            </button>
          </div>
        </div>

        {/* Dynamic Tab Contents */}
        {activeTab === 'overview' ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stackItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">{item.category}</span>
                  <span className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold bg-gradient-to-r ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-indigo-400">
                  <span>Telah terkonfigurasi</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {commands.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-sm transition-colors hover:border-slate-700"
              >
                <div>
                  <p className="text-xs font-medium text-slate-400">{c.title}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-cyan-300">{c.cmd}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(c.cmd, idx)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-700 active:scale-95"
                  title="Salin ke clipboard"
                >
                  {copiedIndex === idx ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Feature Highlights Grid */}
        <div className="mt-16 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Palette className="h-5 w-5 text-indigo-400" />
                Konfigurasi Tailwind CSS v4 Baru
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Kini tidak memerlukan tailwind.config.js atau postcss.config.js yang rumit.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                @tailwindcss/vite
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Zero-Config CSS</h4>
              <p className="mt-1 text-xs text-slate-400">
                Cukup <code className="text-cyan-300">@import "tailwindcss";</code> di <code className="text-cyan-300">src/index.css</code>.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Oxide Engine</h4>
              <p className="mt-1 text-xs text-slate-400">
                Kompilasi CSS berbasis Rust yang berkali-kali lipat lebih cepat saat HMR.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-white">Full CSS Features</h4>
              <p className="mt-1 text-xs text-slate-400">
                Mendukung cascade layers modern, container queries, dan color functions terbaru secara native.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>Proyek PT SM &bull; Dibuat dengan React & Tailwind CSS v4</p>
      </footer>
    </div>
  )
}
