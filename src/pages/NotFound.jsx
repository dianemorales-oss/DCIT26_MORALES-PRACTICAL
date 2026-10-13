import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Team Directory | Not Found'
  }, [])

  return (
    <div className="mx-auto max-w-xl px-4 py-16 md:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">404</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button label="Go Home" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
