interface IconProps {
  size?: number;
  className?: string;
}

export function RerollIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 4v4h4" />
      <path d="M3.5 11a6 6 0 101-7.5L1 8" />
    </svg>
  );
}
