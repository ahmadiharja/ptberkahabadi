import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { RegistrationModal } from "./registration-modal";

export function DesktopNavigation() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isProgramMenuOpen, setIsProgramMenuOpen] = useState(false);
  const programMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const toggleProgramMenu = () => {
    setIsProgramMenuOpen(!isProgramMenuOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (programMenuRef.current && !programMenuRef.current.contains(event.target as Node)) {
        setIsProgramMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="/" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Beranda
        </Link>
        <Link href="/products" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Produk
        </Link>

        {/* Program Dropdown */}
        <div className="relative" ref={programMenuRef}>
          <button 
            className="flex items-center text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200"
            onClick={toggleProgramMenu}
          >
            Program <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProgramMenuOpen ? "rotate-180" : ""}`} />
          </button>
          
          {isProgramMenuOpen && (
            <div className="absolute mt-2 w-48 bg-[var(--dark-800)] rounded-md shadow-lg py-1 z-50 border border-[var(--dark-700)]">
              <Link 
                href="/affiliasi" 
                className="block px-4 py-2 text-sm text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)]"
              >
                Affiliasi
              </Link>
              <Link 
                href="/ambassador" 
                className="block px-4 py-2 text-sm text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)]"
              >
                Ambassador
              </Link>
              <Link 
                href="/donasi" 
                className="block px-4 py-2 text-sm text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)]"
              >
                Donasi
              </Link>
            </div>
          )}
        </div>

        <Link href="/tentang-kami" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Tentang Kami
        </Link>
        
        <div className="ml-6 flex space-x-3">
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center px-4 py-1.5 border border-[var(--dark-500)] text-sm font-medium rounded-md text-[var(--light-100)] hover:bg-[var(--dark-700)] transition-all duration-200 hover:scale-103"
          >
            Login
          </Link>
          <button 
            onClick={handleOpenRegistrationModal}
            className="inline-flex items-center justify-center px-4 py-1.5 border border-[var(--accent-green)] bg-[rgba(22,101,52,0.1)] text-sm font-medium rounded-md text-[var(--accent-green)] hover:bg-[rgba(22,101,52,0.2)] transition-all duration-200 hover:scale-103"
          >
            Daftar
          </button>
        </div>
      </nav>

      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={handleCloseRegistrationModal} 
      />
    </>
  );
}
