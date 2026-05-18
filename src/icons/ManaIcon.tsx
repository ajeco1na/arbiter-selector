interface IconProps {
  size?: number;
  className?: string;
}

export function ManaIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 1C8 1 3 7 3 10a5 5 0 0010 0C13 7 8 1 8 1z" />
    </svg>
  );
}
