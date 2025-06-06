import React from 'react';
import { Container } from "@/components/ui/container";
import { ImageSlider } from "@/components/ui/image-slider";
import { StatsCard } from "@/components/stats-card";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { FAQAccordion } from "@/components/faq-accordion";
import { 
  Users, 
  MapPin, 
  ThumbsUp, 
  CreditCard, 
  Gift, 
  Package, 
  Truck, 
  ClipboardList,
  TrendingUp,
  Clock,
  BarChart3,
  FileText,
  Lightbulb,
  Award,
  Shield,
  Sparkles,
  LayoutGrid
} from "lucide-react";

// Slider images
const sliderImages = [
  "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
];

// Testimonial data
const testimonials = [
  {
    quote: "Drajat Karunia dan VBPRO adalah solusi bagi perokok yang ingin tetap sehat, nyaman, dan tidak mengganggu keluarga. Ini bukan sekadar rokok, tapi gerakan ekonomi umat yang membawa manfaat dunia dan akhirat.",
    author: "KH. Abdullah",
    role: "Tokoh Ulama & Pengasuh Pesantren"
  },
  {
    quote: "Saya merekomendasikan Drajat Karunia bagi perokok yang ingin menikmati rokok berkualitas tanpa rasa bersalah. Dengan setiap batangnya, kita ikut membantu umat dan pesantren berkembang.",
    author: "Ustadz H. Rohmat",
    role: "Dai Nasional"
  },
  {
    quote: "Biasanya kalau suami merokok, saya selalu menghindar karena baunya bikin pusing. Tapi sejak dia pakai VBPRO, saya tidak merasa terganggu lagi. Baunya lebih lembut dan tidak menyengat seperti rokok biasa.",
    author: "Bu Rina, 35 tahun",
    role: "Ibu Rumah Tangga"
  },
  {
    quote: "Saya sudah mencoba berbagai merek rokok, tapi Drajat Karunia rasanya beda. Hisapannya lebih lembut, tidak bikin batuk, dan tidak ada sensasi serik di tenggorokan.",
    author: "Faisal, 40 tahun",
    role: "Karyawan Swasta"
  },
  {
    quote: "Drajat Karunia bukan sekadar rokok biasa. Setiap batang yang saya beli ikut membantu pemberdayaan santri dan pesantren. Ini bukan hanya soal menikmati rokok berkualitas, tapi juga ikut berkontribusi pada ekonomi umat. Rokok yang nikmat sekaligus berpahala!",
    author: "H. Ridwan, 52 tahun",
    role: "Pengusaha Muslim"
  }
];

// FAQ items
const faqItems = [
  {
    id: "item-1",
    question: "Apa itu Berkah Abadi?",
    answer: "Berkah Abadi adalah perusahaan distribusi produk yang beroperasi dengan sistem afilias. Kami fokus pada penyediaan produk berkualitas tinggi dan peluang bisnis yang adil dan transparan bagi seluruh mitra."
  },
  {
    id: "item-2",
    question: "Bagaimana cara bergabung dengan Berkah Abadi?",
    answer: "Untuk bergabung, Anda dapat mendaftar melalui website kami atau menghubungi salah satu mitra resmi kami. Proses pendaftaran mudah dan cepat, dan Anda akan mendapatkan akses ke sistem bisnis dan produk-produk kami."
  },
  {
    id: "item-3",
    question: "Apakah pendaftaran Berkah Abadi berbayar?",
    answer: "Tidak, pendaftaran tidak dipungut biaya. Untuk mengaktifkan keanggotaan dan mendapatkan akses penuh ke sistem bisnis, Anda perlu melakukan pembelian perdana satu slop rokok Berkah Abadi Nusantara atau Rokok DK."
  },
  {
    id: "item-4",
    question: "Apakah Modal untuk bergabung dengan Berkah Abadi mahal?",
    answer: "Tidak perlu modal besar! Daftar mudah, bisa langsung menghasilkan. Bahkan, Anda bisa gunakan komisi untuk beli produk. Kami mendukung mitra agar bisa berjualan tanpa modal!"
  },
  {
    id: "item-5",
    question: "Berapa komisi yang bisa saya dapatkan?",
    answer: "Setiap transaksi referral akan memberikan Anda komisi sebesar Rp26.000. Semakin banyak referral, semakin besar penghasilan Anda. Program afiliasi kami tidak memiliki batasan penghasilan."
  },
  {
    id: "item-6",
    question: "Bagaimana sistem donasi otomatis bekerja?",
    answer: "Dari setiap transaksi, Rp8.000 akan otomatis disalurkan ke yayasan pilihan Anda. Anda juga dapat mengatur persentase komisi yang ingin dialokasikan untuk donasi tambahan."
  }
];

