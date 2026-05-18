interface IconProps {
  size?: number;
  className?: string;
}

export function GoldIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <circle cx="8" cy="8" r="6" />
      <text x="8" y="11" textAnchor="middle" fontSize="8" fill="var(--surface-0)" fontWeight="bold">$</text>
    </svg>
  );
}
