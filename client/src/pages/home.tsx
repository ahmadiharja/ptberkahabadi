import { Container } from "@/components/ui/container";
import { ImageSlider } from "@/components/ui/image-slider";
import { Link } from "wouter";
import { Sparkles, ShoppingBag, Star, Award, ArrowRight, CheckCircle, Shield, Flame, Leaf, Heart, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { RegistrationModal } from "@/components/registration-modal";

// VB Pro Nusantara product
const vbProNusantara = {
    id: 2,
    name: "VBPRO Nusantara",
    slug: "vb-pro-nusantara",
  description: "Pengalaman merokok herbal dengan perpaduan tembakau pilihan dan rempah nusantara untuk kesehatan yang lebih baik.",
    price: 26000,
    image: "/assets/images/products/vb-pro-nusantara.jpg",
  badgeText: "Herbal Premium",
    rating: 4.8,
    reviewCount: 128
};

// Banner images
const bannerImages = [
  "/assets/images/slider/slider1.jpg",
  "/assets/images/slider/slider2.jpg",
  "/assets/images/slider/slider3.jpg"
];

// Herbal ingredients in VB Pro Nusantara - Ginseng placed first as the most important
const herbalIngredients = [
  // Ginseng is featured as the most prominent ingredient
  { 
    name: "Ginseng", 
    benefit: "Meningkatkan energi dan daya tahan tubuh, menjadi bahan utama yang memberikan khasiat paling optimal", 
    image: "/assets/images/kandungan/ginseng.jpg", // Placeholder - needs to be added
    isPrimary: true
  },
  { name: "Kayu Manis", benefit: "Memiliki sifat anti-inflamasi dan antioksidan", image: "/assets/images/kandungan/kayumanis.jpg" },
  { name: "Keningar", benefit: "Membantu meredakan batuk dan masalah pernapasan", image: "/assets/images/kandungan/keningar.jpg" },
  { name: "Daun Salam", benefit: "Kaya antioksidan dan menyegarkan pernapasan", image: "/assets/images/kandungan/daunsalam.jpg" },
  { name: "Daun Pandan", benefit: "Memberikan aroma yang menyegarkan", image: "/assets/images/kandungan/daunpandan.jpg" },
  { name: "Kapulaga", benefit: "Membantu pencernaan dan pernapasan", image: "/assets/images/kandungan/kapulaga.jpg" },
  { name: "Mesoyi", benefit: "Memiliki efek menghangatkan", image: "/assets/images/kandungan/mesoyi.jpg" },
  { name: "Kelambet", benefit: "Memberikan aroma khas", image: "/assets/images/kandungan/kelambet.jpg" },
  { name: "Bunga Lawang", benefit: "Membantu permasalahan pernapasan", image: "/assets/images/kandungan/bungalawang.jpg" },
  { name: "Jintan Hitam", benefit: "Kaya antioksidan dan menyehatkan", image: "/assets/images/kandungan/jintanhitam.jpg" },
  { name: "Kencur", benefit: "Memiliki sifat anti-inflamasi", image: "/assets/images/kandungan/kencur.jpg" },
  { name: "Jahe Merah", benefit: "Menghangatkan dan menyehatkan tenggorokan", image: "/assets/images/kandungan/jahemerah.jpg" },
  { name: "Madu", benefit: "Memberikan rasa manis alami dan bersifat antibakteri", image: "/assets/images/kandungan/madu.jpg" }
];

// Keunggulan VB Pro Nusantara
const vbProFeatures = [
  {
    icon: <Leaf className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "100% Bahan Herbal",
    description: "Kombinasi 13 rempah dan bahan herbal pilihan khas Nusantara yang menyehatkan dan menyegarkan"
  },
  {
    icon: <Heart className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Lebih Sehat",
    description: "Kandungan nikotin rendah dan ditambah bahan-bahan yang bermanfaat bagi kesehatan pernapasan"
  },
  {
    icon: <Flame className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Rasa Khas Premium",
    description: "Cita rasa unik dengan aroma rempah yang lembut, tidak menyengat, dan tidak meninggalkan bau"
  },
  {
    icon: <Shield className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Berkah & Manfaat",
    description: "Setiap pembelian berkontribusi pada pemberdayaan ekonomi pesantren dan masyarakat sekitar"
  }
];

// Testimonials 
const testimonials = [
  {
    quote: "VB Pro Nusantara rasanya sangat enak dan aromanya lembut. Saya dulunya perokok berat, tapi sejak beralih ke VB Pro, tenggorokan saya terasa lebih nyaman dan pernapasan lebih ringan berkat kandungan herbalnya.",
    name: "Ahmad Fauzi",
    role: "Pengusaha",
    avatar: "/assets/images/testimonials/person1.jpg"
  },
  {
    quote: "Istri saya tidak lagi mengeluh dengan bau rokok sejak saya beralih ke VB Pro Nusantara. Aromanya harum dan tidak menyengat. Plus, senang bisa ikut berkontribusi untuk ekonomi pesantren.",
    name: "Budi Santoso",
    role: "Guru",
    avatar: "/assets/images/testimonials/person2.jpg"
  },
  {
    quote: "Sebagai dokter, saya merekomendasikan VB Pro Nusantara bagi mereka yang sulit berhenti merokok. Kandungan herbalnya jauh lebih baik dibanding rokok biasa, dan membantu mengurangi efek negatif dari merokok.",
    name: "dr. Hendra Wijaya",
    role: "Dokter Umum",
    avatar: "/assets/images/testimonials/person3.jpg"
  }
];

// Why choose VB Pro Nusantara points
const whyChoosePoints = [
  "13 bahan herbal pilihan khas Nusantara",
  "Tidak meninggalkan bau menyengat di pakaian dan ruangan",
  "Kandungan nikotin rendah, lebih sehat bagi pernapasan",
  "Membantu meredakan batuk dan iritasi tenggorokan",
  "Aroma rempah yang menyegarkan dan nyaman",
  "Berkontribusi pada ekonomi umat dan pesantren"
];

export default function Home() {
  // Add state for registration modal
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  // Add global floating animation style on component mount
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floating {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-floating {
        animation: floating 4s ease-in-out infinite;
      }
    `;
    // Append to document head
    document.head.appendChild(style);
    
    // Clean up on unmount
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section for VB Pro Nusantara */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden">
              <div className="h-[500px] lg:h-[600px] bg-gradient-to-r from-[var(--dark-900)] to-[var(--dark-800)] relative">
                {/* Background gradient with overlay pattern */}
                <div className="absolute inset-0 opacity-20" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px'
                  }}
                ></div>
                
                {/* Main branding layout */}
                <div className="flex flex-col lg:flex-row items-center h-full max-w-7xl mx-auto px-6">
                  {/* Text content - left side on desktop, top on mobile */}
                  <div className="lg:w-1/2 z-10 text-center lg:text-left pt-10 lg:pt-0">
                    <div className="inline-block px-4 py-1 bg-[var(--accent-green)]/20 rounded-full text-[var(--accent-green)] font-medium text-sm mb-4">
                      Rokok Herbal Premium
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-white">
                      <span className="text-[var(--accent-green)]">VB Pro</span> Nusantara
                  </h1>
                    <p className="text-xl md:text-2xl text-[var(--light-200)] mb-6 font-light">
                      Pengalaman merokok <span className="italic">herbal premium</span> dengan khasiat rempah Nusantara
                    </p>
                    <p className="text-lg text-[var(--light-300)] mb-8">
                      Kombinasi 13 rempah dan bahan herbal tradisional yang memberikan sensasi merokok berbeda. Nikmat, sehat, dan berkah.
                  </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <Link href="/products/vb-pro-nusantara">
                        <div className="px-8 py-4 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 inline-flex items-center cursor-pointer">
                          Beli Sekarang
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </Link>
                      <button
                        onClick={handleOpenRegistrationModal}
                        className="px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white rounded-full text-base font-medium transition-all cursor-pointer"
                      >
                        Jadi Mitra
                      </button>
                    </div>
                  </div>
                  
                  {/* Featured PNG image - right side on desktop, bottom on mobile */}
                  <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src="/assets/images/slider/vbprotrans.png" 
                        alt="VB Pro Nusantara" 
                        className="max-h-80 lg:max-h-[500px] object-contain relative z-10 animate-floating"
                      />
                      {/* Add glow effect behind the product */}
                      <div className="absolute w-64 h-64 rounded-full bg-[var(--accent-green)]/20 blur-3xl"></div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kandungan Herbal */}
          <div className="mb-16 bg-[var(--dark-800)] p-10 rounded-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-light mb-3">Kandungan <span className="text-[var(--accent-green)]">Herbal</span> Premium</h2>
              <p className="text-[var(--dark-400)] max-w-2xl mx-auto">
                VB Pro Nusantara diperkaya dengan 13 jenis rempah dan bahan herbal pilihan yang memberikan manfaat kesehatan
              </p>
            </div>
            
            {/* Featured Ingredient - Ginseng */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-[var(--dark-900)] to-[var(--dark-800)] rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden flex items-center justify-center p-4">
                    {/* Replace placeholder with actual ginseng PNG image */}
                    <img 
                      src="/assets/images/slider/ginsengvb.png" 
                      alt="Ginseng" 
                      className="max-h-full object-contain relative z-10"
                    />
                    {/* Add subtle glow effect behind the ginseng */}
                    <div className="absolute w-48 h-48 rounded-full bg-[var(--accent-green)]/10 blur-2xl"></div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="inline-block px-3 py-1 bg-[var(--accent-green)]/20 rounded-full text-[var(--accent-green)] font-medium text-sm mb-3">
                      Bahan Utama
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Ginseng</h3>
                    <p className="text-[var(--light-200)] mb-4">
                      Dikenal sebagai "akar kehidupan", ginseng merupakan bahan herbal premium yang telah digunakan selama ribuan tahun untuk meningkatkan energi dan daya tahan tubuh. Ginseng menjadi komponen utama dalam VB Pro Nusantara yang memberikan khasiat paling optimal.
                    </p>
                    <div className="flex items-center">
                      <div className="p-2 bg-[var(--accent-green)]/10 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-[var(--accent-green)]" />
                      </div>
                      <p className="text-[var(--light-300)]">Meningkatkan sirkulasi darah dan sistem kekebalan tubuh</p>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
                  
            {/* Other Ingredients Grid - 4 columns for desktop, mobile friendly cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {herbalIngredients.filter(ingredient => !ingredient.isPrimary).map((ingredient, index) => (
                <div 
                  key={index}
                  className="bg-[var(--dark-900)] rounded-lg border border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-all overflow-hidden"
                >
                  {/* Desktop view - Image on top, text below */}
                  <div className="hidden sm:block">
                    <div className="h-40 relative overflow-hidden">
                    <img 
                        src={ingredient.image} 
                        alt={ingredient.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-medium text-white mb-1">{ingredient.name}</h3>
                      <p className="text-[var(--dark-400)] text-sm">{ingredient.benefit}</p>
                      </div>
                  </div>
                  
                  {/* Mobile view - App-like card with circular image on right */}
                  <div className="flex items-center sm:hidden p-3">
                    <div className="flex-1 pr-3">
                      <h3 className="text-base font-medium text-white mb-1">{ingredient.name}</h3>
                      <p className="text-[var(--dark-400)] text-xs">{ingredient.benefit}</p>
                    </div>
                    <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[var(--dark-700)]">
                      <img 
                        src={ingredient.image} 
                        alt={ingredient.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-3">Keunggulan <span className="text-[var(--accent-green)]">VB Pro</span> Nusantara</h2>
              <p className="text-[var(--dark-400)] max-w-2xl mx-auto">
                Dirancang dengan standardisasi tinggi untuk memberikan pengalaman merokok yang lebih sehat
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vbProFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-[var(--dark-800)] p-6 rounded-xl border border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-all transform hover:scale-[1.02] flex items-start"
                >
                  <div className="p-3 bg-[var(--dark-900)] rounded-lg mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-[var(--dark-400)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Why Choose VB Pro Section */}
          <div className="mb-16 bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] p-10 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">Mengapa Memilih <span className="text-[var(--accent-green)]">VB Pro</span> Nusantara?</h2>
                <p className="text-[var(--dark-400)] mb-8">
                  VB Pro Nusantara bukan sekadar rokok biasa. Ini adalah solusi untuk Anda yang menginginkan pengalaman merokok yang lebih sehat dengan manfaat rempah-rempah tradisional.
                </p>
                
                <div className="space-y-4">
                  {whyChoosePoints.map((point, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[var(--accent-green)] mr-3 flex-shrink-0" />
                      <p className="text-[var(--light-200)]">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/products/vb-pro-nusantara">
                    <div className="inline-flex items-center px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 cursor-pointer">
                      Coba VB Pro Nusantara Sekarang
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[var(--dark-900)] rounded-lg p-4 flex flex-col items-center justify-center text-center border border-[var(--dark-700)]">
                  <Leaf className="w-8 h-8 text-[var(--accent-green)] mb-3" />
                  <h3 className="text-lg font-medium text-white mb-1">100% Herbal</h3>
                  <p className="text-[var(--dark-400)] text-sm">Bahan alami pilihan</p>
                </div>
                
                <div className="aspect-square bg-[var(--dark-900)] rounded-lg p-4 flex flex-col items-center justify-center text-center border border-[var(--dark-700)]">
                  <ThumbsUp className="w-8 h-8 text-[var(--accent-green)] mb-3" />
                  <h3 className="text-lg font-medium text-white mb-1">Kualitas Premium</h3>
                  <p className="text-[var(--dark-400)] text-sm">Standar produksi tinggi</p>
                </div>
                
                <div className="aspect-square bg-[var(--dark-900)] rounded-lg p-4 flex flex-col items-center justify-center text-center border border-[var(--dark-700)]">
                  <Heart className="w-8 h-8 text-[var(--accent-green)] mb-3" />
                  <h3 className="text-lg font-medium text-white mb-1">Lebih Sehat</h3>
                  <p className="text-[var(--dark-400)] text-sm">Lebih baik bagi tubuh</p>
                </div>
                
                <div className="aspect-square bg-[var(--dark-900)] rounded-lg p-4 flex flex-col items-center justify-center text-center border border-[var(--dark-700)]">
                  <Shield className="w-8 h-8 text-[var(--accent-green)] mb-3" />
                  <h3 className="text-lg font-medium text-white mb-1">Berkah</h3>
                  <p className="text-[var(--dark-400)] text-sm">Mendukung ekonomi umat</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-3">Apa Kata Mereka Tentang <span className="text-[var(--accent-green)]">VB Pro</span> Nusantara</h2>
              <p className="text-[var(--dark-400)] max-w-2xl mx-auto">
                Pengalaman nyata dari para pengguna rokok herbal VB Pro Nusantara
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-[var(--dark-800)] p-6 rounded-xl border border-[var(--dark-700)] relative"
                >
                  <div className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center bg-[var(--accent-green)] rounded-full text-white">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.33333 16H0V9.6C0 7.68 0.469333 5.92 1.40733 4.32C2.34533 2.69333 3.86667 1.33333 6 0.266667L8.33333 3.2C6.86667 3.86667 5.76 4.69333 5.01333 5.68C4.26667 6.66667 3.86667 7.73333 3.80667 8.88H8.33333V16ZM20 16H11.6667V9.6C11.6667 7.68 12.136 5.92 13.074 4.32C14.012 2.69333 15.5333 1.33333 17.6667 0.266667L20 3.2C18.5333 3.86667 17.4267 4.69333 16.68 5.68C15.9333 6.66667 15.5333 7.73333 15.474 8.88H20V16Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-[var(--light-200)] italic mb-6 mt-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--dark-700)] overflow-hidden mr-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-[var(--dark-400)] text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA untuk Kemitraan */}
          <div className="bg-gradient-to-r from-[var(--dark-900)] to-[var(--dark-800)] p-8 rounded-xl mb-16 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-20">
              <svg
                width="300"
                height="200"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--accent-green)]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M300 50C167.29 50 50 167.29 50 300C50 432.71 167.29 550 300 550C432.71 550 550 432.71 550 300C550 167.29 432.71 50 300 50ZM300 180C233.73 180 180 233.73 180 300C180 366.27 233.73 420 300 420C366.27 420 420 366.27 420 300C420 233.73 366.27 180 300 180Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Jual VB Pro Nusantara dan Dapatkan Keuntungan</h2>
              <p className="text-[var(--light-200)] mb-6">
                Bergabunglah menjadi mitra resmi VB Pro Nusantara dan dapatkan komisi menarik untuk setiap penjualan. Sekaligus berkontribusi dalam program donasi otomatis untuk pesantren.
              </p>
              <button
                onClick={handleOpenRegistrationModal}
                className="inline-flex items-center px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 cursor-pointer"
              >
                Gabung Program Afiliasi
                  <ArrowRight className="ml-2 w-4 h-4" />
              </button>
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
                <img 
                  src="/assets/images/bekarhabadilogo.png" 
                  alt="Berkah Abadi Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="ml-2 text-xl font-semibold">Berkah Abadi</span>
              </a>
            </div>
            <div className="text-[var(--dark-500)] text-sm">
              © {new Date().getFullYear()} Berkah Abadi. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={handleCloseRegistrationModal} 
      />
    </div>
  );
}
