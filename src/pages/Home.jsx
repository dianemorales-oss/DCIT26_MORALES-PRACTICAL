import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Home({ totalUsers }) {
  useEffect(() => {
    document.title = 'Team Directory | Home'
  }, [])

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          Team Directory
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Discover and manage your team with confidence.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          This app helps you explore team members, review company details, track favorites, and move quickly between team information and profiles.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/users">
            <Button label="View Team Members" variant="primary" />
          </Link>
          <Link to="/about">
            <Button label="Learn More" variant="secondary" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Members</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{totalUsers}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Search</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Live</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">Favorites</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Ready</p>
          </div>
        </div>
      </div>
    </div>
  )
}
