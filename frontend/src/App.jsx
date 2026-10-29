import { useState } from 'react'
import Register from './components/Register/Register'
import LoginForm from './components/Login/LoginForm'
import Dashboard from './components/Dashboard/dashboard'

export default function App() {
  const [currentView, setCurrentView] = useState('register')
  const [user, setUser] = useState({ name: 'Admin Kiky', role: 'Administrator' })
  const [registeredData, setRegisteredData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const handleRegisterSuccess = (data) => {
    if (data) {
      setRegisteredData({
        username: data.username || data.email || '',
        email: data.email || '',
        message: data.message || 'Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.'
      })
    }
    setCurrentView('login')
  }

  return (
    <div className="min-h-screen w-full">
      {currentView === 'register' && (
        <Register
          onNavigateToLogin={(data) => {
            if (data?.email || data?.username) {
              handleRegisterSuccess(data)
            } else {
              setRegisteredData({ username: '', email: '', message: '' })
              setCurrentView('login')
            }
          }}
        />
      )}

      {currentView === 'login' && (
        <LoginForm
          initialUsername={registeredData.username || registeredData.email}
          successMessage={registeredData.message}
          onLoginSuccess={(userData) => {
            setUser(userData)
            setCurrentView('dashboard')
          }}
          onNavigateToRegister={() => {
            setRegisteredData({ username: '', email: '', message: '' })
            setCurrentView('register')
          }}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard
          user={user}
          onLogout={() => {
            setCurrentView('login')
          }}
        />
      )}
    </div>
  )
}
