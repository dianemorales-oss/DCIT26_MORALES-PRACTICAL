import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function Navbar({ favorites, theme, onThemeToggle, showFavorites, onToggleFavorites }) {
  const navLinkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white'
    }`

  return (
    <nav className="border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
            T
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Directory</p>
            <p className="text-lg font-bold text-slate-800 dark:text-white">Team Directory</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={navLinkClass}>
            Users
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <button
            type="button"
            onClick={onToggleFavorites}
            className={`rounded-full px-3 py-2 text-sm font-medium transition ${
              showFavorites
                ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-900/40 dark:text-amber-200 dark:ring-amber-700/70'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Favorites ({favorites.length})
          </button>

          <Button
            label={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            variant="secondary"
            onClick={onThemeToggle}
          />
        </div>
      </div>
    </nav>
  )
}
