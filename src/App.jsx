
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import users from './data/users'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('team-directory-theme')
    return savedTheme || 'light'
  })

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('team-directory-favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('team-directory-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('team-directory-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (userId) => {
    setFavorites((current) => {
      if (current.includes(userId)) {
        return current.filter((id) => id !== userId)
      }

      return [...current, userId]
    })
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Navbar
          favorites={favorites}
          theme={theme}
          onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          showFavorites={showFavorites}
          onToggleFavorites={() => setShowFavorites((current) => !current)}
        />

        <Routes>
          <Route path="/" element={<Home totalUsers={users.length} />} />
          <Route
            path="/users"
            element={
              <Users
                users={users}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites}
              />
            }
          />
          <Route
            path="/users/:id"
            element={<UserDetails users={users} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
