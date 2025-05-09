import { Container } from "@/components/ui/container";
import { Link } from "wouter";
import { useState } from "react";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Data produk
const products = [
  {
    id: 1,
    name: "VBPRO Nusantara",
    slug: "vb-pro-nusantara",
    description: "Pengalaman merokok herbal dengan perpaduan tembakau pilihan dan rempah nusantara untuk kesehatan yang lebih baik.",
    price: 26000,
    unit: "Pack",
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    commission: 26000,
    isFeatured: true,
    isNew: true,
    stock: 150
  },
  {
    id: 2,
    name: "DK - Drajat Karunia",
    slug: "dk-drajat-karunia",
    description: "Rokok herbal dengan cita rasa tembakau premium dan aroma yang khas.",
    price: 26000,
    unit: "Pack",
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    commission: 26000,
    isFeatured: false,
    isNew: false,
    stock: 120
  },
  {
    id: 3,
    name: "Pribumi Espresso",
    slug: "pribumi-espresso",
    description: "Rokok kretek dengan aroma kopi espresso yang khas untuk pengalaman merokok yang berbeda.",
    price: 14000,
    unit: "Pack",
    image: "/assets/images/products/pribumi-espresso.jpg",
    commission: 8000,
    isFeatured: false,
    isNew: true,
    stock: 100
  },
  {
    id: 4,
    name: "Pribumi Anggur",
    slug: "pribumi-anggur",
    description: "Rokok kretek dengan aroma anggur yang menyegarkan untuk sensasi berbeda.",
    price: 14000,
    unit: "Pack",
    image: "/assets/images/products/pribumi-anggur.jpg",
    commission: 8000,
    isFeatured: false,
    isNew: false,
    stock: 100
  },
  {
    id: 5,
    name: "VB Pro Red",
    slug: "vb-pro-red",
    description: "Varian VB Pro dengan sensasi rokok kretek yang lebih kuat namun tetap berbahan herbal.",
    price: 14000,
    unit: "Pack",
    image: "/assets/images/products/vb-pro-red.jpg",
    commission: 4000,
    isFeatured: false,
    isNew: false,
    stock: 100
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter produk berdasarkan pencarian
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Featured product (VB Pro Nusantara)
  const featuredProduct = products.find(product => product.isFeatured);

  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-semibold text-white mb-4 text-center">Katalog Produk</h1>
            <p className="text-[var(--dark-400)] max-w-2xl text-center mx-auto mb-8">
              Temukan berbagai produk berkualitas dari Berkah Abadi. Dari rokok herbal premium hingga produk kretek pilihan.
            </p>
            
            {/* Search */}
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-400)] h-4 w-4" />
                <Input 
                  placeholder="Cari produk..." 
                  className="pl-10 bg-[var(--dark-800)] border-[var(--dark-700)] text-white w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Featured Product - VB Pro Nusantara */}
          {featuredProduct && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[var(--dark-900)] to-[var(--dark-800)] rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit bg-[var(--accent-green)] text-black mb-4">Produk Unggulan</Badge>
                    <h2 className="text-3xl font-semibold text-white mb-3">{featuredProduct.name}</h2>
                    <p className="text-[var(--light-300)] mb-6">{featuredProduct.description}</p>
                    <div className="flex items-baseline mb-6">
                      <span className="text-2xl font-bold text-[var(--accent-green)]">Rp{featuredProduct.price.toLocaleString()}</span>
                      <span className="text-[var(--dark-400)] ml-2 text-sm">/{featuredProduct.unit}</span>
                    </div>
                    <Link href={`/products/${featuredProduct.slug}`}>
                      <div className="inline-flex items-center px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 cursor-pointer">
                        Lihat Detail
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={featuredProduct.image} 
                      alt={featuredProduct.name}
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-900)] to-transparent md:bg-gradient-to-l opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Semua Produk</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-[var(--dark-800)] rounded-lg overflow-hidden border border-[var(--dark-700)] hover:border-[var(--dark-600)] transition-colors group"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-1.5 py-0.5">
                          Baru
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium text-lg mb-1">{product.name}</h3>
                      <p className="text-[var(--dark-400)] text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-baseline">
                          <span className="text-lg font-semibold text-white">Rp{product.price.toLocaleString()}</span>
                          <span className="text-xs text-[var(--dark-400)] ml-1">/{product.unit}</span>
                        </div>
                        <div className="w-9 h-9 bg-[var(--dark-900)] rounded-full flex items-center justify-center transition-colors group-hover:bg-[var(--accent-green)]">
                          <ShoppingBag className="w-4 h-4 text-[var(--accent-green)] group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mb-16">
            <div className="bg-[var(--dark-800)] p-8 rounded-xl text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Tertarik Menjadi Mitra?</h2>
              <p className="text-[var(--light-300)] mb-6 max-w-2xl mx-auto">
                Dapatkan komisi menarik untuk setiap penjualan produk. Bergabunglah dengan ratusan mitra Berkah Abadi yang telah sukses.
              </p>
              <Link href="/affiliasi">
                <div className="inline-flex items-center px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 cursor-pointer">
                  Menjadi Mitra
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
} 