import { Link } from "wouter";
import { useState } from "react";
import { RegistrationModal } from "./registration-modal";

export function DesktopNavigation() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="/" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Beranda
        </Link>
        <Link href="/products" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Produk
        </Link>
        <Link href="/program" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Program
        </Link>
        <Link href="/ambassador" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Ambassador
        </Link>
        <Link href="/donasi" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Donasi
        </Link>
        <Link href="/tentang-kami" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Tentang Kami
        </Link>
        <Link href="/contact" className="text-[var(--light-100)] hover:text-[var(--accent-green)] transition-colors duration-200">
          Kontak
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
