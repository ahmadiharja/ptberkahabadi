import { Container } from "@/components/ui/container";
import { Building2, Home, Users, Landmark, Heart, CalendarDays } from "lucide-react";

// Data yayasan
const foundations = [
  {
    id: 1,
    name: "Yayasan Berkah Abadi",
    address: "Jl. KH. Ahmad Dahlan No. 123, Kediri, Jawa Timur",
    description: "Yayasan yang berfokus pada pemberdayaan ekonomi masyarakat dan pendidikan anak yatim piatu di seluruh Indonesia.",
    founded: "2015",
    beneficiaries: "Anak yatim dan masyarakat dhuafa",
    donationCollected: "Rp 1.257.000.000",
    logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 2,
    name: "Yayasan Okegas Indonesia",
    address: "Jl. Pahlawan No. 45, Surabaya, Jawa Timur",
    description: "Membantu masyarakat kurang mampu dengan memberikan bantuan kesehatan dan pendidikan bagi generasi muda Indonesia.",
    founded: "2017",
    beneficiaries: "Masyarakat prasejahtera dan pelajar",
    donationCollected: "Rp 874.500.000",
    logo: "https://images.unsplash.com/photo-1594708767771-a5e9d3370554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
];

export default function Donasi() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Program Donasi</h1>
            <p className="text-xl italic text-[var(--accent-green)] mb-6">Berkah Abadi</p>
            <p className="text-xl text-[var(--dark-400)] max-w-3xl mx-auto">
              Setiap transaksi produk Berkah Abadi secara otomatis menyisihkan
              Rp8.000 untuk donasi yang disalurkan melalui yayasan-yayasan tepercaya.
            </p>
          </div>

          {/* About Donation Program */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-light mb-6">Berbagi Berkah</h2>
                  <p className="text-[var(--dark-400)] mb-6">
                    Program donasi Berkah Abadi merupakan wujud kepedulian kami terhadap 
                    masyarakat. Kami percaya bahwa berbagi adalah bagian dari keberkahan 
                    yang ingin kami sebarkan.
                  </p>
                  <p className="text-[var(--dark-400)] mb-6">
                    Dengan membeli produk Berkah Abadi, Anda ikut berpartisipasi dalam misi 
                    sosial kami untuk membantu mereka yang membutuhkan. Setiap transaksi yang 
                    terjadi, sebanyak Rp8.000 secara otomatis disisihkan untuk disalurkan 
                    ke program donasi.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[var(--accent-green)] bg-opacity-10 rounded-full">
                        <Heart className="w-5 h-5 text-[var(--accent-green)]" />
                      </div>
                      <span className="text-white">Rp8.000 per transaksi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[var(--accent-green)] bg-opacity-10 rounded-full">
                        <Users className="w-5 h-5 text-[var(--accent-green)]" />
                      </div>
                      <span className="text-white">5.000+ penerima manfaat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[var(--accent-green)] bg-opacity-10 rounded-full">
                        <Building2 className="w-5 h-5 text-[var(--accent-green)]" />
                      </div>
                      <span className="text-white">2 yayasan partner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[var(--accent-green)] bg-opacity-10 rounded-full">
                        <Home className="w-5 h-5 text-[var(--accent-green)]" />
                      </div>
                      <span className="text-white">10+ pesantren didukung</span>
                    </div>
                  </div>
                </div>

                <div 
                  className="h-64 md:h-auto bg-center bg-cover"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
                  }}
                >
                </div>
              </div>
            </div>
          </div>

          {/* Foundations Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-10">Yayasan Penyalur Donasi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {foundations.map((foundation) => (
                <div 
                  key={foundation.id}
                  className="bg-[var(--dark-800)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center p-6 border-b border-[var(--dark-700)]">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-[var(--dark-700)] flex-shrink-0">
                        <img 
                          src={foundation.logo} 
                          alt={foundation.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl text-white font-medium">{foundation.name}</h3>
                        <div className="flex items-center text-sm text-[var(--dark-400)]">
                          <Landmark className="w-4 h-4 mr-1" />
                          <span>Didirikan tahun {foundation.founded}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4 flex items-start">
                        <Home className="w-5 h-5 text-[var(--dark-400)] mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-[var(--dark-400)] text-sm">{foundation.address}</p>
                      </div>
                      
                      <div className="mb-4 flex items-start">
                        <Users className="w-5 h-5 text-[var(--dark-400)] mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-[var(--dark-400)] text-sm">Penerima manfaat: {foundation.beneficiaries}</p>
                      </div>
                      
                      <p className="text-[var(--dark-300)] mt-4 mb-6">
                        {foundation.description}
                      </p>
                      
                      <div className="bg-[var(--dark-900)] rounded-lg p-4 mb-4">
                        <p className="text-sm text-[var(--dark-400)] mb-1">Total Donasi Terkumpul</p>
                        <p className="text-xl text-[var(--accent-green)] font-semibold">{foundation.donationCollected}</p>
                      </div>
                      
                      <button className="w-full py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-lg text-center font-medium transition-all transform hover:scale-105">
                        Lihat Detail Program
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-8">Dampak Donasi Kami</h2>
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
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Pendidikan</h3>
                <p className="text-[var(--dark-400)]">Mendukung 200+ anak yatim dan dhuafa untuk mendapatkan akses pendidikan yang layak.</p>
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
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kesehatan</h3>
                <p className="text-[var(--dark-400)]">Memberikan layanan kesehatan gratis kepada 500+ keluarga kurang mampu melalui program pemeriksaan berkala.</p>
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
                    <path d="M5 8h14"></path>
                    <path d="M5 12h14"></path>
                    <path d="M5 16h14"></path>
                    <path d="M3 20h18"></path>
                    <path d="M2 4h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarana Ibadah</h3>
                <p className="text-[var(--dark-400)]">Membantu renovasi dan pembangunan 15+ masjid dan musholla di berbagai daerah terpencil.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[var(--accent-green)] bg-opacity-10 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Ingin Berdonasi Lebih?</h2>
            <p className="text-lg text-[var(--dark-400)] mb-6 max-w-3xl mx-auto">
              Selain melalui pembelian produk, Anda juga dapat berkontribusi langsung pada 
              program donasi Berkah Abadi melalui yayasan-yayasan partner kami.
            </p>
            <button className="px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Donasi Sekarang
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}