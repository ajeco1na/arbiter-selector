interface IconProps {
  size?: number;
  className?: string;
}

export function AttackSpeedIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M9 1L4 9h4L8 15l5-8H9L9 1z" />
    </svg>
  );
}
