export default function Button({
  label,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  children,
}) {
  const styles = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-indigo-300 dark:disabled:bg-indigo-900',
    secondary:
      'bg-slate-200 text-slate-900 hover:bg-slate-300 disabled:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:disabled:bg-slate-800',
    danger:
      'bg-red-600 text-white hover:bg-red-500 disabled:bg-red-300 dark:disabled:bg-red-900',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${styles[variant]}`}
    >
      {label ?? children}
    </button>
  )
}
