import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Share2, ArrowLeft, Heart, AlertCircle, Truck, Shield, Check, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RegistrationModal } from "@/components/registration-modal";

// Placeholder product data (will match with the member section)
const productData = {
  id: 1,
  name: "VBPRO Nusantara",
  slug: "vb-pro-nusantara",
  description: "Pengalaman merokok herbal dengan perpaduan tembakau pilihan dan rempah nusantara untuk kesehatan yang lebih baik. Kombinasi 13 rempah dan bahan herbal tradisional khas nusantara yang memberikan sensasi merokok berbeda. Nikmat, sehat, dan berkah.",
  fullDescription: `VB Pro Nusantara adalah rokok herbal premium yang dirancang untuk memberikan pengalaman merokok yang lebih sehat. Dengan kombinasi 13 rempah dan bahan herbal pilihan khas Nusantara, VB Pro Nusantara tidak hanya memberikan kenikmatan dalam merokok, tetapi juga berbagai manfaat kesehatan.

Bahan herbal berkualitas tinggi seperti ginseng, kayu manis, keningar, daun salam, daun pandan, kapulaga, mesoyi, kelambet, bunga lawang, jintan hitam, kencur, jahe merah, dan madu dipilih dengan teliti untuk memastikan sensasi yang unik dan bermanfaat.

Keunggulan VB Pro Nusantara:
• 100% Bahan Herbal
• Kandungan nikotin rendah
• Tidak meninggalkan bau menyengat
• Membantu meredakan batuk dan iritasi
• Rasa dan aroma rempah yang menyegarkan`,
  price: 26000,
  pricePerSlop: 224000,
  unit: "Pack",
  slopUnit: "Slop",
  quantity: 1,
  maxQuantity: 10,
  images: [
    "/assets/images/products/vb-pro-nusantara.jpg",
    "/assets/images/slider/vbprotrans.png",
  ],
  rating: 4.8,
  reviewCount: 128,
  stock: 150,
  commission: 26000,
  ingredients: [
    { name: "Ginseng", benefit: "Meningkatkan energi dan daya tahan tubuh" },
    { name: "Kayu Manis", benefit: "Memiliki sifat anti-inflamasi dan antioksidan" },
    { name: "Keningar", benefit: "Membantu meredakan batuk dan masalah pernapasan" },
    { name: "Daun Salam", benefit: "Kaya antioksidan dan menyegarkan pernapasan" },
    { name: "Daun Pandan", benefit: "Memberikan aroma yang menyegarkan" },
    { name: "Kapulaga", benefit: "Membantu pencernaan dan pernapasan" },
    { name: "Mesoyi", benefit: "Memiliki efek menghangatkan" },
    { name: "Kelambet", benefit: "Memberikan aroma khas" },
    { name: "Bunga Lawang", benefit: "Membantu permasalahan pernapasan" },
    { name: "Jintan Hitam", benefit: "Kaya antioksidan dan menyehatkan" },
    { name: "Kencur", benefit: "Memiliki sifat anti-inflamasi" },
    { name: "Jahe Merah", benefit: "Menghangatkan dan menyehatkan tenggorokan" },
    { name: "Madu", benefit: "Memberikan rasa manis alami dan bersifat antibakteri" },
  ]
};

