import { useState } from 'react'
import {
    User,
    Mail,
    Lock,
    ShieldCheck,
    Eye,
    EyeOff,
    ArrowRight,
    Shield,
    Store,
    Package
} from 'lucide-react'
import bgWarehouse from '../../assets/images/background.jpeg'
import logoKiky from '../../assets/images/logo kiky.jpg'

export default function Register({ onNavigateToLogin }) {
    const [selectedDivision, setSelectedDivision] = useState('penjualan')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreed, setAgreed] = useState(false)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const divisions = [
        { id: 'admin', label: 'Admin', icon: Shield },
        { id: 'penjualan', label: 'Penjualan', icon: Store },
        { id: 'gudang', label: 'Gudang', icon: Package }
    ]

    const activeDivisionLabel = divisions.find(d => d.id === selectedDivision)?.label || 'Penjualan'

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!agreed) {
            alert('Silakan setujui Syarat & Ketentuan serta Kebijakan Privasi Kiky Stationery.')
            return
        }
        if (formData.password !== formData.confirmPassword) {
            alert('Konfirmasi kata sandi tidak cocok!')
            return
        }

        // Otomatis arahkan ke halaman login
        if (onNavigateToLogin) {
            onNavigateToLogin({
                email: formData.email,
                username: formData.email.split('@')[0] || formData.fullName,
                division: selectedDivision,
                message: `Akun untuk ${formData.fullName} (${activeDivisionLabel}) berhasil didaftarkan! Silakan masuk dengan kredensial Anda.`
            })
        }
    }

    return (
        <div className="flex min-h-screen w-full bg-white font-sans text-slate-800 antialiased selection:bg-[#0e355c] selection:text-white">
            {/* Kolom Kiri: Form Registrasi */}
            <div className="flex w-full flex-col justify-between px-6 py-8 sm:px-12 md:px-16 lg:w-1/2 lg:py-12 xl:px-24">
                {/* Header Logo KIKY */}
                <div>
                    <div className="mb-6 flex items-center">
                        {/* Logo Kiky Pill */}
                        <div className="inline-flex items-center justify-center rounded-full border-2 border-black px-4 py-1 tracking-wider">
                            <span className="text-xs font-black tracking-widest text-black">KIKY</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="font-serif text-3xl font-bold tracking-tight text-[#0f2b48] sm:text-4xl">
                            Daftar Akun Baru
                        </h1>
                        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                            Pilih divisi Anda dan lengkapi data untuk mengakses sistem.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Divisi Akses Section */}
                        <div>
                            <div className="mb-2 flex items-center justify-between text-xs">
                                <label className="font-bold tracking-wider text-slate-700 uppercase text-[11px]">
                                    DIVISI AKSES <span className="text-red-500">*</span>
                                </label>
                                <span className="font-medium text-[#9c6d3b]">
                                    Divisi Terpilih: {activeDivisionLabel}
                                </span>
                            </div>

                            {/* Segmented Control Buttons */}
                            <div className="grid grid-cols-3 gap-1 rounded-2xl bg-[#ebecee] p-1.5">
                                {divisions.map((div) => {
                                    const Icon = div.icon
                                    const isSelected = selectedDivision === div.id
                                    return (
                                        <button
                                            key={div.id}
                                            type="button"
                                            onClick={() => setSelectedDivision(div.id)}
                                            className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-medium transition-all duration-200 ${isSelected
                                                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                                                }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                            <span>{div.label}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Nama Lengkap */}
                        <div>
                            <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                                Nama Lengkap <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <User className="h-4 w-4" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nama lengkap"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full rounded-xl border border-slate-200/90 bg-white py-3 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0e355c] focus:outline-none focus:ring-2 focus:ring-[#0e355c]/10 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Email Perusahaan / Pribadi */}
                        <div>
                            <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                                Email Perusahaan / Pribadi <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder="Masukkan email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded-xl border border-slate-200/90 bg-white py-3 pr-4 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0e355c] focus:outline-none focus:ring-2 focus:ring-[#0e355c]/10 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Kata Sandi & Konfirmasi Sandi */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Kata Sandi */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                                    Kata Sandi <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                        <Lock className="h-4 w-4" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        minLength={8}
                                        placeholder="Minimal 8 karakter"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full rounded-xl border border-slate-200/90 bg-white py-3 pr-10 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0e355c] focus:outline-none focus:ring-2 focus:ring-[#0e355c]/10 transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Konfirmasi Sandi */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-slate-800">
                                    Konfirmasi Sandi <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                                        <ShieldCheck className="h-4 w-4" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                        minLength={8}
                                        placeholder="Ulangi kata sandi"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        className="w-full rounded-xl border border-slate-200/90 bg-white py-3 pr-10 pl-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0e355c] focus:outline-none focus:ring-2 focus:ring-[#0e355c]/10 transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Checkbox Syarat & Ketentuan */}
                        <div className="flex items-start gap-2.5 pt-1">
                            <input
                                id="terms"
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0e355c] focus:ring-[#0e355c] cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                                Saya menyetujui{' '}
                                <span className="font-bold text-slate-900 hover:underline">
                                    Syarat &amp; Ketentuan
                                </span>{' '}
                                serta{' '}
                                <span className="font-bold text-slate-900 hover:underline">
                                    Kebijakan Privasi
                                </span>{' '}
                                Kiky Stationery.
                            </label>
                        </div>

                        {/* Tombol Submit Daftar Akun */}
                        <button
                            type="submit"
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0e355c] py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0e355c]/20 transition-all duration-200 hover:bg-[#092542] hover:shadow-lg active:scale-[0.99]"
                        >
                            <span>Daftar Akun</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <div className="mt-8 text-center text-xs text-slate-600">
                    Sudah memiliki akun?{' '}
                    <button
                        type="button"
                        onClick={onNavigateToLogin}
                        className="font-bold text-[#0f2b48] hover:underline"
                    >
                        Masuk Sekarang
                    </button>
                </div>
            </div>

            {/* Kolom Kanan: Gambar Background Gudang & Logo Watermark KIKY */}
            <div className="relative hidden lg:block lg:w-1/2 overflow-hidden bg-slate-900">
                {/* Background image warehouse */}
                <img
                    src={bgWarehouse}
                    alt="Gudang Kiky Stationery"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Navy Tinted Overlay */}
                <div className="absolute inset-0 bg-[#07203a]/65 bg-gradient-to-t from-[#06182c]/95 via-[#08233f]/60 to-[#0b2b4c]/40" />

                {/* Center Watermark KIKY Badge */}
                <div className="relative z-10 flex h-full items-center justify-center p-8">
                    <div className="flex items-center justify-center rounded-full border-[3px] border-slate-300/40 bg-slate-900/35 px-10 py-3.5 shadow-2xl backdrop-blur-[2px]">
                        <span className="text-4xl font-black tracking-[0.22em] text-slate-200/90 sm:text-5xl">
                            KIKY
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
