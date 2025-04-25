import { HelpCircle, Send, Mail, Phone, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";

// Dummy data FAQ
const faqItems = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menjadi mitra?",
    answer: "Proses menjadi mitra hanya membutuhkan waktu 1-2 hari kerja setelah melakukan pembelian paket produk minimal yang ditentukan dan verifikasi data."
  },
  {
    question: "Bagaimana cara menarik komisi dari sistem?",
    answer: "Anda dapat menarik komisi melalui menu Afiliasi > Komisi > Tarik Komisi. Komisi akan ditransfer ke rekening yang telah Anda daftarkan dalam 1-3 hari kerja."
  },
  {
    question: "Apa persyaratan untuk menjadi mitra Berkah Abadi?",
    answer: "Untuk menjadi mitra, Anda perlu melakukan pembelian minimal 1 slop untuk wilayah Jawa atau 2 slop untuk luar Jawa, dan melengkapi data diri di sistem."
  },
  {
    question: "Bagaimana sistem donasi Berkah Abadi bekerja?",
    answer: "Setiap transaksi produk Berkah Abadi secara otomatis akan menyisihkan Rp8.000 untuk donasi yang disalurkan melalui yayasan-yayasan partner kami."
  },
];

// Riwayat tiket bantuan dummy
const supportTicketsHistory = [
  {
    id: "TKT-2023120001",
    subject: "Pertanyaan tentang sistem afiliasi",
    status: "Selesai",
    createdAt: "01 Des 2023",
    lastReply: "02 Des 2023"
  },
  {
    id: "TKT-2023110015",
    subject: "Kendala saat order produk",
    status: "Proses",
    createdAt: "25 Nov 2023",
    lastReply: "30 Nov 2023"
  }
];

// Opsi kategori tiket
const ticketCategories = [
  { value: "account", label: "Akun & Profil" },
  { value: "order", label: "Pesanan & Pengiriman" },
  { value: "affiliate", label: "Program Afiliasi" },
  { value: "commission", label: "Komisi & Pembayaran" },
  { value: "product", label: "Informasi Produk" },
  { value: "other", label: "Lainnya" },
];

export function Bantuan() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submitting the form would go here
    console.log({ selectedCategory, subject, message });
    // Reset form
    setSelectedCategory("");
    setSubject("");
    setMessage("");
    // Show success message or toast notification
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Pusat Bantuan</h1>
        <p className="text-[var(--dark-400)]">
          Dapatkan jawaban atau hubungi tim dukungan kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Form Section */}
        <div className="lg:col-span-3">
          <Card className="p-6 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <h2 className="text-xl font-medium text-white mb-4">Hubungi Kami</h2>
            <p className="text-[var(--dark-400)] mb-6">
              Isi formulir di bawah ini untuk mengirim pesan kepada tim dukungan kami.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-[var(--dark-300)] mb-1">
                  Kategori
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full bg-[var(--dark-900)] border-[var(--dark-700)] text-white">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--dark-800)] border-[var(--dark-700)]">
                    {ticketCategories.map((category) => (
                      <SelectItem 
                        key={category.value} 
                        value={category.value}
                        className="text-white hover:bg-[var(--dark-700)] focus:bg-[var(--dark-700)] focus:text-white"
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--dark-300)] mb-1">
                  Subjek
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subjek pesan" 
                  className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--dark-300)] mb-1">
                  Pesan
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Jelaskan pertanyaan atau masalah Anda..." 
                  className="h-32 bg-[var(--dark-900)] border-[var(--dark-700)] text-white resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                <Send className="mr-2 h-4 w-4" /> Kirim Pesan
              </Button>
            </form>
          </Card>

          {/* Support Ticket History */}
          {supportTicketsHistory.length > 0 && (
            <Card className="p-6 mt-6 bg-[var(--dark-800)] border-[var(--dark-700)]">
              <h2 className="text-xl font-medium text-white mb-4">Riwayat Tiket Bantuan</h2>
              <div className="space-y-4">
                {supportTicketsHistory.map((ticket) => (
                  <div 
                    key={ticket.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-[var(--dark-900)] border border-[var(--dark-700)]"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--dark-700)] text-[var(--dark-300)]">
                          {ticket.id}
                        </span>
                        <span className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          ticket.status === "Selesai" 
                            ? "bg-green-500/10 text-green-500" 
                            : "bg-blue-500/10 text-blue-500"
                        )}>
                          {ticket.status}
                        </span>
                      </div>
                      <h4 className="font-medium text-white">{ticket.subject}</h4>
                      <div className="flex items-center text-xs text-[var(--dark-400)] mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Dibuat: {ticket.createdAt} | Balasan terakhir: {ticket.lastReply}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" /> Lihat
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* FAQ and Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <h2 className="text-xl font-medium text-white mb-4">Pertanyaan Umum</h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-[var(--dark-900)] border border-[var(--dark-700)]"
                >
                  <div className="flex">
                    <HelpCircle className="h-5 w-5 text-[var(--accent-green)] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white mb-2">{faq.question}</h3>
                      <p className="text-sm text-[var(--dark-400)]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <h2 className="text-xl font-medium text-white mb-4">Kontak Langsung</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-[var(--accent-green)]/10">
                  <Mail className="h-5 w-5 text-[var(--accent-green)]" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <p className="text-[var(--dark-400)]">cs@berkah-abadi.com</p>
                  <p className="text-xs text-[var(--dark-300)] mt-1">Respons dalam 1-2 hari kerja</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-[var(--accent-green)]/10">
                  <Phone className="h-5 w-5 text-[var(--accent-green)]" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Telepon</h3>
                  <p className="text-[var(--dark-400)]">+62 812-3456-7890</p>
                  <p className="text-xs text-[var(--dark-300)] mt-1">Senin - Jumat, 09:00 - 17:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-full bg-[var(--accent-green)]/10">
                  <MessageSquare className="h-5 w-5 text-[var(--accent-green)]" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">WhatsApp</h3>
                  <p className="text-[var(--dark-400)]">+62 812-3456-7890</p>
                  <p className="text-xs text-[var(--dark-300)] mt-1">Respons cepat dalam jam kerja</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Utility untuk menggabungkan nama kelas
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};