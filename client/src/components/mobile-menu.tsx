import { useState } from "react";
import { Link, useLocation } from "wouter";
import { RegistrationModal } from "./registration-modal";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function MobileMenuButton({ isOpen, toggleMenu }: MobileMenuProps) {
  return (
    <div className="md:hidden flex items-center">
      <button 
        type="button" 
        className="inline-flex items-center justify-center p-2 rounded-md text-[var(--light-100)] hover:text-[var(--accent-green)] focus:outline-none" 
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
        {/* Icon when menu is closed */}
        {!isOpen ? (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function MobileMenu({ isOpen, toggleMenu }: MobileMenuProps) {
  const [location] = useLocation();
  const isMemberArea = location.startsWith("/member");
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  
  const handleLinkClick = () => {
    toggleMenu();
  };
  
  const handleOpenRegistrationModal = () => {
    toggleMenu(); // Close mobile menu first
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <>
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out bg-[var(--dark-800)] border-b border-[var(--dark-700)]/50 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 max-w-[1280px] mx-auto">
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Beranda
          </Link>
          <Link 
            href="/products" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Produk
          </Link>
          <Link 
            href="/program" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Program
          </Link>
          <Link 
            href="/ambassador" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Ambassador
          </Link>
          <Link 
            href="/donasi" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Donasi
          </Link>
          <Link 
            href="/about" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Tentang Kami
          </Link>
          <Link 
            href="/contact" 
            onClick={handleLinkClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-[var(--light-100)] hover:bg-[var(--dark-700)] hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            Kontak
          </Link>
          
          {!isMemberArea && (
            <div className="pt-4 flex flex-col space-y-2">
              <Link 
                href="/login" 
                onClick={handleLinkClick}
                className="flex items-center justify-center px-4 py-2 border border-[var(--dark-500)] text-sm font-medium rounded-md text-[var(--light-100)] hover:bg-[var(--dark-700)] transition-colors duration-200"
              >
                Login
              </Link>
              <button 
                onClick={handleOpenRegistrationModal}
                className="flex items-center justify-center px-4 py-2 border border-[var(--accent-green)] bg-[rgba(22,101,52,0.1)] text-sm font-medium rounded-md text-[var(--accent-green)] hover:bg-[rgba(22,101,52,0.2)] transition-all duration-200"
              >
                Daftar
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={handleCloseRegistrationModal} 
      />
    </>
  );
}
