export default function ArrowRight({ size = 16 }) {
  return (
    <svg
      width={size}
      height={(size * 14) / 16}
      viewBox="0 0 16 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 7h13M8.5 1.5 14 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
