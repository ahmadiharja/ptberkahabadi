import { Link } from "wouter";

export function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <svg 
          className="h-8 w-auto text-[var(--accent-green)]" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="currentColor" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12.077 2c-5.523 0 -10.065 4.477 -10.077 10s4.477 10 10 10c3.8 0 7.1 -2.1 8.8 -5.2"></path>
          <path d="M19.021 17.796a9 9 0 0 0 -7.021 -15.796h-1"></path>
          <path d="M12 10.528v5.472"></path>
          <path d="M12 10.528a4.5 4.5 0 1 0 0 -9l-.5 .5"></path>
        </svg>
        <span className="ml-2 text-xl font-semibold">Berkah Abadi</span>
      </Link>
    </div>
  );
}
