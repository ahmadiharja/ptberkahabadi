import { Link } from "wouter";

export function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <img 
          src="/assets/images/bekarhabadilogo.png" 
          alt="Berkah Abadi Logo" 
          className="h-10 w-auto object-contain"
        />
        <span className="ml-2 text-xl font-semibold">Berkah Abadi</span>
      </Link>
    </div>
  );
}
