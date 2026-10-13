export default function ErrorMessage({ message = 'Something went wrong. Please try again.' }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-300">
      <p className="font-medium">Error</p>
      <p className="mt-1">{message}</p>
    </div>
  )
}
