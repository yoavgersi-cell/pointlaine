/* Pointlaine mark: a point resting on a line, in an ink tile. */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="var(--color-ink)" />
      <path d="M7 19.5h14" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14" cy="12.5" r="3.6" fill="var(--color-brand)" />
      <circle cx="14" cy="12.5" r="3.6" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" />
    </svg>
  );
}