export default function Affiliasi() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Program Affiliasi Berkah Abadi</h1>
            <p className="text-xl italic text-[var(--accent-green)] mb-6">Berkah Sehat Nikmat Dunia Akhirat</p>
            <p className="text-xl text-[var(--dark-400)] max-w-3xl mx-auto">
              Bergabunglah dengan kami dan rasakan perubahan. Nikmati keuntungan finansial sambil berkontribusi dalam kebaikan untuk masyarakat dan pesantren.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <StatsCard 
              value="5,000+" 
              label="Mitra Aktif" 
              icon={<Users className="w-full h-full" />}
            />
            <StatsCard 
              value="25+" 
              label="Kota di Indonesia" 
              icon={<MapPin className="w-full h-full" />}
            />
            <StatsCard 
              value="95%" 
              label="Kepuasan Mitra" 
              icon={<ThumbsUp className="w-full h-full" />}
            />
          </div>
          
          {/* Sistem Afiliasi Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl shadow-md overflow-hidden p-8">
              <h2 className="text-3xl font-light mb-6 text-center">Sistem Afiliasi Adil dan Merata</h2>
              <p className="text-[var(--dark-400)] text-lg mb-8 text-center max-w-4xl mx-auto">
                Produk ini dipasarkan dengan sistem afiliasi yang berbasis kinerja dan penjualan langsung. Struktur sistem afiliasi dibuat agar adil dan merata untuk semua member, dengan sistem pembagian keuntungan yang jelas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {/* Fitur 1 */}
                <div className="bg-[var(--dark-900)] p-5 rounded-lg flex items-start space-x-4 border-l-4 border-[var(--accent-green)]">
                  <div className="p-2 bg-[var(--dark-800)] rounded-lg flex-shrink-0">
                    <Gift className="w-6 h-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Berdonasi kepada yayasan</h3>
                    <p className="text-[var(--dark-400)]">Dari setiap penjualan akan disalurkan untuk program-program sosial</p>
                  </div>
                </div>

                {/* Fitur 2 */}
                <div className="bg-[var(--dark-900)] p-5 rounded-lg flex items-start space-x-4 border-l-4 border-[var(--accent-green)]">
                  <div className="p-2 bg-[var(--dark-800)] rounded-lg flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Komisi langsung</h3>
                    <p className="text-[var(--dark-400)]">Dapatkan komisi langsung dari setiap penjualan yang Anda hasilkan</p>
                  </div>
                </div>

                {/* Fitur 3 */}
                <div className="bg-[var(--dark-900)] p-5 rounded-lg flex items-start space-x-4 border-l-4 border-[var(--accent-green)]">
                  <div className="p-2 bg-[var(--dark-800)] rounded-lg flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Potensi Keuntungan Tak Terbatas</h3>
                    <p className="text-[var(--dark-400)]">Tidak ada batasan dalam penghasilan yang bisa Anda dapatkan</p>
                  </div>
                </div>

                {/* Fitur 4 */}
                <div className="bg-[var(--dark-900)] p-5 rounded-lg flex items-start space-x-4 border-l-4 border-[var(--accent-green)]">
                  <div className="p-2 bg-[var(--dark-800)] rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Pencairan komisi cepat</h3>
                    <p className="text-[var(--dark-400)]">Proses pencairan komisi yang cepat dan transparan</p>
                  </div>
                </div>

                {/* Fitur 5 */}
                <div className="bg-[var(--dark-900)] p-5 rounded-lg flex items-start space-x-4 border-l-4 border-[var(--accent-green)]">
                  <div className="p-2 bg-[var(--dark-800)] rounded-lg flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-1">Sistem Penjualan Mudah</h3>
                    <p className="text-[var(--dark-400)]">Sistem yang user-friendly dan transparan untuk semua mitra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Rest of the content from program.tsx - continuing with existing sections */}
          {/* Keuntungan Bergabung sebagai Mitra */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">Keuntungan Bergabung sebagai Mitra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-b from-[var(--dark-800)] to-[var(--dark-900)] p-0 rounded-xl shadow-md transform transition-transform hover:scale-[1.01] overflow-hidden">
                <div className="h-44 bg-[var(--dark-700)] relative overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-80" 
                    style={{backgroundImage: 'url("https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-900)] to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center">
                    <div className="p-3 bg-[var(--accent-green)] bg-opacity-90 rounded-full">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-3 text-white">Komisi</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-[var(--dark-800)] rounded-lg p-4 mb-4 border border-[var(--dark-700)]">
                    <span className="text-3xl font-bold text-[var(--accent-green)]">Rp26.000</span>
                    <span className="text-[var(--dark-400)] ml-2">per transaksi referral</span>
                  </div>
                  <p className="text-[var(--dark-400)]">
                    Dapatkan komisi menarik untuk setiap transaksi referral yang Anda bawa. 
                    Semakin banyak referral, semakin besar penghasilan Anda.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-[var(--dark-800)] to-[var(--dark-900)] p-0 rounded-xl shadow-md transform transition-transform hover:scale-[1.01] overflow-hidden">
                <div className="h-44 bg-[var(--dark-700)] relative overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-80" 
                    style={{backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-900)] to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center">
                    <div className="p-3 bg-[var(--accent-green)] bg-opacity-90 rounded-full">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-3 text-white">Donasi Otomatis</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-[var(--dark-800)] rounded-lg p-4 mb-4 border border-[var(--dark-700)]">
                    <span className="text-3xl font-bold text-[var(--accent-green)]">Rp8.000</span>
                    <span className="text-[var(--dark-400)] ml-2">per transaksi</span>
                  </div>
                  <p className="text-[var(--dark-400)]">
                    Berkontribusi dalam kebaikan. Setiap transaksi yang Anda lakukan, 
                    donasi akan langsung disalurkan ke yayasan pilihan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cara Kerja Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-8 text-center">Cara Kerja Bergabung Program Berkah Abadi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-[var(--dark-800)] rounded-xl p-6 shadow-lg relative flex flex-col items-center text-center">
                <div className="absolute -top-5 w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-white font-bold text-xl">1</div>
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg 
                    className="h-16 w-16 text-[var(--accent-green)] opacity-80"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Daftar</h3>
                <p className="text-[var(--dark-400)]">Daftar gratis untuk mendapatkan link afiliasi pribadi.</p>
                <div className="mt-auto pt-4">
                  <div className="h-12 border-t border-[var(--dark-700)] w-full"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[var(--dark-800)] rounded-xl p-6 shadow-lg relative flex flex-col items-center text-center">
                <div className="absolute -top-5 w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-white font-bold text-xl">2</div>
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg 
                    className="h-16 w-16 text-[var(--accent-green)] opacity-80" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Bagikan</h3>
                <p className="text-[var(--dark-400)]">Bagikan link tersebut kepada calon pembeli.</p>
                <div className="mt-auto pt-4">
                  <div className="h-12 border-t border-[var(--dark-700)] w-full"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[var(--dark-800)] rounded-xl p-6 shadow-lg relative flex flex-col items-center text-center">
                <div className="absolute -top-5 w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-white font-bold text-xl">3</div>
                <div className="h-20 flex items-center justify-center mb-4">
                  <svg 
                    className="h-16 w-16 text-[var(--accent-green)] opacity-80" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <rect x="9" y="9" width="13" height="10" rx="2"></rect>
                    <circle cx="16" cy="14" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Dapatkan Komisi</h3>
                <p className="text-[var(--dark-400)]">Dapatkan komisi dari setiap penjualan yang terjadi melalui link afiliasi Anda.</p>
                <div className="mt-auto pt-4">
                  <div className="h-12 border-t border-[var(--dark-700)] w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pendaftaran */}
          <div className="bg-[var(--dark-800)] p-8 rounded-xl mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Pendaftaran gratis!</h2>
            <p className="text-lg text-[var(--dark-400)] mb-6 max-w-3xl mx-auto">
              Untuk menjadi mitra resmi, Anda cukup melakukan pembelian satu slop rokok 
              Berkah Abadi Nusantara Atau Rokok DK.
            </p>
            <button className="px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Daftar Sekarang
            </button>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">Pertanyaan Umum</h2>
            <div className="bg-[var(--dark-800)] rounded-xl p-6">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
} 