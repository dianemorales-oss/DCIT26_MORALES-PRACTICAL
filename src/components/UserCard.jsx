import { Link } from 'react-router-dom'

export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
            {user.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">{user.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.role}</p>
          </div>
        </div>

        <button
          type="button"
          aria-label={isFavorite ? `Remove ${user.name} from favorites` : `Add ${user.name} to favorites`}
          onClick={() => onToggleFavorite(user.id)}
          className={`rounded-full p-2 text-lg transition ${
            isFavorite
              ? 'bg-amber-100 text-amber-500 dark:bg-amber-900/40 dark:text-amber-300'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
          }`}
        >
          ★
        </button>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold text-slate-800 dark:text-slate-200">Company:</span> {user.company}
        </p>
      </div>

      <div className="mt-4">
        <Link
          to={`/users/${user.id}`}
          className="inline-flex rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
