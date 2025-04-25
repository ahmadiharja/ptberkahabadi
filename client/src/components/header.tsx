import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileMenuButton, MobileMenu } from "./mobile-menu";
import { Container } from "./ui/container";
import { useScroll } from "@/hooks/use-scroll";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(50);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Close mobile menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 bg-[var(--dark-900)]/95 backdrop-blur-md border-b border-[var(--dark-700)]/50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <Container>
        {/* Desktop & Mobile Header Container */}
        <div className="flex items-center justify-between h-16">
          <Logo />
          <DesktopNavigation />
          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            toggleMenu={toggleMobileMenu} 
          />
        </div>
      </Container>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        toggleMenu={toggleMobileMenu}
      />
    </header>
  );
}
