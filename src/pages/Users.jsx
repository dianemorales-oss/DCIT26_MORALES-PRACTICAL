import { useEffect, useMemo, useState } from 'react'
import Button from '../components/Button'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'

export default function Users({ users, favorites, toggleFavorite, showFavorites, setShowFavorites }) {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setError('')

    const timer = setTimeout(() => {
      try {
        setIsLoading(false)
      } catch {
        setError('Failed to load users. Please try again.')
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = useMemo(() => {
    const source = showFavorites ? users.filter((user) => favorites.includes(user.id)) : users
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return source
    }

    return source.filter((user) => {
      const searchable = [user.name, user.email, user.company, user.role].join(' ').toLowerCase()
      return searchable.includes(normalizedQuery)
    })
  }, [query, users, favorites, showFavorites])

  useEffect(() => {
    document.title = `Team Directory | Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  if (error) {
    return <div className="mx-auto max-w-5xl p-6"><ErrorMessage message={error} /></div>
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Directory
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Users</h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            label={showFavorites ? 'Show All Users' : 'Favorites Only'}
            variant={showFavorites ? 'primary' : 'secondary'}
            onClick={() => setShowFavorites((current) => !current)}
          />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-1 items-center gap-3">
          <span className="text-xl text-slate-500 dark:text-slate-400">⌕</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, company, email or role"
            aria-label="Search users"
            className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none dark:text-slate-200"
          />
        </div>

        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Clear
          </button>
        )}
      </div>

      {isLoading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900">
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">No users found</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Try a different search or clear the current filter.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <p>
              Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredUsers.length}</span> users
            </p>
            <p>{showFavorites ? 'Favorites view' : 'All users'}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isFavorite={favorites.includes(user.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
