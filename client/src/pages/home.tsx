import { Container } from "@/components/ui/container";
import { ImageSlider } from "@/components/ui/image-slider";
import { Link } from "wouter";
import { Sparkles, ShoppingBag, Star, Award, ArrowRight } from "lucide-react";

// Produk data
const products = [
  {
    id: 1,
    name: "Drajat Karunia",
    slug: "dk-drajat-karunia",
    description: "Rokok premium berkualitas tinggi dengan cita rasa khas yang kaya dan aroma yang lembut.",
    price: 26000,
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    badgeText: "Terlaris",
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: 2,
    name: "VBPRO Nusantara",
    slug: "vb-pro-nusantara",
    description: "Pengalaman merokok yang unik dengan perpaduan tembakau pilihan dan rempah nusantara.",
    price: 26000,
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    rating: 4.8,
    reviewCount: 128
  },
  {
    id: 3,
    name: "VBPRO Red",
    slug: "vb-pro-red",
    description: "Rokok dengan karakter kuat dan mantap, cocok untuk yang menyukai sensasi lebih tegas.",
    price: 26000,
    image: "/assets/images/products/vb-pro-red.jpg",
    rating: 4.7,
    reviewCount: 98
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
    reviewCount: 86
  }
];

// Banner images
const bannerImages = [
  "/assets/images/slider/slider1.jpg",
  "/assets/images/slider/slider2.jpg",
  "/assets/images/slider/slider3.jpg"
];

// Keunggulan produk
const productFeatures = [
  {
    icon: <Sparkles className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Kualitas Premium",
    description: "Tembakau pilihan terbaik dan proses produksi yang terjaga kualitasnya"
  },
  {
    icon: <Star className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Cita Rasa Khas",
    description: "Racikan unik yang memberikan pengalaman merokok yang berbeda"
  },
  {
    icon: <Award className="w-6 h-6 text-[var(--accent-green)]" />,
    title: "Berkah Tersembunyi",
    description: "Setiap pembelian berkontribusi pada pemberdayaan ekonomi pesantren"
  }
];

export default function Home() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Banner with Call-to-Action */}
          <div className="mb-12">
            <div className="relative rounded-xl overflow-hidden">
              <ImageSlider 
                images={bannerImages} 
                className="h-[400px] lg:h-[500px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-900)] via-[var(--dark-900)]/70 to-transparent flex items-center pointer-events-none">
                <div className="max-w-xl px-6 md:px-12">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 text-white">
                    Produk <span className="text-[var(--accent-green)]">Pilihan Terbaik</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--light-200)] mb-8">
                    Berkualitas premium dengan cita rasa yang khas dan berkontribusi pada pemberdayaan ekonomi umat
                  </p>
                  <div className="flex flex-wrap gap-4 pointer-events-auto">
                    <Link href="/products">
                      <div className="px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 inline-flex items-center cursor-pointer">
                        Lihat Semua Produk
                        <ArrowRight className="ml-2 w-4 h-4" />
                </div>
                    </Link>
                    <Link href="/program">
                      <div className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white rounded-full text-base font-medium transition-all cursor-pointer">
                        Program Kemitraan
              </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Highlights */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light">Produk Unggulan</h2>
              <Link href="/products">
                <div className="text-[var(--accent-green)] hover:underline inline-flex items-center cursor-pointer">
                  Lihat Semua <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
              </Link>
                  </div>
                  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
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
          </div>
          
          {/* Keunggulan Produk */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">Keunggulan Produk Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-[var(--dark-800)] p-6 rounded-xl border border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-all transform hover:scale-[1.02]"
                >
                  <div className="p-3 bg-[var(--dark-900)] rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-[var(--dark-400)]">{feature.description}</p>
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Bergabunglah sebagai Mitra Berkah Abadi</h2>
              <p className="text-[var(--light-200)] mb-6">
                Dapatkan keuntungan dan donasi otomatis untuk setiap transaksi. Menjadi bagian dari pergerakan 
                ekonomi umat yang bermanfaat dunia dan akhirat.
              </p>
              <Link href="/program">
                <div className="inline-flex items-center px-6 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-base font-medium transition-all transform hover:scale-105 cursor-pointer">
                  Pelajari Program Kemitraan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
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
