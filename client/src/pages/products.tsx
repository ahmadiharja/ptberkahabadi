import { Container } from "@/components/ui/container";
import { useState, useEffect } from "react";
import { Star, ShoppingBag, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Data produk lengkap
const allProducts = [
  {
    id: 1,
    name: "Drajat Karunia",
    slug: "dk-drajat-karunia",
    description: "Rokok premium berkualitas tinggi dengan cita rasa khas yang kaya dan aroma yang lembut.",
    price: 26000,
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    badgeText: "Terlaris",
    rating: 4.9,
    reviewCount: 142,
    category: "premium"
  },
  {
    id: 2,
    name: "VBPRO Nusantara",
    slug: "vb-pro-nusantara",
    description: "Pengalaman merokok yang unik dengan perpaduan tembakau pilihan dan rempah nusantara.",
    price: 26000,
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    rating: 4.8,
    reviewCount: 128,
    category: "premium"
  },
  {
    id: 3,
    name: "VBPRO Red",
    slug: "vb-pro-red",
    description: "Rokok dengan karakter kuat dan mantap, cocok untuk yang menyukai sensasi lebih tegas.",
    price: 26000,
    image: "/assets/images/products/vb-pro-red.jpg",
    rating: 4.7,
    reviewCount: 98,
    category: "premium"
  },
  {
    id: 4,
    name: "Pribumi Classic",
    slug: "pribumi-classic",
    description: "Rokok dengan cita rasa klasik yang tidak pernah ketinggalan zaman.",
    price: 24000,
    image: "/assets/images/products/pribumi-classic.jpg",
    badgeText: "Hemat",
    rating: 4.6,
    reviewCount: 86,
    category: "medium"
  },
  {
    id: 5,
    name: "Pribumi Merah",
    slug: "pribumi-merah-16",
    description: "Rokok dengan rasa tembakau yang kuat dan karakter yang tegas.",
    price: 24000,
    image: "/assets/images/products/pribumi-merah-16.jpg",
    rating: 4.5,
    reviewCount: 75,
    category: "medium"
  },
  {
    id: 6,
    name: "Pribumi Espresso",
    slug: "pribumi-espresso",
    description: "Perpaduan unik tembakau dan aroma kopi espresso yang memikat.",
    price: 24000,
    image: "/assets/images/products/pribumi-espresso.jpg",
    badgeText: "Baru",
    rating: 4.7,
    reviewCount: 62,
    category: "flavored"
  },
  {
    id: 7,
    name: "Pribumi Anggur",
    slug: "pribumi-anggur",
    description: "Sentuhan aroma anggur yang segar pada tembakau berkualitas.",
    price: 24000,
    image: "/assets/images/products/pribumi-anggur.jpg",
    rating: 4.5,
    reviewCount: 58,
    category: "flavored"
  },
  {
    id: 8,
    name: "Pribumi Jambu Biji",
    slug: "pribumi-jambu-biji",
    description: "Kombinasi unik tembakau dengan aroma jambu biji yang menyegarkan.",
    price: 24000,
    image: "/assets/images/products/pribumi-jambu-biji.jpg",
    rating: 4.6,
    reviewCount: 64,
    category: "flavored"
  },
  {
    id: 9,
    name: "Pribumi Mangga Madu",
    slug: "pribumi-mangga-madu",
    description: "Perpaduan sempurna antara tembakau, aroma mangga, dan manis madu.",
    price: 24000,
    image: "/assets/images/products/pribumi-mangga-madu.jpg",
    badgeText: "Baru",
    rating: 4.8,
    reviewCount: 47,
    category: "flavored"
  }
];

// Kategori produk
const categories = [
  { id: "all", name: "Semua Produk" },
  { id: "premium", name: "Premium" },
  { id: "medium", name: "Medium" },
  { id: "flavored", name: "Beraroma" }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  
  // Handle closing animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsFilterOpen(false);
      setIsAnimatingOut(false);
    }, 300);
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFilterOpen) {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling on body when modal is open
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isFilterOpen]);
  
  // Filter produk berdasarkan kategori
  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-3">Produk Kami</h1>
            <p className="text-lg text-[var(--dark-400)] max-w-2xl mx-auto">
              Pilihan produk premium berkualitas tinggi dengan beragam varian untuk memenuhi selera Anda
            </p>
          </div>
          
          {/* Filter and Category Selection - Mobile */}
          <div className="md:hidden mb-6">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="w-full px-4 py-3 bg-[var(--dark-800)] rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-[var(--accent-green)]" />
                <span>Filter Kategori</span>
              </div>
              <span className="bg-[var(--dark-700)] px-2 py-1 rounded text-sm">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            </button>
            
            {/* Mobile Filter Panel - Improved */}
            {isFilterOpen && (
              <div className="fixed inset-0 z-50 overflow-hidden">
                {/* Backdrop with animation */}
                <div 
                  className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
                    isAnimatingOut ? "opacity-0" : "opacity-100"
                  )}
                  onClick={handleClose}
                  style={{ transitionDuration: "300ms" }}
                ></div>
                
                {/* Sliding panel */}
                <div 
                  className={cn(
                    "fixed inset-x-0 bottom-0 z-50 bg-[var(--dark-900)] rounded-t-xl max-h-[85vh] flex flex-col overflow-hidden shadow-xl transition-transform duration-300",
                    isAnimatingOut ? "translate-y-full" : "translate-y-0"
                  )}
                >
                  {/* Header */}
                  <div className="p-4 border-b border-[var(--dark-700)] flex items-center justify-between sticky top-0 bg-[var(--dark-900)] z-10">
                    <h3 className="text-xl font-medium">Filter Produk</h3>
                    <button 
                      onClick={handleClose}
                      className="p-2 hover:bg-[var(--dark-800)] rounded-full transition-colors"
                      aria-label="Tutup"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Body content */}
                  <div className="flex-1 p-4 overflow-y-auto">
                    <div className="mb-4">
                      <h4 className="text-lg mb-3 text-[var(--light-200)]">Kategori</h4>
                      <div className="space-y-3">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-[var(--accent-green)] bg-opacity-20 border border-[var(--accent-green)] text-[var(--accent-green)]'
                                : 'bg-[var(--dark-800)] hover:bg-[var(--dark-700)]'
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer actions */}
                  <div className="p-4 border-t border-[var(--dark-700)] sticky bottom-0 bg-[var(--dark-900)] z-10">
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={handleClose}
                        className="px-4 py-3 bg-[var(--dark-800)] rounded-lg hover:bg-[var(--dark-700)] transition-colors"
                      >
                        Batal
                      </button>
                      <button 
                        onClick={handleClose}
                        className="px-4 py-3 bg-[var(--accent-green)] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                      >
                        Terapkan Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Desktop Category Pills */}
          <div className="hidden md:flex mb-8 space-x-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[var(--accent-green)] text-white'
                    : 'bg-[var(--dark-800)] text-[var(--light-200)] hover:bg-[var(--dark-700)]'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-gradient-to-b from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover" 
                  />
                  {product.badgeText && (
                    <div className="absolute top-4 right-4 bg-[var(--accent-green)] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badgeText}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-[var(--dark-400)] text-xs ml-1">({product.reviewCount} ulasan)</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{product.name}</h3>
                  <p className="text-[var(--dark-400)] text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--light-100)] font-bold">Rp{product.price.toLocaleString()}</span>
                    <button className="p-2 bg-[var(--accent-green)] bg-opacity-20 rounded-full">
                      <ShoppingBag className="w-5 h-5 text-[var(--accent-green)]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bulk Order Section */}
          <div className="mt-16 bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-light mb-4">Pembelian dalam Jumlah Besar?</h2>
                <p className="text-[var(--dark-400)] mb-6">
                  Dapatkan penawaran khusus untuk pembelian grosir. Cocok untuk reseller, kemitraan, 
                  dan bisnis retail. Nikmati harga khusus dan layanan pengiriman prioritas.
                </p>
                <button className="px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105">
                  Hubungi Kami
                </button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="/assets/images/products/bulk-order.jpg" 
                  alt="Pembelian Grosir"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      {/* Simple footer */}
      <footer className="bg-[var(--dark-800)] py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="flex items-center">
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
              </a>
            </div>
            <div className="text-[var(--dark-500)] text-sm">
              © {new Date().getFullYear()} Berkah Abadi. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
} 