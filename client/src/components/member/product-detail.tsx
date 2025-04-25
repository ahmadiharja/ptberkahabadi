import { useState } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, ShoppingCart, Star, Truck, Box, Heart, Share, Plus, Minus, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Dummy product data - Dalam implementasi nyata, ini akan diambil dari API
const dummyProducts = [
  {
    id: 1,
    name: "VB Pro Nusantara",
    slug: "vb-pro-nusantara",
    description: "Rokok premium berkualitas tinggi dengan tembakau pilihan dan racikan khusus. Memiliki cita rasa yang khas dengan aroma khas nusantara yang memberikan pengalaman merokok yang berbeda dari yang lain.",
    longDescription: "VB Pro Nusantara merupakan produk unggulan kami dengan bahan-bahan berkualitas tinggi yang memberikan pengalaman merokok yang tak terlupakan. Diproduksi dengan standar kualitas tinggi dan kontrol yang ketat untuk memastikan konsistensi rasa dan kualitas. Keunikan produk ini terletak pada perpaduan tembakau pilihan dengan rempah-rempah khas Nusantara yang memberikan aroma dan cita rasa yang khas Indonesia.",
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    images: [
      "/assets/images/products/vb-pro-nusantara.jpg",
      "/assets/images/products/vb-pro-nusantara-2.jpg",
      "/assets/images/products/vb-pro-nusantara-3.jpg"
    ],
    price: 224000,
    unit: "Slop",
    commission: 26000,
    promotion: true,
    stock: 150,
    rating: 4.8,
    reviewCount: 128,
    features: [
      "Tembakau pilihan",
      "Racikan khusus rempah nusantara",
      "Proses produksi higienis",
      "Filter premium"
    ],
    specifications: {
      "Kemasan": "20 batang per bungkus, 10 bungkus per slop",
      "Nikotin": "1.4 mg",
      "Tar": "19 mg",
      "Produksi": "Indonesia"
    }
  },
  {
    id: 2,
    name: "DK - Drajat Karunia",
    slug: "dk-drajat-karunia",
    description: "Rokok premium berkualitas tinggi dengan cita rasa yang kaya dan aroma yang lembut. Memberikan pengalaman merokok yang elegan dan berkelas.",
    longDescription: "DK - Drajat Karunia adalah produk premium kami dengan kualitas terbaik. Dirancang untuk memberikan pengalaman merokok yang mewah dan berkelas. Setiap batang dibuat dengan teliti untuk memastikan kualitas tertinggi. Rasakan kenikmatan tembakau premium dengan sentuhan karakter yang kuat namun tetap lembut.",
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    images: [
      "/assets/images/products/dk-drajat-karunia.jpg",
      "/assets/images/products/dk-drajat-karunia-2.jpg",
      "/assets/images/products/dk-drajat-karunia-3.jpg"
    ],
    price: 224000,
    unit: "Slop",
    commission: 26000,
    promotion: true,
    stock: 120,
    rating: 4.9,
    reviewCount: 142,
    features: [
      "Tembakau pilihan kualitas premium",
      "Aroma khas yang elegan",
      "Filter superior",
      "Desain kemasan mewah"
    ],
    specifications: {
      "Kemasan": "20 batang per bungkus, 10 bungkus per slop",
      "Nikotin": "1.5 mg",
      "Tar": "20 mg",
      "Produksi": "Indonesia"
    }
  }
];

// Fungsi untuk mendapatkan produk berdasarkan slug
const getProductBySlug = (slug: string) => {
  return dummyProducts.find(product => product.slug === slug) || dummyProducts[0];
};

interface ProductDetailProps {
  slug?: string;
}

