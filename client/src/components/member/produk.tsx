import { ShoppingBag, Search, Plus, Share2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "wouter";
import { useToast } from "@/components/ui/use-toast";

// Data produk
const dummyProducts = [
  {
    id: 1,
    name: "VB Pro Nusantara",
    slug: "vb-pro-nusantara",
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    price: 224000,
    unit: "Slop",
    commission: 26000,
    promotion: true,
    stock: 150,
  },
  {
    id: 2,
    name: "DK - Drajat Karunia",
    slug: "dk-drajat-karunia",
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    price: 224000,
    unit: "Slop",
    commission: 26000,
    promotion: true,
    stock: 120,
  },
  {
    id: 3,
    name: "Pribumi Espresso",
    slug: "pribumi-espresso",
    image: "/assets/images/products/pribumi-espresso.jpg",
    price: 120000,
    unit: "Slop",
    commission: 8000,
    promotion: false,
    stock: 100,
  },
  {
    id: 4,
    name: "Pribumi Anggur",
    slug: "pribumi-anggur",
    image: "/assets/images/products/pribumi-anggur.jpg",
    price: 120000,
    unit: "Slop",
    commission: 8000,
    promotion: false,
    stock: 100,
  },
  {
    id: 5,
    name: "Pribumi Mangga Madu",
    slug: "pribumi-mangga-madu",
    image: "/assets/images/products/pribumi-mangga-madu.jpg",
    price: 120000,
    unit: "Slop",
    commission: 8000,
    promotion: false,
    stock: 100,
  },
  {
    id: 6,
    name: "Pribumi Jambu Biji",
    slug: "pribumi-jambu-biji",
    image: "/assets/images/products/pribumi-jambu-biji.jpg",
    price: 120000,
    unit: "Slop",
    commission: 8000,
    promotion: false,
    stock: 100,
  },
  {
    id: 7,
    name: "Pribumi Merah 16",
    slug: "pribumi-merah-16",
    image: "/assets/images/products/pribumi-merah-16.jpg",
    price: 120000,
    unit: "Slop",
    commission: 8000,
    promotion: false,
    stock: 100,
  },
  {
    id: 8,
    name: "Pribumi Classic",
    slug: "pribumi-classic",
    image: "/assets/images/products/pribumi-classic.jpg",
    price: 80000,
    unit: "Slop",
    commission: 4000,
    promotion: false,
    stock: 100,
  },
  {
    id: 9,
    name: "VB Pro Red",
    slug: "vb-pro-red",
    image: "/assets/images/products/vb-pro-red.jpg",
    price: 80000,
    unit: "Slop",
    commission: 4000,
    promotion: false,
    stock: 100,
  },
];

export function Produk() {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Helper function for enhanced toast
  const showToast = (title: string, description: string, type: "success" | "error" | "warning" | "info" = "success") => {
    toast({
      title,
      description,
      type
    });
  };

  // Filter produk berdasarkan pencarian
  const filteredProducts = dummyProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddToCart = (productId: number) => {
    const product = dummyProducts.find(p => p.id === productId);
    if (product) {
      showToast(
        "Produk ditambahkan ke keranjang",
        `${product.name} - Rp${product.price.toLocaleString('id-ID')}/${product.unit}`,
        "success"
      );
    }
  };

  const handleShareProduct = (product: typeof dummyProducts[0]) => {
    // Create product URL
    const productUrl = `${window.location.origin}/member/produk/${product.slug}`;
    
    // Check if the Web Share API is supported by the browser
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `${product.name} - Rp${product.price.toLocaleString('id-ID')}/${product.unit}`,
        url: productUrl,
      })
      .then(() => {
        showToast(
          "Berhasil dibagikan",
          `Link ${product.name} telah dibagikan`,
          "success"
        );
      })
      .catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(productUrl);
      showToast(
        "Link disalin ke clipboard",
        `Link ${product.name} telah disalin dan siap dibagikan`,
        "success"
      );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Katalog Produk</h1>
        <p className="text-[var(--dark-400)]">
          Lihat dan pesan produk untuk Anda atau pelanggan Anda.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sm:items-center">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-400)] h-4 w-4" />
          <Input 
            placeholder="Cari produk..." 
            className="pl-10 bg-[var(--dark-800)] border-[var(--dark-700)] text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-[var(--dark-800)] rounded-lg overflow-hidden border border-[var(--dark-700)] hover:border-[var(--dark-600)] transition-colors group"
          >
            <Link href={`/member/produk/${product.slug}`}>
              <a className="block">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.promotion && (
                    <Badge className="absolute top-2 left-2 bg-[var(--accent-green)] text-black text-xs px-1.5 py-0.5">
                      Promo
                    </Badge>
                  )}
                  {product.stock < 100 && (
                    <Badge className="absolute top-2 right-2 bg-yellow-500/90 text-white text-xs px-1.5 py-0.5">
                      Stok Terbatas
                    </Badge>
                  )}
                </div>
              </a>
            </Link>
            <div className="p-3 sm:p-4">
              <Link href={`/member/produk/${product.slug}`}>
                <a>
                  <h3 className="text-white font-medium text-sm sm:text-base truncate">{product.name}</h3>
                </a>
              </Link>
              <div className="flex flex-col mt-2">
                <div className="flex justify-between items-center">
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Rp{product.price.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--dark-400)]">/{product.unit.replace('Per ', '')}</p>
                </div>
                <div className="mt-1.5 self-start">
                  <p className="text-xs text-black bg-[var(--accent-green)] px-2 py-1 rounded-md">
                    Komisi: Rp{product.commission.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-[var(--dark-400)]">
                    Stok: {product.stock}
                  </p>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0 border-[var(--dark-600)] text-[var(--dark-400)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)] hover:bg-transparent"
                      onClick={() => handleShareProduct(product)}
                      title="Bagikan produk"
                    >
                      <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0 border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)]/10"
                      onClick={() => handleAddToCart(product.id)}
                      title="Tambahkan ke keranjang"
                    >
                      <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}