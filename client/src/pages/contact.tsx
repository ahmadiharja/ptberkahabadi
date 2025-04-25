
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Hubungi Kami</h1>
            <p className="text-xl text-[var(--dark-400)] max-w-3xl mx-auto">
              Kami siap membantu Anda dengan segala pertanyaan dan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-[var(--dark-800)] p-8 rounded-xl">
              <h2 className="text-2xl font-light mb-8">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Alamat</h3>
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
                    <h3 className="text-lg font-medium text-white mb-2">Telepon</h3>
                    <p className="text-[var(--dark-400)]">+62 815 5648 8346</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                    <p className="text-[var(--dark-400)]">okegasindonesiaemas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-green)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-[var(--accent-green)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Jam Operasional</h3>
                    <p className="text-[var(--dark-400)]">Senin - Jumat: 09:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--dark-800)] p-8 rounded-xl">
              <h2 className="text-2xl font-light mb-8">Kirim Pesan</h2>
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
        </Container>
      </main>
    </div>
  );
}
