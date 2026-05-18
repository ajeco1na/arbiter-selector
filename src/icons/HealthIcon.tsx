interface IconProps {
  size?: number;
  className?: string;
}

export function HealthIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 14s-5.5-3.5-5.5-7.5C2.5 4.5 4 3 5.5 3c1 0 2 .5 2.5 1.5C8.5 3.5 9.5 3 10.5 3 12 3 13.5 4.5 13.5 6.5 13.5 10.5 8 14 8 14z" />
    </svg>
  );
}
