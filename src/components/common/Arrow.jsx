export default function Arrow({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" className={className}>
      <path
        d="M3 7h8M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
}
