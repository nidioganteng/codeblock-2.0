export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-[5px] rounded-full bg-pill px-2.5 py-1 text-xs leading-[15px] font-semibold text-black">
      <span className="size-[15px] rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}
