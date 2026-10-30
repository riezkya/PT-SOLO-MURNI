import { useState } from 'react'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Store
} from 'lucide-react'

export default function Sidebar({
  activeMenu = 'dashboard',
  onSelectMenu,
  onLogout,
  user = { name: 'Admin Kiky', role: 'Administrator' }
}) {
  const [collapsed, setCollapsed] = useState(false)
  const [currentActive, setCurrentActive] = useState(activeMenu)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'barang', label: 'Data Barang', icon: Package },
    { id: 'penjualan', label: 'Penjualan', icon: ShoppingCart },
    { id: 'laporan', label: 'Laporan', icon: BarChart3 },
    { id: 'pengguna', label: 'Manajemen User', icon: Users },
    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
  ]

  const handleMenuClick = (id) => {
    setCurrentActive(id)
    if (onSelectMenu) {
      onSelectMenu(id)
    }
  }

  return (
    <aside
      className={`relative flex flex-col justify-between border-r border-slate-200 bg-white transition-all duration-300 ease-in-out shadow-sm min-h-screen ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Tombol Collapse / Expand Sidebar */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3.5 top-7 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-md transition-all hover:bg-slate-50 hover:text-slate-800"
        title={collapsed ? 'Perluas Sidebar' : 'Ciutkan Sidebar'}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      {/* Bagian Atas: Logo & Gambar Sidebar dari assets/images */}
      <div>
        {/* Header KIKY Branding */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0e355c] text-white shadow-md shadow-[#0e355c]/20">
            <Store className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden transition-opacity duration-200">
              <div className="inline-flex items-center rounded-full border border-black/80 px-2 py-0.5">
                <span className="text-[10px] font-black tracking-widest text-black">KIKY</span>
              </div>
              <p className="mt-0.5 text-xs font-semibold text-slate-800 truncate">
                PT Solo Murni
              </p>
            </div>
          )}
        </div>

        {/* Menu Navigasi Utama */}
        <nav className="mt-2 space-y-1 px-3">
          {!collapsed && (
            <p className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              Menu Utama
            </p>
          )}

          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = currentActive === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleMenuClick(item.id)}
                title={collapsed ? item.label : undefined}
                className={`group flex w-full items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-[#0e355c] text-white shadow-sm shadow-[#0e355c]/25'
                    : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                } ${collapsed ? 'justify-center px-0' : ''}`}
              >
                <Icon
                  className={`h-5 w-5 shrink-0 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'
                  }`}
                />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Bagian Bawah: Profil Pengguna & Tombol Keluar */}
      <div className="border-t border-slate-100 p-3">
        {/* User Card */}
        <div
          className={`mb-2 flex items-center gap-3 rounded-xl bg-slate-50 p-2.5 ${
            collapsed ? 'justify-center p-2' : ''
          }`}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0e355c]/10 text-[#0e355c] font-bold text-xs">
            {user.name ? user.name.charAt(0) : 'U'}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-slate-800">{user.name}</p>
              <p className="truncate text-[10px] text-slate-400">{user.role}</p>
            </div>
          )}
        </div>

        {/* Tombol Logout */}
        <button
          type="button"
          onClick={onLogout}
          title={collapsed ? 'Keluar' : undefined}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 ${
            collapsed ? 'justify-center px-0' : ''
          }`}
        >
          <LogOut className="h-4 w-4 shrink-0 text-red-500" />
          {!collapsed && <span>Keluar</span>}
        </button>
      </div>
    </aside>
  )
}

export { Sidebar }