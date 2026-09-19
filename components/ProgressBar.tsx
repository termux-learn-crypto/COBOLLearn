export default function ProgressBar({ percent }: { percent: number }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-blue-600 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
