export default function Loader() {
  return (
    <div className="py-12 text-center" role="status" aria-live="polite">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
        Loading users...
      </p>
    </div>
  )
}