export default function ProductDetail() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const params = useParams();
  const { slug } = params;

  // Handle registration modal
  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };
  
  // Handle quantity change
  const increaseQuantity = () => {
    if (quantity < productData.maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  // Handle share product
  const handleShareProduct = () => {
    const productUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: productData.name,
        text: `Lihat produk ${productData.name} - Rokok herbal premium dengan khasiat rempah Nusantara`,
        url: productUrl,
      })
      .catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      navigator.clipboard.writeText(productUrl);
      toast({
        title: "Link disalin",
        description: "Link produk telah disalin ke clipboard",
      });
    }
  };

  // Handle add to cart (for guests, prompts registration)
  const handleAddToCart = () => {
    handleOpenRegistrationModal();
  };

  // Set title on page load
  useEffect(() => {
    document.title = `${productData.name} - Berkah Abadi`;
  }, []);

  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          <div className="mb-4">
            <Link href="/products" className="inline-flex items-center text-[var(--light-200)] hover:text-[var(--accent-green)] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Kembali ke Katalog
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Images */}
            <div>
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden mb-4 h-80 md:h-96 flex items-center justify-center">
                <img 
                  src={productData.images[activeImage]} 
                  alt={productData.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              <div className="flex space-x-3">
                {productData.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`w-20 h-20 bg-[var(--dark-800)] rounded-md overflow-hidden cursor-pointer border-2 ${
                      activeImage === index ? "border-[var(--accent-green)]" : "border-transparent"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${productData.name} view ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">{productData.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 text-base font-medium">{productData.rating}</span>
                </div>
                <span className="text-[var(--dark-400)] text-sm ml-2">({productData.reviewCount} ulasan)</span>
                
                <button 
                  onClick={handleShareProduct}
                  className="ml-auto flex items-center text-[var(--light-300)] hover:text-[var(--accent-green)] transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  <span className="text-sm">Bagikan</span>
                </button>
              </div>
              
              <div className="bg-[var(--dark-800)] p-4 rounded-lg mb-6 border border-[var(--dark-700)]">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-sm text-[var(--dark-400)]">Harga per pack</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-[var(--accent-green)]">Rp{productData.price.toLocaleString()}</span>
                      <span className="text-[var(--dark-400)] ml-2 text-sm">/{productData.unit}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-[var(--dark-400)]">Harga per slop</span>
                    <div>
                      <span className="text-xl font-semibold text-white">Rp{productData.pricePerSlop.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-[var(--accent-green)] mr-2" />
                    <span className="text-sm text-[var(--light-300)]">Stok tersedia ({productData.stock})</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Leaf className="w-4 h-4 text-[var(--accent-green)] mr-2" />
                    <span className="text-sm text-[var(--light-300)]">13 bahan herbal premium</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-[var(--light-300)] mb-4">{productData.description}</p>
                
                <div className="bg-[var(--dark-800)]/50 p-4 rounded-lg border border-[var(--dark-700)] mb-4">
                  <div className="flex items-start mb-2">
                    <AlertCircle className="w-5 h-5 text-[var(--accent-green)] mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--light-300)]">
                      Daftar sebagai mitra untuk mendapatkan komisi sebesar <span className="text-[var(--accent-green)] font-semibold">Rp{productData.commission.toLocaleString()}</span> dari setiap penjualan produk ini.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  <div className="text-[var(--dark-400)]">Quantity</div>
                  <div className="flex items-center">
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded bg-[var(--dark-800)] text-white border border-[var(--dark-700)] hover:bg-[var(--dark-700)]"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 h-8 text-center bg-[var(--dark-800)] border-y border-[var(--dark-700)] text-white mx-px"
                      value={quantity}
                      min="1"
                      max={productData.maxQuantity}
                      readOnly
                    />
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded bg-[var(--dark-800)] text-white border border-[var(--dark-700)] hover:bg-[var(--dark-700)]"
                      onClick={increaseQuantity}
                      disabled={quantity >= productData.maxQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-white h-12 font-medium flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Beli Sekarang
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)]/10 h-12 font-medium"
                    onClick={handleOpenRegistrationModal}
                  >
                    Jadi Mitra
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <div className="flex items-center text-[var(--light-300)]">
                  <Truck className="w-5 h-5 mr-3 text-[var(--accent-green)]" />
                  <span>Pengiriman ke seluruh Indonesia</span>
                </div>
                <div className="flex items-center text-[var(--light-300)]">
                  <Shield className="w-5 h-5 mr-3 text-[var(--accent-green)]" />
                  <span>Produk asli bergaransi</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Description and Ingredients */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Informasi Produk</h2>
            
            <div className="bg-[var(--dark-800)] rounded-lg p-6 border border-[var(--dark-700)] mb-8">
              <h3 className="text-xl font-medium text-white mb-4">Deskripsi</h3>
              <div className="text-[var(--light-300)] whitespace-pre-line">
                {productData.fullDescription}
              </div>
            </div>
            
            <div className="bg-[var(--dark-800)] rounded-lg p-6 border border-[var(--dark-700)]">
              <h3 className="text-xl font-medium text-white mb-4">Kandungan Herbal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {productData.ingredients.map((ingredient, index) => (
                  <div 
                    key={index}
                    className="bg-[var(--dark-900)] p-4 rounded-lg border border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-all"
                  >
                    <div className="flex items-start">
                      <div className="p-2 bg-[var(--accent-green)]/10 rounded-full mr-3 flex-shrink-0">
                        <Leaf className="w-4 h-4 text-[var(--accent-green)]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-white mb-1">{ingredient.name}</h3>
                        <p className="text-[var(--dark-400)] text-sm">{ingredient.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={handleCloseRegistrationModal} 
      />
    </div>
  );
} 