interface IconProps {
  size?: number;
  className?: string;
}

export function DefenseIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z" />
      <path d="M8 5v6M5 8h6" stroke="var(--surface-0)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
