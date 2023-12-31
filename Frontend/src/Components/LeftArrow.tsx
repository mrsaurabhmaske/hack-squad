export function LeftArrow({ toggle }: { toggle: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-8 h-8 text-white hover:text-orange-400 cursor-pointer hover:scale-125 transition-all ease-in-out duration-300"
      onClick={toggle}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  );
}
