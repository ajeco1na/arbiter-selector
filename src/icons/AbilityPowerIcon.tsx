interface IconProps {
  size?: number;
  className?: string;
}

export function AbilityPowerIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 1l2 5h5l-4 3 1.5 5L8 11 3.5 14 5 9 1 6h5L8 1z" />
    </svg>
  );
}
