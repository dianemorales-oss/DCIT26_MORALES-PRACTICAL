import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'Team Directory | About'
  }, [])

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          About
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">About the Team Directory App</h1>

        <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
          <p>
            The Team Directory App is a small internal dashboard for discovering and managing team members. It helps people quickly review profiles, locate people by role or company, and keep track of important contacts in one place.
          </p>
          <p>
            The application is built with React, Vite, React Router DOM, and Tailwind CSS. It makes use of local data, client-side routing, reusable UI components, and theme switching for a smooth user experience.
          </p>
          <p>
            Users can search by name, company, email, or role, mark favorites, browse detailed profiles, and toggle between light and dark mode without reloading the page.
          </p>
        </div>
      </div>
    </div>
  )
}
