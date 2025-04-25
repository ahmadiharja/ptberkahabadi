import { Heart, Building, Download, EyeIcon, Check, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Dummy data untuk tabel donasi
const donationHistory = [
  { 
    id: 1, 
    date: "01 Des 2023", 
    amount: 24000, 
    foundation: "Yayasan Berkah Abadi", 
    status: "Tersalurkan", 
    program: "Pendidikan Anak Yatim"
  },
  { 
    id: 2, 
    date: "20 Nov 2023", 
    amount: 16000, 
    foundation: "Yayasan Okegas Indonesia", 
    status: "Tersalurkan", 
    program: "Pemberdayaan Masyarakat"
  },
  { 
    id: 3, 
    date: "10 Nov 2023", 
    amount: 32000, 
    foundation: "Yayasan Berkah Abadi", 
    status: "Tersalurkan", 
    program: "Pembangunan Masjid"
  },
  { 
    id: 4, 
    date: "01 Nov 2023", 
    amount: 8000, 
    foundation: "Yayasan Okegas Indonesia", 
    status: "Pending", 
    program: "Bantuan Bencana Alam"
  },
  { 
    id: 5, 
    date: "20 Okt 2023", 
    amount: 24000, 
    foundation: "Yayasan Berkah Abadi", 
    status: "Tersalurkan", 
    program: "Pendidikan Anak Yatim"
  },
];

// Informasi yayasan
const foundations = [
  {
    id: 1,
    name: "Yayasan Berkah Abadi",
    logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    donationCollected: 752000,
    programs: 4,
    active: true
  },
  {
    id: 2,
    name: "Yayasan Okegas Indonesia",
    logo: "https://images.unsplash.com/photo-1594708767771-a5e9d3370554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    donationCollected: 248000,
    programs: 3,
    active: false
  }
];

export function Donasi() {
  // Menghitung total donasi tersalurkan
  const totalDonation = donationHistory
    .filter(donation => donation.status === "Tersalurkan")
    .reduce((total, donation) => total + donation.amount, 0);
  
  // Menghitung jumlah yayasan terpilih (aktif)
  const selectedFoundationsCount = foundations.filter(f => f.active).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Program Donasi</h1>
        <p className="text-[var(--dark-400)]">
          Lihat riwayat donasi dan pilih yayasan penyalur donasi Anda.
        </p>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Donasi Tersalurkan</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">Rp{totalDonation.toLocaleString('id-ID')}</h3>
              <p className="text-xs flex items-center text-[var(--dark-400)] mt-1">
                <Check className="w-3 h-3 mr-1" />
                <span>Dari setiap transaksi Anda</span>
              </p>
            </div>
            <div className="p-3 rounded-full bg-[var(--accent-green)]">
              <Heart className="w-5 h-5 text-black" />
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Yayasan Terpilih</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">{selectedFoundationsCount}</h3>
              <p className="text-xs flex items-center text-[var(--dark-400)] mt-1">
                <Check className="w-3 h-3 mr-1" />
                <span>Dari {foundations.length} yayasan</span>
              </p>
            </div>
            <div className="p-3 rounded-full bg-[var(--accent-green)]">
              <Building className="w-5 h-5 text-black" />
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Tambahan Donasi Sukarela</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">Rp0</h3>
              <p className="text-xs flex items-center text-yellow-500 mt-1">
                <AlertTriangle className="w-3 h-3 mr-1" />
                <span>Anda belum berdonasi tambahan</span>
              </p>
            </div>
            <div className="p-3 rounded-full bg-[var(--accent-green)]">
              <Heart className="w-5 h-5 text-black" />
            </div>
          </div>
        </Card>
      </div>

      {/* Foundations Section */}
      <div className="bg-[var(--dark-800)] rounded-lg p-5 border border-[var(--dark-700)]">
        <h3 className="text-lg font-medium text-white mb-4">Yayasan Partner</h3>
        <p className="text-[var(--dark-400)] mb-4">
          Pilih yayasan yang ingin Anda jadikan penyalur donasi dari transaksi Anda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {foundations.map((foundation) => (
            <div 
              key={foundation.id}
              className={cn(
                "flex items-center p-4 rounded-lg border",
                foundation.active 
                  ? "border-[var(--accent-green)] bg-[var(--accent-green)]/5"
                  : "border-[var(--dark-700)] bg-[var(--dark-900)]"
              )}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--dark-700)] mr-4">
                <img 
                  src={foundation.logo}
                  alt={foundation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{foundation.name}</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                  <p className="text-xs text-[var(--dark-400)]">
                    Total tersalurkan: Rp{foundation.donationCollected.toLocaleString('id-ID')}
                  </p>
                  <p className="text-xs text-[var(--dark-400)]">
                    {foundation.programs} program aktif
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <Button 
                  variant={foundation.active ? "default" : "outline"}
                  size="sm"
                  className={foundation.active 
                    ? "bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                    : "border-[var(--dark-600)] text-[var(--dark-400)]"
                  }
                >
                  {foundation.active ? "Terpilih" : "Pilih"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation History */}
      <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-[var(--dark-700)] flex flex-col sm:flex-row justify-between sm:items-center">
          <h3 className="text-lg font-medium text-white mb-2 sm:mb-0">Riwayat Donasi</h3>
          <Button variant="outline" size="sm" className="border-[var(--dark-600)] text-[var(--dark-400)] w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" /> Export Laporan
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                <TableHead className="text-[var(--dark-400)]">No</TableHead>
                <TableHead className="text-[var(--dark-400)]">Tanggal</TableHead>
                <TableHead className="text-[var(--dark-400)]">Jumlah</TableHead>
                <TableHead className="text-[var(--dark-400)]">Yayasan</TableHead>
                <TableHead className="text-[var(--dark-400)]">Program</TableHead>
                <TableHead className="text-[var(--dark-400)]">Status</TableHead>
                <TableHead className="text-[var(--dark-400)]">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donationHistory.map((donation, index) => (
                <TableRow key={donation.id} className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                  <TableCell className="text-sm font-medium text-white">{index + 1}</TableCell>
                  <TableCell className="text-sm text-white">{donation.date}</TableCell>
                  <TableCell className="text-sm text-white">Rp{donation.amount.toLocaleString('id-ID')}</TableCell>
                  <TableCell className="text-sm text-white">{donation.foundation}</TableCell>
                  <TableCell className="text-sm text-[var(--dark-400)]">{donation.program}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "text-xs",
                      donation.status === "Tersalurkan" 
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                        : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                    )}>
                      {donation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// Utility untuk menggabungkan nama kelas
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};