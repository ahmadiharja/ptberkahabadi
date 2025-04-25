import { Link, useLocation } from "wouter";
import { 
  Home, 
  ShoppingBag, 
  Users, 
  Heart, 
  HelpCircle, 
  ChevronRight, 
  LogOut, 
  Settings,
  ShoppingCart,
  UserCircle2,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

// Utility untuk menggabungkan nama kelas
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Data navigasi member area
const navigationItems = [
  { 
    id: "dashboard", 
    name: "Dashboard", 
    href: "/member", 
    icon: Home 
  },
  { 
    id: "produk", 
    name: "Produk", 
    href: "/member/produk", 
    icon: ShoppingBag 
  },
  { 
    id: "affiliasi", 
    name: "Afiliasi", 
    href: "/member/affiliasi", 
    icon: Users 
  },
  { 
    id: "order", 
    name: "Order", 
    href: "/member/order", 
    icon: ShoppingCart 
  },
  { 
    id: "pengaturan", 
    name: "Pengaturan", 
    href: "/member/pengaturan", 
    icon: Settings 
  },
];

// Data navigasi header (tidak lagi digunakan karena menu header telah dihapus)
// Namun masih dipertahankan sebagai referensi
export const headerNavItems = [
  { name: "Beranda", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Ambassador", href: "/ambassador" },
  { name: "Donasi", href: "/donasi" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Kontak", href: "/contact" },
];

export function BottomNavigation() {
  const [location] = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  // Determine active item based on current location
  useEffect(() => {
    if (location === "/member") {
      setActiveItem("dashboard");
    } else if (location.startsWith("/member/")) {
      const segment = location.split("/")[2];
      if (segment) {
        setActiveItem(segment);
      }
    }
  }, [location]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--dark-800)] border-t border-[var(--dark-700)] md:hidden">
      <div className="grid grid-cols-5">
        {navigationItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <a className={cn(
              "flex flex-col items-center justify-center py-3 text-xs",
              activeItem === item.id 
                ? "text-[var(--accent-green)]" 
                : "text-[var(--dark-400)] hover:text-white"
            )}>
              <item.icon className="h-5 w-5 mb-1" />
              <span>{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function SideNavigation() {
  const [location] = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");
  const [notificationCount, setNotificationCount] = useState(2); // Only 2 unread notifications

  // Determine active item based on current location
  useEffect(() => {
    if (location === "/member") {
      setActiveItem("dashboard");
    } else if (location.startsWith("/member/")) {
      const segment = location.split("/")[2];
      if (segment) {
        setActiveItem(segment);
      }
    }
  }, [location]);

  return (
    <>
      {/* Mobile Only - Top Bar (tanpa menu hamburger) */}
      <div className="flex items-center justify-between p-4 bg-[var(--dark-800)] border-b border-[var(--dark-700)] md:hidden fixed top-0 left-0 right-0 z-50">
        <Logo />
        {/* Tombol notifikasi di pojok kanan */}
        <Link href="/member/notifikasi">
          <a className="text-white hover:text-[var(--accent-green)] relative">
            <Bell className="h-6 w-6" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--accent-green)] text-black text-xs font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </a>
        </Link>
      </div>

      {/* Desktop Only - Side Navigation */}
      <div className="hidden md:flex md:w-64 lg:w-72 bg-[var(--dark-800)] border-r border-[var(--dark-700)] flex-col h-screen fixed left-0 top-0">
        <div className="p-6">
          <Logo />
        </div>
        <div className="px-6 py-4 border-b border-[var(--dark-700)]">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-12 w-12 border-2 border-[var(--dark-600)]">
              <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" alt="User" />
              <AvatarFallback className="bg-[var(--accent-green)] text-white">AB</AvatarFallback>
            </Avatar>
            <Link href="/member/notifikasi">
              <a className="text-[var(--dark-400)] hover:text-white relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--accent-green)] text-black text-xs font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </a>
            </Link>
          </div>
          <h2 className="text-white font-medium">Selamat Datang,</h2>
          <p className="text-[var(--accent-green)]">Adi Berkah</p>
        </div>
        <div className="px-4 py-2">
          <h3 className="text-sm font-medium text-[var(--dark-400)]">Menu</h3>
        </div>
        <div className="flex-1 py-2">
          {navigationItems.map((item) => (
            <Link key={item.id} href={item.href}>
              <a 
                className={cn(
                  "flex items-center px-4 py-3 mx-2 rounded-md mb-1",
                  activeItem === item.id 
                    ? "bg-[var(--accent-green)] text-black" 
                    : "text-white hover:bg-[var(--dark-900)]"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.name}</span>
                {activeItem === item.id && <ChevronRight className="ml-auto h-4 w-4" />}
              </a>
            </Link>
          ))}
        </div>
        <div className="p-4 mt-auto">
          <Button 
            variant="outline" 
            className="w-full border-[var(--dark-600)] text-[var(--dark-400)] hover:bg-[var(--dark-700)] hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" /> Keluar
          </Button>
        </div>
      </div>
    </>
  );
}