import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Award, Briefcase, CheckSquare, Users, BarChart3, Map, ShoppingBag, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function TentangKami() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Tentang Kami</h1>
            <p className="text-xl italic text-[var(--accent-green)] mb-6">Berkah Abadi</p>
            <p className="text-xl text-[var(--dark-400)] max-w-3xl mx-auto">
              Bermula dari keinginan untuk menciptakan perubahan positif bagi masyarakat Indonesia.
            </p>
          </div>

          {/* Company Profile */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[var(--dark-800)] to-[var(--dark-900)] rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-light mb-6">Siapa Kami</h2>
                  <p className="text-[var(--dark-400)] mb-6">
                    Berkah Abadi hadir dengan visi dan misi untuk menciptakan peluang usaha yang dapat diakses oleh semua kalangan masyarakat. Berawal dari keinginan untuk membantu masyarakat Indonesia mendapatkan penghasilan tambahan, kami terus berkembang menjadi salah satu perusahaan distribusi produk terkemuka di Indonesia.
                  </p>
                  <p className="text-[var(--dark-400)] mb-6">
                    Dalam perjalanan kami, telah membantu mitra kami untuk mengembangkan bisnis mereka dan mencapai kemandirian finansial. Kami percaya bahwa dengan produk berkualitas tinggi dan sistem bisnis yang adil, kami dapat memberikan dampak positif bagi kehidupan banyak orang.
                  </p>
                </div>

                <div 
                  className="h-64 md:h-auto bg-center bg-cover"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80")',
                  }}
                >
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--dark-800)] rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl md:text-5xl font-light text-white mb-4">5,000+</h3>
                <p className="text-[var(--accent-green)] text-xl">Mitra Aktif</p>
                <div className="flex justify-center mt-6">
                  <Users className="h-10 w-10 text-[var(--dark-500)]" />
                </div>
              </div>
              
              <div className="bg-[var(--dark-800)] rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl md:text-5xl font-light text-white mb-4">25+</h3>
                <p className="text-[var(--accent-green)] text-xl">Kota di Indonesia</p>
                <div className="flex justify-center mt-6">
                  <Map className="h-10 w-10 text-[var(--dark-500)]" />
                </div>
              </div>
              
              <div className="bg-[var(--dark-800)] rounded-xl p-8 shadow-lg text-center">
                <h3 className="text-4xl md:text-5xl font-light text-white mb-4">20+</h3>
                <p className="text-[var(--accent-green)] text-xl">Produk Unggulan</p>
                <div className="flex justify-center mt-6">
                  <ShoppingBag className="h-10 w-10 text-[var(--dark-500)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[var(--dark-800)] rounded-xl shadow-lg overflow-hidden">
              <div className="h-2 bg-[var(--accent-green)]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">VISI</h2>
                </div>
                <p className="text-[var(--dark-400)]">
                  Mewujudkan sebuah komunitas usaha yang mengedepankan kebaikan, kesehatan, dan keberkahan yang abadi bagi seluruh umat, dengan memadukan keuntungan finansial dan nilai spiritual.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-[var(--dark-800)] rounded-xl shadow-lg overflow-hidden">
              <div className="h-2 bg-[var(--accent-green)]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">MISI</h2>
                </div>
                <div className="space-y-4">
                  <div className="pl-5 border-l-2 border-[var(--accent-green)] border-opacity-30">
                    <p className="text-[var(--dark-400)]">
                      <span className="font-semibold text-white block mb-1">Menyediakan Produk Unggulan:</span>
                      Menawarkan Rokok DK – Drajat Karunia, produk inovatif yang dirancang untuk mengubah kebiasaan merokok menjadi lebih sehat secara jasmani dan rohani.
                    </p>
                  </div>
                  
                  <div className="pl-5 border-l-2 border-[var(--accent-green)] border-opacity-30">
                    <p className="text-[var(--dark-400)]">
                      <span className="font-semibold text-white block mb-1">Memberdayakan Melalui Afiliasi:</span>
                      Menyediakan sistem afiliasi satu kaki yang mudah diikuti, di mana setiap mitra dapat memperoleh penghasilan tambahan.
                    </p>
                  </div>
                  
                  <div className="pl-5 border-l-2 border-[var(--accent-green)] border-opacity-30">
                    <p className="text-[var(--dark-400)]">
                      <span className="font-semibold text-white block mb-1">Menggalang Amal & Donasi:</span>
                      Mengalokasikan sebagian dari setiap transaksi sebagai donasi kepada yayasan-yayasan terpercaya untuk membantu kesejahteraan umat.
                    </p>
                  </div>
                  
                  <div className="pl-5 border-l-2 border-[var(--accent-green)] border-opacity-30">
                    <p className="text-[var(--dark-400)]">
                      <span className="font-semibold text-white block mb-1">Mendorong Perubahan Positif:</span>
                      Menginspirasi perubahan gaya hidup menuju hidup yang lebih sehat dan penuh berkah di dunia serta bekal akhirat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Documents */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-10">Legalitas Perusahaan</h2>
            <div className="bg-[var(--dark-800)] rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Akta Pendirian</h3>
                      <p className="text-[var(--dark-400)] text-sm">Nomor AHU-0033954.AH.01.02.TAHUN 2023</p>
                      <p className="text-[var(--dark-400)] text-sm">Notaris Ariananda Rusman S.H., M.KN.,</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart3 className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Nomor Induk Berusaha (NIB)</h3>
                      <p className="text-[var(--dark-400)] text-sm">3011220058006</p>
                      <p className="text-[var(--dark-400)] text-sm">Terdaftar sejak 28 Oktober 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckSquare className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">NPWP</h3>
                      <p className="text-[var(--dark-400)] text-sm">12.462.204.4-655.000</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">AP2LI</h3>
                      <p className="text-[var(--dark-400)] text-sm">306/AP2LI/DN/XXI/2023</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">SIUPL</h3>
                      <p className="text-[var(--dark-400)] text-sm">45125/SIPT/12/2022</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">SIUP</h3>
                      <p className="text-[var(--dark-400)] text-sm">30112200580060005</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information and Form Section - Added from contact.tsx */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-10">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-[var(--dark-800)] p-8 rounded-xl">
                <h3 className="text-2xl font-light mb-8">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Alamat</h4>
                      <p className="text-[var(--dark-400)]">
                        Jl. Kutilang 159 RT 002 RW 003, Desa Lamong, Kec.Badas, Kab. Kediri, Jawa Timur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Telepon</h4>
                      <p className="text-[var(--dark-400)]">+62 815 5648 8346</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                      <p className="text-[var(--dark-400)]">okegasindonesiaemas@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-[var(--accent-green)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Jam Operasional</h4>
                      <p className="text-[var(--dark-400)]">Senin - Jumat: 09:00 - 17:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[var(--dark-800)] p-8 rounded-xl">
                <h3 className="text-2xl font-light mb-8">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[var(--dark-400)]">Nama</label>
                      <Input placeholder="Nama lengkap" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[var(--dark-400)]">Email</label>
                      <Input type="email" placeholder="Email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[var(--dark-400)]">Subjek</label>
                    <Input placeholder="Subjek pesan" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-[var(--dark-400)]">Pesan</label>
                    <Textarea placeholder="Tulis pesan Anda di sini..." className="min-h-[150px]" />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-md font-medium transition-all"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[var(--accent-green)] bg-opacity-10 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Bergabung dengan Berkah Abadi</h2>
            <p className="text-lg text-[var(--dark-400)] mb-6 max-w-3xl mx-auto">
              Menjadi bagian dari keluarga besar Berkah Abadi dan nikmati berbagai manfaat dan peluang bisnis yang kami tawarkan.
            </p>
            <button className="px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Daftar Sekarang
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
}