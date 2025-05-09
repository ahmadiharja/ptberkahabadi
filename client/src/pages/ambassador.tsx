import { Container } from "@/components/ui/container";
import { Quote } from "lucide-react";

// Data brand ambassador
const ambassadors = [
  {
    id: 1,
    name: "Gus Iqdam",
    position: "Pengasuh Majelis Ta'lim Sabilu Taubah",
    testimonial: "Dulu saya selalu sesak napas setelah merokok, sekarang setelah rutin pakai VB Pro Nusantara, dada terasa lebih ringan.",
    image: "/assets/images/ambassador/gusiqdam.jpeg"
  },
  {
    id: 2,
    name: "KH Kholiq Amrulloh",
    position: "Wakil Jatman Nasional",
    testimonial: "Semenjak rutin pakai VBPRO, daya tahan tubuh saya lebih baik, jarang sakit.",
    image: "/assets/images/ambassador/KHKholiqAmrulloh.jpg"
  },
  {
    id: 3,
    name: "KH. Muhammad Najmuddin Jamha",
    position: "Pengasuh PP. Baitul Abidin, Badas Kediri",
    testimonial: "Setelah coba VBPRO, saya merasakan tubuh lebih bugar, tidak gampang capek, dan lebih semangat kerja.",
    image: "/assets/images/ambassador/KHMuhammadNajmuddinJamha.jpeg"
  },
  {
    id: 4,
    name: "KH. Khafid Baihaqi",
    position: "Pemuka Agama",
    testimonial: "Semenjak rutin pakai VBPRO, daya tahan tubuh saya lebih baik, jarang sakit.",
    image: "/assets/images/ambassador/KHKhafidBaihaqi.jpeg"
  },
  {
    id: 5,
    name: "Gus Hendrik",
    position: "Pemuka Agama",
    testimonial: "Saya bisa tetap merokok tanpa khawatir tentang efek samping pada tubuh.",
    image: "/assets/images/ambassador/GusHendrik.jpeg"
  },
  {
    id: 6,
    name: "Cecep Eman Sulaeman S.Hi M.H",
    position: "Praktisi Ruqyah",
    testimonial: "Setelah pakai VBPRO, saya tidak merasa cepat capek saat naik tangga atau jalan jauh.",
    image: "/assets/images/ambassador/CecepEmanSulaeman.jpeg"
  },
  {
    id: 7,
    name: "KH Ahmad Zubaidi",
    position: "Ketua Thoriqoh Pondok Kencong Kepung Kediri",
    testimonial: "Gula darah saya lebih stabil sejak saya mengganti rokok biasa ke VB Pro.",
    image: "/assets/images/ambassador/KHAhmadZubaidi.jpeg"
  },
  {
    id: 8,
    name: "KH. Jauhar Nehru",
    position: "Pengasuh Ponpes Roudhotul Ulum Kencong, Kepung Kediri",
    testimonial: "VB Pro Nusantara memberi saya pengalaman merokok yang lebih sehat. Sebagai pengasuh pesantren, saya juga senang mendukung produk yang bermanfaat bagi umat.",
    image: "/assets/images/ambassador/KHJAUHARNEHRU.jpg"
  },
  {
    id: 9,
    name: "KH. Rofiudin Jogoroto Jombang",
    position: "Pemuka Agama",
    testimonial: "Alhamdulillah, sejak menggunakan VB Pro Nusantara, saya bisa tetap fokus dalam berdakwah tanpa gangguan batuk dan sesak nafas yang sering saya alami sebelumnya.",
    image: "/assets/images/ambassador/KHROFIUDDINJOGOROTOJOMBANG.jpg"
  }
];