export function ProductDetail({ slug = "vb-pro-nusantara" }: ProductDetailProps) {
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Produk ditambahkan ke keranjang",
      description: `${quantity} ${product.unit} ${product.name} telah ditambahkan ke keranjang Anda.`,
    });
    
    // Dalam implementasi nyata, di sini akan ada logika untuk menambahkan ke state global cart
    // Misalnya: dispatch(addToCart({ product, quantity }));
  };

  const handleBuyNow = () => {
    // Dalam implementasi nyata, simpan item ke keranjang kemudian navigasi ke halaman checkout
    // Misalnya: dispatch(addToCart({ product, quantity }));
    navigate("/member/checkout");
  };

  // Produk terkait - simulasi rekomendasi produk serupa
  const relatedProducts = dummyProducts.filter(p => p.id !== product.id);

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link href="/member/produk">
        <a className="flex items-center text-[var(--dark-400)] hover:text-white mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Katalog
        </a>
      </Link>

      {/* Product Detail Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden border border-[var(--dark-700)] h-80">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setActiveImageIndex(index)} 
                className={`p-1 rounded overflow-hidden border-2 ${
                  activeImageIndex === index 
                    ? 'border-[var(--accent-green)]' 
                    : 'border-[var(--dark-700)]'
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="h-16 w-16 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            {product.promotion && (
              <Badge className="mb-2 bg-[var(--accent-green)] text-black">Promo</Badge>
            )}
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-white">{product.rating}</span>
              </div>
              <span className="text-[var(--dark-400)]">|</span>
              <span className="text-[var(--dark-400)]">{product.reviewCount} Ulasan</span>
              <span className="text-[var(--dark-400)]">|</span>
              <span className="text-[var(--dark-400)]">Terjual 500+</span>
            </div>
            
            <div className="mb-4">
              <p className="text-3xl font-bold text-white">Rp{product.price.toLocaleString('id-ID')}</p>
              <p className="text-[var(--dark-400)]">Per {product.unit}</p>
            </div>

            <div className="p-3 bg-green-900/20 rounded-md border border-green-800/30 mb-4">
              <p className="text-[var(--accent-green)] font-medium">Komisi: Rp{product.commission.toLocaleString('id-ID')}</p>
            </div>
          </div>

          <div className="border-t border-[var(--dark-700)] pt-4">
            <div className="flex items-center mb-6">
              <p className="text-white mr-4">Kuantitas:</p>
              <div className="flex items-center border border-[var(--dark-600)] rounded-md">
                <button 
                  onClick={handleDecreaseQuantity}
                  className="p-2 text-[var(--dark-400)] hover:text-white disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-1 text-white">{quantity}</span>
                <button 
                  onClick={handleIncreaseQuantity}
                  className="p-2 text-[var(--dark-400)] hover:text-white disabled:opacity-50"
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[var(--dark-400)] ml-4">Stok: {product.stock}</p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)]/10"
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Tambah ke Keranjang
              </Button>
              <Button 
                onClick={handleBuyNow}
                className="flex-1 bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Beli Sekarang
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <button className="flex items-center text-[var(--dark-400)] hover:text-white">
              <Heart className="mr-1.5 h-4 w-4" />
              <span className="text-sm">Favorit</span>
            </button>
            <button className="flex items-center text-[var(--dark-400)] hover:text-white">
              <Share className="mr-1.5 h-4 w-4" />
              <span className="text-sm">Bagikan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mt-8">
        <TabsList className="bg-[var(--dark-800)] border-b border-[var(--dark-700)]">
          <TabsTrigger value="description" className="text-white data-[state=active]:border-b-2 data-[state=active]:border-[var(--accent-green)] data-[state=active]:text-[var(--accent-green)]">
            Deskripsi
          </TabsTrigger>
          <TabsTrigger value="specifications" className="text-white data-[state=active]:border-b-2 data-[state=active]:border-[var(--accent-green)] data-[state=active]:text-[var(--accent-green)]">
            Spesifikasi
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-white data-[state=active]:border-b-2 data-[state=active]:border-[var(--accent-green)] data-[state=active]:text-[var(--accent-green)]">
            Ulasan
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="pt-4">
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] p-6">
            <div className="space-y-4">
              <p className="text-white">{product.longDescription}</p>
              
              <h3 className="text-lg font-medium text-white mt-6">Keunggulan Produk</h3>
              <ul className="list-disc list-inside text-[var(--dark-400)] space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="specifications" className="pt-4">
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] p-6">
            <div className="divide-y divide-[var(--dark-700)]">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="py-3 flex">
                  <span className="w-1/3 text-[var(--dark-400)]">{key}</span>
                  <span className="w-2/3 text-white">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews" className="pt-4">
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] p-6">
            <div className="space-y-6">
              {/* Review Summary */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-center p-4 bg-[var(--dark-900)] rounded-lg">
                    <div className="text-4xl font-bold text-white">{product.rating}</div>
                    <div className="flex justify-center my-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : i < product.rating
                              ? "text-yellow-400 fill-yellow-400/50"
                              : "text-[var(--dark-600)]"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-[var(--dark-400)]">{product.reviewCount} ulasan</div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="space-y-2">
                    {/* 5 stars */}
                    <div className="flex items-center">
                      <div className="w-16 text-xs text-[var(--dark-400)]">5 bintang</div>
                      <div className="flex-1 mx-2 h-2 bg-[var(--dark-900)] rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <div className="w-12 text-right text-xs text-[var(--dark-400)]">70%</div>
                    </div>
                    
                    {/* 4 stars */}
                    <div className="flex items-center">
                      <div className="w-16 text-xs text-[var(--dark-400)]">4 bintang</div>
                      <div className="flex-1 mx-2 h-2 bg-[var(--dark-900)] rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <div className="w-12 text-right text-xs text-[var(--dark-400)]">20%</div>
                    </div>
                    
                    {/* 3 stars */}
                    <div className="flex items-center">
                      <div className="w-16 text-xs text-[var(--dark-400)]">3 bintang</div>
                      <div className="flex-1 mx-2 h-2 bg-[var(--dark-900)] rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '7%' }}></div>
                      </div>
                      <div className="w-12 text-right text-xs text-[var(--dark-400)]">7%</div>
                    </div>
                    
                    {/* 2 stars */}
                    <div className="flex items-center">
                      <div className="w-16 text-xs text-[var(--dark-400)]">2 bintang</div>
                      <div className="flex-1 mx-2 h-2 bg-[var(--dark-900)] rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '2%' }}></div>
                      </div>
                      <div className="w-12 text-right text-xs text-[var(--dark-400)]">2%</div>
                    </div>
                    
                    {/* 1 star */}
                    <div className="flex items-center">
                      <div className="w-16 text-xs text-[var(--dark-400)]">1 bintang</div>
                      <div className="flex-1 mx-2 h-2 bg-[var(--dark-900)] rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
                      </div>
                      <div className="w-12 text-right text-xs text-[var(--dark-400)]">1%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Review Filter */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--dark-700)]">
                <Button variant="outline" className="border-[var(--dark-600)] bg-[var(--dark-900)] text-white text-xs">
                  Semua
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  5 Bintang (89)
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  4 Bintang (26)
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  3 Bintang (9)
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  2 Bintang (3)
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  1 Bintang (1)
                </Button>
                <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)] text-xs">
                  Dengan Foto (14)
                </Button>
              </div>
              
              {/* Reviews List */}
              <div className="space-y-6 pt-4">
                {/* 5 Star Review */}
                <div className="border-b border-[var(--dark-700)] pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--dark-600)] mr-3 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">Ahmad Surya</p>
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[var(--dark-400)]">12 Nov 2023</span>
                  </div>
                  
                  <p className="text-white mb-3">
                    Produk ini luar biasa! Rasanya sangat khas dan berbeda dari produk sejenisnya. Bahan-bahannya terasa premium dan menyajikan pengalaman merokok yang sangat memuaskan. Akan kembali membeli lagi.
                  </p>
                  
                  <div className="flex gap-2 mb-3">
                    <div className="h-20 w-20 rounded bg-[var(--dark-900)] overflow-hidden">
                      <img 
                        src="/assets/images/products/vb-pro-nusantara.jpg" 
                        alt="Review Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-20 w-20 rounded bg-[var(--dark-900)] overflow-hidden">
                      <img 
                        src="/assets/images/products/vb-pro-nusantara-2.jpg" 
                        alt="Review Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-xs text-[var(--dark-400)]">
                    Varian: VB Pro Nusantara (1 Slop) | Pesanan: 2 Slop
                  </div>
                </div>
                
                {/* 4 Star Review */}
                <div className="border-b border-[var(--dark-700)] pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--dark-600)] mr-3 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">Budi Santoso</p>
                        <div className="flex items-center">
                          {Array(4).fill(0).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                          ))}
                          {Array(1).fill(0).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-[var(--dark-600)]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[var(--dark-400)]">8 Nov, 2023</span>
                  </div>
                  
                  <p className="text-white mb-3">
                    Produk yang bagus dengan cita rasa yang khas. Pengiriman cepat dan kemasan aman. Saya beri 4 bintang karena ada sedikit ketidakkonsistenan pada beberapa batang, tapi secara keseluruhan memuaskan.
                  </p>
                  
                  <div className="text-xs text-[var(--dark-400)]">
                    Varian: VB Pro Nusantara (1 Slop) | Pesanan: 1 Slop
                  </div>
                </div>
                
                {/* 3 Star Review */}
                <div className="border-b border-[var(--dark-700)] pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--dark-600)] mr-3 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">Rini Susanti</p>
                        <div className="flex items-center">
                          {Array(3).fill(0).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                          ))}
                          {Array(2).fill(0).map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-[var(--dark-600)]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[var(--dark-400)]">1 Nov, 2023</span>
                  </div>
                  
                  <p className="text-white mb-3">
                    Produknya biasa saja. Tidak buruk tapi tidak istimewa. Pengiriman agak lambat dari yang dijanjikan. Mungkin akan membeli lagi jika ada promo.
                  </p>
                  
                  <div className="text-xs text-[var(--dark-400)]">
                    Varian: VB Pro Nusantara (1 Slop) | Pesanan: 1 Slop
                  </div>
                </div>
                
                {/* Load More Button */}
                <div className="text-center pt-4">
                  <Button 
                    variant="outline" 
                    className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-900)]"
                  >
                    Lihat Lebih Banyak Ulasan
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-xl font-medium text-white mb-4">Produk Serupa</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <Link 
              key={relatedProduct.id} 
              href={`/member/produk/${relatedProduct.slug}`}
            >
              <a className="bg-[var(--dark-800)] rounded-lg overflow-hidden border border-[var(--dark-700)] hover:border-[var(--dark-600)] transition-colors">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {relatedProduct.promotion && (
                    <Badge className="absolute top-2 left-2 bg-[var(--accent-green)] text-black text-xs px-1.5 py-0.5">
                      Promo
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm truncate">{relatedProduct.name}</h3>
                  <p className="text-lg font-semibold text-white mt-1">
                    Rp{relatedProduct.price.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-black bg-[var(--accent-green)] inline-block px-2 py-0.5 rounded-md mt-1">
                    Komisi: Rp{relatedProduct.commission.toLocaleString('id-ID')}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 