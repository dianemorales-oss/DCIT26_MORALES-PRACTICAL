import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'

export default function UserDetails({ users, favorites, toggleFavorite }) {
  const { id } = useParams()
  const userId = Number(id)
  const user = users.find((item) => item.id === userId)

  useEffect(() => {
    document.title = user ? 'Team Directory | User Details' : 'Team Directory | Not Found'
  }, [user])

  if (!user) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 md:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Not Found</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">User Not Found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The user you are looking for does not exist or may have been removed.
          </p>
          <div className="mt-6">
            <Link to="/users">
              <Button label="Back to Users" variant="primary" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const isFavorite = favorites.includes(user.id)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
              {user.name
                .split(' ')
                .map((part) => part[0])
                .slice(0, 2)
                .join('')}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                User Profile
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
            </div>
          </div>

          <Button
            label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
            variant={isFavorite ? 'secondary' : 'primary'}
            onClick={() => toggleFavorite(user.id)}
          />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{user.email}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Company</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{user.company}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800 md:col-span-2">
            <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{user.role}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-start">
          <Link to="/users">
            <Button label="Back to Users" variant="secondary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