export default function Ambassador() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Brand Ambassador</h1>
            <p className="text-xl italic text-[var(--accent-green)] mb-6">Berkah Abadi</p>
            <p className="text-xl text-[var(--dark-400)] max-w-3xl mx-auto">
              Para tokoh terkemuka yang telah merasakan manfaat dan kualitas produk kami.
              Mereka berbagi pengalaman nyata dengan produk Berkah Abadi.
            </p>
          </div>

          {/* Ambassador Cards */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ambassadors.map((ambassador) => (
                <div 
                  key={ambassador.id} 
                  className="bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 h-60 md:h-auto relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                        style={{ backgroundImage: `url(${ambassador.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-900)] to-transparent opacity-50"></div>
                    </div>
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col relative">
                      <div className="absolute top-6 right-6 text-[var(--accent-green)] opacity-20">
                        <Quote size={40} />
                      </div>
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-white">{ambassador.name}</h3>
                        <p className="text-[var(--dark-400)] text-sm">{ambassador.position}</p>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[var(--dark-300)] italic">"{ambassador.testimonial}"</p>
                      </div>
                      <div className="mt-6">
                        <div className="h-1 w-16 bg-[var(--accent-green)] opacity-50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pesan Inspiratif Video Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-4">Pesan Inspiratif</h2>
            <p className="text-[var(--dark-400)] text-lg text-center mb-8 max-w-3xl mx-auto">
              Meninggalkan kebiasaan merokok bukan hanya tentang kesehatan, tetapi juga tentang menghargai kehidupan dan membawa berkah bagi diri sendiri dan orang lain.
            </p>
            
            {/* Video Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {/* Video 1 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
                    alt="Video: Kisah Sukses Berhenti Merokok" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    5:32
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Kisah Sukses Berhenti Merokok - Ustadz Khalid</h3>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg" 
                    alt="Video: Fakta Medis Tentang Merokok" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    7:14
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Fakta Medis Tentang Merokok - Dr. Ahmad</h3>
                </div>
              </div>
              
              {/* Video 3 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/xvFZjo5PgG0/maxresdefault.jpg" 
                    alt="Video: Hidup Lebih Sehat Bersama DK" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    4:27
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Hidup Lebih Sehat Bersama DK - Pengalaman KH Anwar</h3>
                </div>
              </div>
              
              {/* Video 4 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/oHg5SJYRHA0/maxresdefault.jpg" 
                    alt="Video: Pandangan Islam Tentang Merokok" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    11:48
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Pandangan Islam Tentang Merokok - Ustadz Zubair</h3>
                </div>
              </div>
              
              {/* Video 5 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/6_b7RDuLwcI/maxresdefault.jpg" 
                    alt="Video: Berbagi Pengalaman" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    6:15
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Berbagi Pengalaman: Transisi ke DK - KH Najmuddin</h3>
                </div>
              </div>
            </div>
            
            {/* Video Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Video 6 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/FQZzrn0ku5U/maxresdefault.jpg" 
                    alt="Video: Dampak Merokok Pada Keluarga" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    8:42
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Dampak Merokok Pada Keluarga - Cerita Para Istri</h3>
                </div>
              </div>
              
              {/* Video 7 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/Z9X1Ta1jN8E/maxresdefault.jpg" 
                    alt="Video: Rahasia Sehat Setelah 40" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    5:51
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Rahasia Sehat Setelah 40 - Gus Hendrik</h3>
                </div>
              </div>
              
              {/* Video 8 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg" 
                    alt="Video: Berkah dari Berbagi" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    7:22
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Berkah dari Berbagi - Program Donasi Berkah Abadi</h3>
                </div>
              </div>
              
              {/* Video 9 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/TKfS5zVfGBc/maxresdefault.jpg" 
                    alt="Video: Testimoni dari Pengguna" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    9:05
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Testimoni dari Pengguna - Kumpulan Cerita Sukses</h3>
                </div>
              </div>
              
              {/* Video 10 */}
              <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative">
                  <img 
                    src="https://i.ytimg.com/vi/FTQbiNvZqaY/maxresdefault.jpg" 
                    alt="Video: Workshop Kesehatan" 
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-90 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    10:31
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white text-sm font-medium line-clamp-2">Workshop Kesehatan - Berkah Abadi Peduli Masyarakat</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Become Ambassador Section */}
          <div className="mb-16">
            <div className="bg-[var(--dark-800)] rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-3xl font-light mb-6">Bergabung sebagai Ambassador?</h2>
              <p className="text-[var(--dark-400)] text-lg mb-8 max-w-3xl mx-auto">
                Anda adalah tokoh masyarakat, influencer, atau seseorang dengan pengaruh sosial? 
                Kami mengundang Anda untuk menjadi bagian dari keluarga Berkah Abadi sebagai 
                Brand Ambassador.
              </p>
              <button className="px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">Keuntungan Menjadi Ambassador</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--dark-800)] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[var(--accent-green)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="h-8 w-8 text-[var(--accent-green)]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Paket Produk Gratis</h3>
                <p className="text-[var(--dark-400)]">Dapatkan paket produk Berkah Abadi secara gratis setiap bulan untuk dinikmati.</p>
              </div>

              <div className="bg-[var(--dark-800)] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[var(--accent-green)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="h-8 w-8 text-[var(--accent-green)]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                    <path d="M15 7h6v6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Komisi Khusus</h3>
                <p className="text-[var(--dark-400)]">Dapatkan komisi khusus dari setiap penjualan yang terjadi melalui referensi Anda.</p>
              </div>

              <div className="bg-[var(--dark-800)] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[var(--accent-green)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="h-8 w-8 text-[var(--accent-green)]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M20 2a10 10 0 1 0 10 10"></path>
                    <path d="M12 12l10-10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Eksposur Media</h3>
                <p className="text-[var(--dark-400)]">Tampil di media sosial dan materi promosi Berkah Abadi untuk meningkatkan profil Anda.</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}