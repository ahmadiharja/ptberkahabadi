import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Copy, 
  Tag, 
  CheckCircle, 
  Clock, 
  Download, 
  EyeIcon, 
  Edit, 
  Trash2,
  LucideIcon,
  ArrowDownToLine,
  Paintbrush,
  Share2,
  UserCircle2,
  AlertCircle,
  X,
  Check,
  CreditCard,
  ChevronRight
} from "lucide-react";
import { PrintCardModal } from "./print-card-modal";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Dummy data untuk tabel downline
const mitraData = [
  { id: 1, name: "Ahmad Syafiq", phone: "081234567890", joinDate: "23 Nov 2023", transactions: 15, status: "Aktif" },
  { id: 2, name: "Budi Santoso", phone: "081298765432", joinDate: "15 Nov 2023", transactions: 8, status: "Aktif" },
  { id: 3, name: "Deni Wahyudi", phone: "082345678901", joinDate: "28 Okt 2023", transactions: 12, status: "Aktif" },
  { id: 4, name: "Eko Nugroho", phone: "081387654321", joinDate: "05 Nov 2023", transactions: 7, status: "Aktif" },
  { id: 5, name: "Farhan Abdi", phone: "085723456789", joinDate: "30 Okt 2023", transactions: 10, status: "Aktif" },
  { id: 6, name: "Galih Pratama", phone: "087812345678", joinDate: "12 Nov 2023", transactions: 5, status: "Aktif" },
  { id: 7, name: "Hadi Nugroho", phone: "081312345678", joinDate: "08 Nov 2023", transactions: 9, status: "Aktif" },
  { id: 8, name: "Irfan Hakim", phone: "089876543210", joinDate: "01 Nov 2023", transactions: 3, status: "Tidak Aktif" },
  { id: 9, name: "Joko Susilo", phone: "081234567891", joinDate: "18 Okt 2023", transactions: 20, status: "Aktif" },
  { id: 10, name: "Kevin Sanjaya", phone: "085712345670", joinDate: "25 Okt 2023", transactions: 6, status: "Aktif" },
  { id: 11, name: "Lukman Hakim", phone: "087823456789", joinDate: "14 Okt 2023", transactions: 11, status: "Aktif" },
  { id: 12, name: "Maulana Ibrahim", phone: "081345678901", joinDate: "10 Okt 2023", transactions: 4, status: "Tidak Aktif" },
  { id: 13, name: "Naufal Rizky", phone: "089887654321", joinDate: "02 Okt 2023", transactions: 15, status: "Aktif" },
  { id: 14, name: "Oscar Permana", phone: "081234567892", joinDate: "22 Sep 2023", transactions: 7, status: "Aktif" },
  { id: 15, name: "Putra Ramadhan", phone: "085698765432", joinDate: "17 Sep 2023", transactions: 0, status: "Tidak Aktif" },
];

const konsumenData = [
  { id: 1, name: "Cindy Paramita", phone: "085712345678", joinDate: "02 Nov 2023", transactions: 2, status: "Aktif" },
  { id: 2, name: "Dian Sastro", phone: "089876543210", joinDate: "15 Okt 2023", transactions: 3, status: "Aktif" },
  { id: 3, name: "Eka Putri", phone: "081223344556", joinDate: "28 Okt 2023", transactions: 1, status: "Aktif" },
  { id: 4, name: "Fitri Ayu", phone: "087734567890", joinDate: "05 Nov 2023", transactions: 0, status: "Tidak Aktif" },
  { id: 5, name: "Gita Nirmala", phone: "081345678912", joinDate: "12 Okt 2023", transactions: 4, status: "Aktif" },
  { id: 6, name: "Hani Soraya", phone: "089812345678", joinDate: "20 Sep 2023", transactions: 1, status: "Aktif" },
  { id: 7, name: "Indah Permata", phone: "085767891234", joinDate: "11 Nov 2023", transactions: 0, status: "Tidak Aktif" },
  { id: 8, name: "Jessica Mila", phone: "081378901234", joinDate: "23 Sep 2023", transactions: 2, status: "Aktif" },
  { id: 9, name: "Kirana Dewi", phone: "087856789012", joinDate: "17 Okt 2023", transactions: 1, status: "Aktif" },
  { id: 10, name: "Laras Setiawati", phone: "089834567890", joinDate: "29 Sep 2023", transactions: 0, status: "Tidak Aktif" },
  { id: 11, name: "Maya Ratih", phone: "081312345670", joinDate: "02 Okt 2023", transactions: 3, status: "Aktif" },
  { id: 12, name: "Nadia Safira", phone: "085745678901", joinDate: "14 Sep 2023", transactions: 2, status: "Aktif" },
  { id: 13, name: "Oktavia Rahayu", phone: "087712345678", joinDate: "19 Nov 2023", transactions: 0, status: "Tidak Aktif" },
  { id: 14, name: "Putri Annisa", phone: "081367890123", joinDate: "05 Okt 2023", transactions: 1, status: "Aktif" },
  { id: 15, name: "Ratna Galih", phone: "089854321098", joinDate: "26 Sep 2023", transactions: 2, status: "Aktif" },
];

// Dummy data untuk tabel komisi
const commissionData = [
  { id: 1, date: "01 Des 2023", amount: 104000, bank: "BCA", accountNumber: "1234567890", status: "Selesai" },
  { id: 2, date: "20 Nov 2023", amount: 78000, bank: "BNI", accountNumber: "0987654321", status: "Selesai" },
  { id: 3, date: "10 Nov 2023", amount: 156000, bank: "Mandiri", accountNumber: "2345678901", status: "Selesai" },
  { id: 4, date: "01 Nov 2023", amount: 208000, bank: "BCA", accountNumber: "1234567890", status: "Pending" },
  { id: 5, date: "20 Okt 2023", amount: 130000, bank: "BCA", accountNumber: "1234567890", status: "Selesai" },
];

// Templat promosi
const promotionTemplates = [
  {
    id: 1,
    name: "Promo Berkah Ramadhan",
    image: "https://images.unsplash.com/photo-1528465424940-54f35aa46dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    type: "Banner"
  },
  {
    id: 2,
    name: "Produk Terbaru DK Premium",
    image: "https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    type: "Produk"
  },
  {
    id: 3,
    name: "Testimoni Pengguna",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    type: "Testimoni"
  },
];

// Dummy data untuk statistik link referral
const referralStats = {
  totalClicks: 254,
  totalConversions: 36,
  conversionRate: 14.2,
  productLinks: {
    clicks: 176,
    conversions: 26,
    mostClicked: "VB Pro Nusantara"
  },
  siteLinks: {
    clicks: 78,
    conversions: 10,
    popularSource: "WhatsApp"
  },
  monthlyClicks: [32, 48, 65, 42, 67],
  monthlyConversions: [4, 7, 10, 6, 9],
  referralSources: [
    { source: "WhatsApp", percentage: 45 },
    { source: "Facebook", percentage: 25 },
    { source: "Instagram", percentage: 20 },
    { source: "Email", percentage: 10 }
  ]
};

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtext?: string;
  subtextIcon?: LucideIcon;
  className?: string;
}

function StatCard({ title, value, icon: Icon, subtext, subtextIcon: SubtextIcon, className }: StatCardProps) {
  return (
    <Card className={cn("p-4 bg-[var(--dark-800)] border-[var(--dark-700)]", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[var(--dark-400)]">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-white">{value}</h3>
          {subtext && (
            <p className="text-xs flex items-center text-[var(--dark-400)] mt-1">
              {SubtextIcon && <SubtextIcon className="w-3 h-3 mr-1" />}
              <span>{subtext}</span>
            </p>
          )}
        </div>
        <div className="p-3 rounded-full bg-[var(--accent-green)] bg-opacity-10">
          <Icon className="w-5 h-5 text-[var(--accent-green)]" />
        </div>
      </div>
    </Card>
  );
}

// Daftar bank yang tersedia untuk penarikan
const availableBanks = [
  { id: "bca", name: "Bank Central Asia (BCA)" },
  { id: "bni", name: "Bank Negara Indonesia (BNI)" }, 
  { id: "bri", name: "Bank Rakyat Indonesia (BRI)" },
  { id: "mandiri", name: "Bank Mandiri" },
  { id: "permata", name: "Bank Permata" },
  { id: "cimb", name: "CIMB Niaga" },
];

// Komponen Modal Penarikan Komisi
function WithdrawalModal({ isOpen, onClose, availableAmount }: { 
  isOpen: boolean;
  onClose: () => void;
  availableAmount: number;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: availableAmount,
    accountName: "Ahmad Fadhil",
    accountNumber: "",
    bank: "",
    notes: ""
  });
  const [withdrawalMethod, setWithdrawalMethod] = useState("bank");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Reset state ketika modal ditutup
  const handleClose = () => {
    setStep(1);
    setSuccess(false);
    setLoading(false);
    onClose();
  };

  // Handle perubahan input form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle perubahan dropdown bank
  const handleBankChange = (value: string) => {
    setFormData((prev) => ({ ...prev, bank: value }));
  };

  // Handle perubahan metode penarikan
  const handleMethodChange = (value: string) => {
    setWithdrawalMethod(value);
  };

  // Handle tombol lanjutkan
  const handleContinue = () => {
    if (step === 1) {
      // Validasi form sederhana
      if (!formData.accountNumber || !formData.bank) {
        // Tampilkan notifikasi error (dalam implementasi nyata)
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Proses pengiriman data penarikan ke server
      setLoading(true);
      // Simulasi API call
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1500);
    }
  };

  // Render konten berdasarkan langkah aktif
  const renderContent = () => {
    if (success) {
      return (
        <div className="py-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-900/20 flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Penarikan Berhasil!</h3>
          <p className="text-[var(--dark-400)] mb-6 max-w-md">
            Permintaan penarikan komisi Anda sebesar Rp{formData.amount.toLocaleString('id-ID')} telah berhasil diproses. 
            Dana akan dikirimkan ke rekening Anda dalam 1-3 hari kerja.
          </p>
          <div className="p-4 rounded-lg bg-[var(--dark-900)] w-full mb-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[var(--dark-400)]">ID Transaksi</span>
                <span className="text-white font-mono">WD{Math.floor(Math.random() * 10000000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--dark-400)]">Jumlah</span>
                <span className="text-white">Rp{formData.amount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--dark-400)]">Bank</span>
                <span className="text-white">{formData.bank.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--dark-400)]">No. Rekening</span>
                <span className="text-white">{formData.accountNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--dark-400)]">Penerima</span>
                <span className="text-white">{formData.accountName}</span>
              </div>
            </div>
          </div>
          <Button onClick={handleClose} className="w-full bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
            Selesai
          </Button>
        </div>
      );
    }

    if (step === 1) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-white">Tarik Komisi</DialogTitle>
            <DialogDescription>
              Isi form berikut untuk melakukan penarikan komisi.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            {/* Jumlah Penarikan */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">Jumlah Penarikan</Label>
              <Input
                id="amount"
                name="amount"
                placeholder="Masukkan jumlah penarikan"
                className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                value={formData.amount.toString()}
                onChange={handleInputChange}
                type="number"
                min={10000}
                max={availableAmount}
              />
              <p className="text-xs text-[var(--dark-400)]">Maks. penarikan: Rp{availableAmount.toLocaleString('id-ID')}</p>
            </div>

            {/* Metode Penarikan */}
            <div className="space-y-2">
              <Label className="text-white">Metode Penarikan</Label>
              <RadioGroup 
                value={withdrawalMethod} 
                onValueChange={handleMethodChange}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" className="border-[var(--dark-600)]" />
                  <Label htmlFor="bank" className="text-[var(--dark-400)]">Transfer Bank</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ewallet" id="ewallet" className="border-[var(--dark-600)]" disabled />
                  <Label htmlFor="ewallet" className="text-[var(--dark-400)]">E-Wallet (Segera)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Bank */}
            <div className="space-y-2">
              <Label htmlFor="bank" className="text-white">Bank</Label>
              <Select onValueChange={handleBankChange} value={formData.bank}>
                <SelectTrigger className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white">
                  <SelectValue placeholder="Pilih bank" />
                </SelectTrigger>
                <SelectContent className="bg-[var(--dark-800)] border-[var(--dark-700)] text-white">
                  {availableBanks.map((bank) => (
                    <SelectItem 
                      key={bank.id} 
                      value={bank.id}
                      className="text-white focus:bg-[var(--dark-700)] focus:text-white"
                    >
                      {bank.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Informasi Rekening */}
            <div className="space-y-2">
              <Label htmlFor="accountNumber" className="text-white">Nomor Rekening</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                placeholder="Masukkan nomor rekening"
                className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountName" className="text-white">Nama Pemilik Rekening</Label>
              <Input
                id="accountName"
                name="accountName"
                placeholder="Masukkan nama pemilik rekening"
                className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                value={formData.accountName}
                onChange={handleInputChange}
              />
            </div>

            {/* Catatan Opsional */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-white">Catatan (Opsional)</Label>
              <Input
                id="notes"
                name="notes"
                placeholder="Tambahkan catatan jika diperlukan"
                className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
            >
              Batal
            </Button>
            <Button 
              type="button" 
              onClick={handleContinue}
              className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
              disabled={!formData.accountNumber || !formData.bank}
            >
              Lanjutkan
            </Button>
          </DialogFooter>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <DialogHeader>
            <DialogTitle className="text-white">Konfirmasi Penarikan</DialogTitle>
            <DialogDescription>
              Periksa kembali detail penarikan komisi Anda.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            {/* Detail Konfirmasi */}
            <div className="p-4 rounded-lg bg-[var(--dark-900)] mb-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Jumlah Penarikan</span>
                  <span className="text-white font-semibold">Rp{formData.amount.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Metode</span>
                  <span className="text-white">Transfer Bank {formData.bank.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Rekening Tujuan</span>
                  <span className="text-white">{formData.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Atas Nama</span>
                  <span className="text-white">{formData.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Biaya Admin</span>
                  <span className="text-green-500">Gratis</span>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="p-3 rounded-lg bg-yellow-900/20 border border-yellow-900/30 mb-4 flex">
              <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mr-2" />
              <div className="text-xs text-[var(--dark-400)]">
                Pastikan data yang Anda masukkan sudah benar. Penarikan yang sudah diproses tidak dapat dibatalkan.
              </div>
            </div>

            {/* Biaya & Estimasi */}
            <div className="text-sm text-[var(--dark-400)] mb-4">
              <p>• Estimasi dana akan masuk ke rekening Anda dalam 1-3 hari kerja.</p>
              <p>• Biaya admin ditanggung oleh platform.</p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
              disabled={loading}
            >
              Kembali
            </Button>
            <Button 
              type="button" 
              onClick={handleContinue}
              className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4" />
                  <span>Tarik Komisi Sekarang</span>
                </>
              )}
            </Button>
          </DialogFooter>
        </>
      );
    }

    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-[var(--dark-800)] border-[var(--dark-700)] text-white sm:max-w-[500px]">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}

function ReferralInsightsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeView, setActiveView] = useState<'all' | 'product' | 'site'>('all');
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[var(--dark-800)] border-[var(--dark-700)] text-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white">Insight Link Referral</DialogTitle>
          <DialogDescription>
            Detail statistik penyebaran link referral Anda.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-3">
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button 
              variant={activeView === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveView('all')}
              className={activeView === 'all' ? 'bg-[var(--accent-green)] text-black' : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
            >
              Semua Link
            </Button>
            <Button 
              variant={activeView === 'product' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveView('product')}
              className={activeView === 'product' ? 'bg-[var(--accent-green)] text-black' : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
            >
              Link Produk
            </Button>
            <Button 
              variant={activeView === 'site' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setActiveView('site')}
              className={activeView === 'site' ? 'bg-[var(--accent-green)] text-black' : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
            >
              Link Situs
            </Button>
          </div>
          
          {/* Main Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <Card className="p-3 bg-[var(--dark-900)] border-[var(--dark-700)]">
              <p className="text-sm text-[var(--dark-400)]">Total Klik</p>
              <h3 className="text-xl font-semibold mt-1 text-white">
                {activeView === 'all' ? referralStats.totalClicks : 
                 activeView === 'product' ? referralStats.productLinks.clicks : 
                 referralStats.siteLinks.clicks}
              </h3>
              <p className="text-xs text-[var(--accent-green)] mt-1">
                +12% dari bulan lalu
              </p>
            </Card>
            
            <Card className="p-3 bg-[var(--dark-900)] border-[var(--dark-700)]">
              <p className="text-sm text-[var(--dark-400)]">Konversi</p>
              <h3 className="text-xl font-semibold mt-1 text-white">
                {activeView === 'all' ? referralStats.totalConversions : 
                 activeView === 'product' ? referralStats.productLinks.conversions : 
                 referralStats.siteLinks.conversions}
              </h3>
              <p className="text-xs text-[var(--accent-green)] mt-1">
                +8% dari bulan lalu
              </p>
            </Card>
            
            <Card className="p-3 bg-[var(--dark-900)] border-[var(--dark-700)]">
              <p className="text-sm text-[var(--dark-400)]">Rasio Konversi</p>
              <h3 className="text-xl font-semibold mt-1 text-white">
                {activeView === 'all' ? referralStats.conversionRate : 
                 activeView === 'product' ? (referralStats.productLinks.conversions / referralStats.productLinks.clicks * 100).toFixed(1) : 
                 (referralStats.siteLinks.conversions / referralStats.siteLinks.clicks * 100).toFixed(1)}%
              </h3>
              <p className="text-xs text-[var(--accent-green)] mt-1">
                Rata-rata industri: 9.8%
              </p>
            </Card>
          </div>
          
          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-3 bg-[var(--dark-900)] border-[var(--dark-700)]">
              <h4 className="text-white font-medium mb-2">Sumber Traffic Teratas</h4>
              <div className="space-y-2">
                {referralStats.referralSources.map((source, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-sm text-[var(--dark-400)]">{source.source}</div>
                    <div className="flex-1 h-2 bg-[var(--dark-700)] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[var(--accent-green)]" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-10 text-right text-sm text-white">{source.percentage}%</div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-3 bg-[var(--dark-900)] border-[var(--dark-700)]">
              <h4 className="text-white font-medium mb-2">
                {activeView === 'all' ? 'Informasi Umum' : 
                 activeView === 'product' ? 'Informasi Link Produk' : 
                 'Informasi Link Situs'}
              </h4>
              <div className="space-y-2">
                {activeView === 'all' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Link Produk vs Situs</span>
                      <span className="text-white">{Math.round(referralStats.productLinks.clicks / referralStats.totalClicks * 100)}% / {Math.round(referralStats.siteLinks.clicks / referralStats.totalClicks * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Rata-rata klik harian</span>
                      <span className="text-white">{Math.round(referralStats.totalClicks / 30)} klik</span>
                    </div>
                  </>
                )}
                
                {activeView === 'product' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Produk terpopuler</span>
                      <span className="text-white">{referralStats.productLinks.mostClicked}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Nilai konversi</span>
                      <span className="text-white">Rp1.248.000</span>
                    </div>
                  </>
                )}
                
                {activeView === 'site' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Sumber terpopuler</span>
                      <span className="text-white">{referralStats.siteLinks.popularSource}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--dark-400)]">Waktu kunjungan terbaik</span>
                      <span className="text-white">19:00 - 21:00 WIB</span>
                    </div>
                  </>
                )}
                
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Perangkat pengguna</span>
                  <span className="text-white">Mobile 78% | Desktop 22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--dark-400)]">Wilayah Terbanyak</span>
                  <span className="text-white">Jakarta, Bandung, Surabaya</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Interface untuk modal daftar
interface DataTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  data: Array<any>;
  type: 'mitra' | 'konsumen';
}

// Komponen Modal Daftar Mitra dan Konsumen
function DataTableModal({ isOpen, onClose, title, description, data, type }: DataTableModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('semua');
  const [sortBy, setSortBy] = useState<{ field: string; direction: 'asc' | 'desc' }>({ 
    field: 'joinDate', 
    direction: 'desc' 
  });

  // Filter dan sort data
  const filteredData = data.filter(item => {
    // Filter berdasarkan search term (nama atau nomor telepon)
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.phone.includes(searchTerm);
    
    // Filter berdasarkan status
    const matchesStatus = statusFilter === 'semua' || 
                          item.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    // Urutkan berdasarkan field yang dipilih
    if (sortBy.field === 'name') {
      return sortBy.direction === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else if (sortBy.field === 'joinDate') {
      // Konversi tanggal string ke objek Date untuk perbandingan
      const dateA = new Date(a.joinDate.split(' ').reverse().join(' '));
      const dateB = new Date(b.joinDate.split(' ').reverse().join(' '));
      return sortBy.direction === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    } else if (sortBy.field === 'transactions') {
      return sortBy.direction === 'asc' ? a.transactions - b.transactions : b.transactions - a.transactions;
    }
    return 0;
  });

  // Handle sorting
  const handleSort = (field: string) => {
    setSortBy(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[var(--dark-800)] border-[var(--dark-700)] text-white max-w-5xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-white">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {/* Filter dan Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {/* Search (Responsive) */}
            <div className="flex-1">
              <Input
                placeholder="Cari nama atau nomor telepon"
                className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Filter Status (Responsive) */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white w-full sm:w-[150px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent className="bg-[var(--dark-800)] border-[var(--dark-700)] text-white">
                <SelectItem 
                  value="semua" 
                  className="text-white focus:bg-[var(--dark-700)] focus:text-white"
                >
                  Semua Status
                </SelectItem>
                <SelectItem 
                  value="aktif" 
                  className="text-white focus:bg-[var(--dark-700)] focus:text-white"
                >
                  Aktif
                </SelectItem>
                <SelectItem 
                  value="tidak aktif" 
                  className="text-white focus:bg-[var(--dark-700)] focus:text-white"
                >
                  Tidak Aktif
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Sort Options */}
          <div className="md:hidden mb-4 flex gap-2 overflow-x-auto pb-2">
            <Button
              size="sm"
              variant={sortBy.field === 'name' ? 'default' : 'outline'}
              className={sortBy.field === 'name' 
                ? 'bg-[var(--accent-green)] text-black' 
                : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
              onClick={() => handleSort('name')}
            >
              Nama {sortBy.field === 'name' && (sortBy.direction === 'asc' ? '↑' : '↓')}
            </Button>
            <Button
              size="sm"
              variant={sortBy.field === 'joinDate' ? 'default' : 'outline'}
              className={sortBy.field === 'joinDate' 
                ? 'bg-[var(--accent-green)] text-black' 
                : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
              onClick={() => handleSort('joinDate')}
            >
              Tanggal {sortBy.field === 'joinDate' && (sortBy.direction === 'asc' ? '↑' : '↓')}
            </Button>
            <Button
              size="sm"
              variant={sortBy.field === 'transactions' ? 'default' : 'outline'}
              className={sortBy.field === 'transactions' 
                ? 'bg-[var(--accent-green)] text-black' 
                : 'border-[var(--dark-600)] text-[var(--dark-400)]'}
              onClick={() => handleSort('transactions')}
            >
              Transaksi {sortBy.field === 'transactions' && (sortBy.direction === 'asc' ? '↑' : '↓')}
            </Button>
          </div>

          {/* Tabel */}
          <div className="rounded-md border border-[var(--dark-700)] overflow-hidden">
            {/* Mobile View: Card List */}
            <div className="p-4 md:hidden">
              <div className="space-y-3">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <Card key={item.id} className="bg-[var(--dark-900)] border-[var(--dark-700)] p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage 
                            src={`https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${(index % 30) + 1}.jpg`} 
                            alt={item.name} 
                          />
                          <AvatarFallback className="bg-[var(--dark-700)] text-white">
                            {item.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-white font-medium truncate">{item.name}</h4>
                            <Badge className={cn(
                              "text-xs",
                              item.status === "Aktif" 
                                ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                                : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                            )}>
                              {item.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-[var(--dark-400)] mt-1">
                            <span className="truncate">{item.phone}</span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex gap-3 text-xs">
                              <span className="text-[var(--dark-400)]">Bergabung: <span className="text-white">{item.joinDate}</span></span>
                              <span className="text-[var(--dark-400)]">Trx: <span className="text-white">{item.transactions}</span></span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-[var(--dark-400)] hover:text-white hover:bg-[var(--dark-700)]"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Disini bisa ditambahkan fungsi untuk melihat detail
                                alert(`Melihat detail ${item.name}`);
                              }}
                            >
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-4 text-[var(--dark-400)]">
                    Tidak ada data yang ditemukan
                  </div>
                )}
              </div>
            </div>

            {/* Desktop View: Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                    <TableHead className="text-[var(--dark-400)] w-12">No</TableHead>
                    <TableHead 
                      className="text-[var(--dark-400)] cursor-pointer hover:text-white"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center">
                        Nama
                        {sortBy.field === 'name' && (
                          <span className="ml-1">
                            {sortBy.direction === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-[var(--dark-400)]">No. Telepon</TableHead>
                    <TableHead 
                      className="text-[var(--dark-400)] cursor-pointer hover:text-white"
                      onClick={() => handleSort('joinDate')}
                    >
                      <div className="flex items-center">
                        Bergabung
                        {sortBy.field === 'joinDate' && (
                          <span className="ml-1">
                            {sortBy.direction === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="text-[var(--dark-400)] cursor-pointer hover:text-white"
                      onClick={() => handleSort('transactions')}
                    >
                      <div className="flex items-center">
                        Total Trx
                        {sortBy.field === 'transactions' && (
                          <span className="ml-1">
                            {sortBy.direction === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-[var(--dark-400)]">Status</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <TableRow key={item.id} className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                        <TableCell className="text-sm font-medium text-white">{index + 1}</TableCell>
                        <TableCell className="text-sm text-white">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-7 w-7">
                              <AvatarImage 
                                src={`https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${(index % 30) + 1}.jpg`} 
                                alt={item.name} 
                              />
                              <AvatarFallback className="bg-[var(--dark-700)] text-white text-xs">
                                {item.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-white">{item.phone}</TableCell>
                        <TableCell className="text-sm text-[var(--dark-400)]">{item.joinDate}</TableCell>
                        <TableCell className="text-sm text-white">{item.transactions}</TableCell>
                        <TableCell>
                          <Badge className={cn(
                            "text-xs",
                            item.status === "Aktif" 
                              ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                              : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                          )}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4 text-[var(--dark-400)]">
                        Tidak ada data yang ditemukan
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="text-xs text-[var(--dark-400)] mt-3">
            Menampilkan {filteredData.length} dari {data.length} {type === 'mitra' ? 'mitra' : 'konsumen'}
          </div>
        </div>

        <DialogFooter>
          <Button 
            type="button" 
            variant="outline"
            onClick={onClose}
            className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
          >
            Tutup
          </Button>
          <Button className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
            <Users className="mr-2 h-4 w-4" /> 
            {type === 'mitra' ? 'Tambah Mitra' : 'Tambah Konsumen'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function Affiliasi() {
  const [activeTab, setActiveTab] = useState("afiliasi");
  const referralCode = "BAABADI123";
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  const [isInsightsModalOpen, setIsInsightsModalOpen] = useState(false);
  const [isMitraModalOpen, setIsMitraModalOpen] = useState(false);
  const [isKonsumenModalOpen, setIsKonsumenModalOpen] = useState(false);
  const availableCommission = 962000; // Jumlah komisi tersedia

  // Check localStorage for active tab on component mount
  useEffect(() => {
    const storedTab = localStorage.getItem('affiliasi_active_tab');
    if (storedTab) {
      setActiveTab(storedTab);
      // Clear the stored tab value after it's been used
      localStorage.removeItem('affiliasi_active_tab');
    }
  }, []);

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    // Bisa tambahkan toast notification di sini
  };

  const handleOpenWithdrawalModal = () => {
    setIsWithdrawalModalOpen(true);
  };

  const handleCloseWithdrawalModal = () => {
    setIsWithdrawalModalOpen(false);
  };

  const handleOpenInsightsModal = () => {
    setIsInsightsModalOpen(true);
  };

  const handleCloseInsightsModal = () => {
    setIsInsightsModalOpen(false);
  };

  const handleOpenMitraModal = () => {
    setIsMitraModalOpen(true);
  };

  const handleCloseMitraModal = () => {
    setIsMitraModalOpen(false);
  };

  const handleOpenKonsumenModal = () => {
    setIsKonsumenModalOpen(true);
  };

  const handleCloseKonsumenModal = () => {
    setIsKonsumenModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Program Afiliasi</h1>
        <p className="text-[var(--dark-400)]">
          Kelola downline dan komisi afiliasi Anda.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[var(--dark-800)] border border-[var(--dark-700)] p-1 w-full grid grid-cols-3 gap-0">
          <TabsTrigger 
            value="afiliasi"
            className={cn(
              "data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black",
              "data-[state=inactive]:text-[var(--dark-400)]",
              "flex-1"
            )}
          >
            Afiliasi
          </TabsTrigger>
          <TabsTrigger 
            value="komisi"
            className={cn(
              "data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black",
              "data-[state=inactive]:text-[var(--dark-400)]",
              "flex-1"
            )}
          >
            Komisi
          </TabsTrigger>
          <TabsTrigger 
            value="promosi"
            className={cn(
              "data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black",
              "data-[state=inactive]:text-[var(--dark-400)]",
              "flex-1"
            )}
          >
            Promosi
          </TabsTrigger>
        </TabsList>

        {/* Tab Afiliasi */}
        <TabsContent value="afiliasi" className="pt-6">
          <div className="mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Jumlah Mitra"
                value={mitraData.length}
                icon={UserCircle2}
                className="col-span-1"
              />
              <StatCard
                title="Jumlah Konsumen"
                value={konsumenData.length}
                icon={CheckCircle}
                subtext="Potensial untuk upgrade"
                className="col-span-1"
              />
              <div className="col-span-2 sm:col-span-2">
                <Card className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] h-full">
                  <div className="flex flex-col h-full">
                    <p className="text-sm text-[var(--dark-400)]">Kode Referral Anda</p>
                    <div className="flex items-center mt-2 bg-[var(--dark-900)] p-2 rounded-md">
                      <div className="flex-1 font-mono text-white text-lg">{referralCode}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleCopyReferralCode}
                        className="text-[var(--dark-400)] hover:text-white hover:bg-[var(--dark-700)]"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <PrintCardModal 
                        referralCode={referralCode} 
                        userName="Ahmad Fadhil" 
                      />
                      <Button 
                        size="sm" 
                        className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black flex-1"
                      >
                        <Share2 className="mr-2 h-4 w-4" /> Bagikan Link
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Link Referral Insights Card */}
          <div className="mb-6">
            <Card 
              className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-colors cursor-pointer"
              onClick={handleOpenInsightsModal}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="mb-3 sm:mb-0">
                  <h3 className="text-white font-medium">Insight Link Referral</h3>
                  <p className="text-[var(--dark-400)] text-sm">Ringkasan statistik penyebaran link referral Anda</p>
                </div>
                <div className="flex items-center w-full sm:w-auto">
                  <div className="flex-1 sm:flex-initial grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <p className="text-xs text-[var(--dark-400)]">Link Produk</p>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-lg font-medium text-white">{referralStats.productLinks.clicks}</span>
                        <span className="text-xs text-[var(--accent-green)]">+18%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--dark-400)]">Link Situs</p>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-lg font-medium text-white">{referralStats.siteLinks.clicks}</span>
                        <span className="text-xs text-[var(--accent-green)]">+7%</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[var(--dark-400)] ml-2 hidden sm:block" />
                </div>
              </div>
            </Card>
          </div>

          {/* Table Mitra */}
          <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-[var(--dark-700)] flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="text-lg font-medium text-white mb-2 sm:mb-0">Daftar Mitra</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-[var(--dark-600)] text-[var(--dark-400)]">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
                <Button size="sm" className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                  <Users className="mr-2 h-4 w-4" /> Tambah Mitra
                </Button>
              </div>
            </div>

            {/* Mobile View: Card List */}
            <div className="p-4 md:hidden">
              <MobileCardList 
                data={mitraData.slice(0, 5)} 
                type="mitra" 
                onClick={handleOpenMitraModal} 
              />
            </div>

            {/* Desktop View: Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                    <TableHead className="text-[var(--dark-400)]">No</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Nama</TableHead>
                    <TableHead className="text-[var(--dark-400)]">No. Telepon</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Bergabung</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Total Trx</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Status</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mitraData.slice(0, 5).map((mitra, index) => (
                    <TableRow key={mitra.id} className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                      <TableCell className="text-sm font-medium text-white">{index + 1}</TableCell>
                      <TableCell className="text-sm text-white">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-7 w-7">
                            <AvatarImage src={`https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${index + 1}.jpg`} alt={mitra.name} />
                            <AvatarFallback className="bg-[var(--dark-700)] text-white text-xs">{mitra.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{mitra.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-white">{mitra.phone}</TableCell>
                      <TableCell className="text-sm text-[var(--dark-400)]">{mitra.joinDate}</TableCell>
                      <TableCell className="text-sm text-white">{mitra.transactions}</TableCell>
                      <TableCell>
                        <Badge className={cn(
                          "text-xs",
                          mitra.status === "Aktif" 
                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                            : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                        )}>
                          {mitra.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow 
                    className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50 cursor-pointer"
                    onClick={handleOpenMitraModal}
                  >
                    <TableCell colSpan={7} className="text-center py-3">
                      <Button 
                        variant="ghost" 
                        className="text-[var(--accent-green)] hover:text-[var(--accent-green)]/80 mx-auto"
                      >
                        Lihat Semua Mitra ({mitraData.length})
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Table Konsumen */}
          <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden">
            <div className="p-4 border-b border-[var(--dark-700)] flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="text-lg font-medium text-white mb-2 sm:mb-0">Daftar Konsumen</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-[var(--dark-600)] text-[var(--dark-400)]">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
                <Button size="sm" className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                  <Users className="mr-2 h-4 w-4" /> Tambah Konsumen
                </Button>
              </div>
            </div>

            {/* Mobile View: Card List */}
            <div className="p-4 md:hidden">
              <MobileCardList 
                data={konsumenData.slice(0, 5)} 
                type="konsumen" 
                onClick={handleOpenKonsumenModal} 
              />
            </div>

            {/* Desktop View: Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                    <TableHead className="text-[var(--dark-400)]">No</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Nama</TableHead>
                    <TableHead className="text-[var(--dark-400)]">No. Telepon</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Bergabung</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Total Trx</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Status</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {konsumenData.slice(0, 5).map((konsumen, index) => (
                    <TableRow key={konsumen.id} className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                      <TableCell className="text-sm font-medium text-white">{index + 1}</TableCell>
                      <TableCell className="text-sm text-white">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-7 w-7">
                            <AvatarImage src={`https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${index + 5}.jpg`} alt={konsumen.name} />
                            <AvatarFallback className="bg-[var(--dark-700)] text-white text-xs">{konsumen.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{konsumen.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-white">{konsumen.phone}</TableCell>
                      <TableCell className="text-sm text-[var(--dark-400)]">{konsumen.joinDate}</TableCell>
                      <TableCell className="text-sm text-white">{konsumen.transactions}</TableCell>
                      <TableCell>
                        <Badge className={cn(
                          "text-xs",
                          konsumen.status === "Aktif" 
                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                            : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                        )}>
                          {konsumen.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                            <EyeIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--dark-400)] hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow 
                    className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50 cursor-pointer"
                    onClick={handleOpenKonsumenModal}
                  >
                    <TableCell colSpan={7} className="text-center py-3">
                      <Button 
                        variant="ghost" 
                        className="text-[var(--accent-green)] hover:text-[var(--accent-green)]/80 mx-auto"
                      >
                        Lihat Semua Konsumen ({konsumenData.length})
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Tab Komisi */}
        <TabsContent value="komisi" className="pt-6">
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                title="Komisi Tersedia"
                value={`Rp${availableCommission.toLocaleString('id-ID')}`}
                icon={CheckCircle}
                className="col-span-1"
              />
              <StatCard
                title="Komisi Pending"
                value="Rp208.000"
                icon={Clock}
                className="col-span-1"
              />
              <Card className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
                <div className="h-full flex flex-col">
                  <p className="text-sm text-[var(--dark-400)]">Withdraw Sekarang</p>
                  <div className="flex-1 flex items-center justify-center">
                    <Button 
                      className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                      onClick={handleOpenWithdrawalModal}
                    >
                      Tarik Komisi
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-[var(--dark-800)] rounded-lg overflow-hidden">
            <div className="p-4 border-b border-[var(--dark-700)] flex flex-col sm:flex-row justify-between sm:items-center">
              <h3 className="text-lg font-medium text-white mb-2 sm:mb-0">Riwayat Komisi</h3>
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
                    <TableHead className="text-[var(--dark-400)]">Bank</TableHead>
                    <TableHead className="text-[var(--dark-400)]">No. Rekening</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Status</TableHead>
                    <TableHead className="text-[var(--dark-400)]">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {commissionData.map((commission, index) => (
                    <TableRow key={commission.id} className="border-[var(--dark-700)] hover:bg-[var(--dark-900)]/50">
                      <TableCell className="text-sm font-medium text-white">{index + 1}</TableCell>
                      <TableCell className="text-sm text-white">{commission.date}</TableCell>
                      <TableCell className="text-sm text-white">Rp{commission.amount.toLocaleString('id-ID')}</TableCell>
                      <TableCell className="text-sm text-white">{commission.bank}</TableCell>
                      <TableCell className="text-sm text-[var(--dark-400)]">{commission.accountNumber}</TableCell>
                      <TableCell>
                        <Badge className={cn(
                          "text-xs",
                          commission.status === "Selesai" 
                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                            : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                        )}>
                          {commission.status}
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
        </TabsContent>

        {/* Tab Promosi */}
        <TabsContent value="promosi" className="pt-6">
          <div className="mb-6">
            <p className="text-[var(--dark-400)] mb-4">
              Gunakan templat promosi berikut untuk meningkatkan visibilitas produk dan mendapatkan lebih banyak pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {promotionTemplates.map((template) => (
              <div 
                key={template.id} 
                className="bg-[var(--dark-800)] rounded-lg overflow-hidden border border-[var(--dark-700)] hover:border-[var(--dark-600)] transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-[var(--dark-900)] text-white">
                    {template.type}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-2">{template.name}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                    >
                      <Paintbrush className="mr-1 h-4 w-4" /> Edit
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                    >
                      <ArrowDownToLine className="mr-1 h-4 w-4" /> Unduh
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal Penarikan Komisi */}
      <WithdrawalModal 
        isOpen={isWithdrawalModalOpen} 
        onClose={handleCloseWithdrawalModal}
        availableAmount={availableCommission}
      />

      {/* Modal Insight Link Referral */}
      <ReferralInsightsModal 
        isOpen={isInsightsModalOpen} 
        onClose={handleCloseInsightsModal}
      />

      {/* Modal Daftar Mitra */}
      <DataTableModal
        isOpen={isMitraModalOpen}
        onClose={handleCloseMitraModal}
        title="Daftar Lengkap Mitra"
        description="Daftar seluruh mitra yang telah bergabung dengan Anda."
        data={mitraData}
        type="mitra"
      />

      {/* Modal Daftar Konsumen */}
      <DataTableModal
        isOpen={isKonsumenModalOpen}
        onClose={handleCloseKonsumenModal}
        title="Daftar Lengkap Konsumen"
        description="Daftar seluruh konsumen yang telah bergabung dengan Anda."
        data={konsumenData}
        type="konsumen"
      />
    </div>
  );
}

// Utility untuk menggabungkan nama kelas
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Komponen Card List untuk tampilan mobile
interface MobileCardListProps {
  data: Array<any>;
  type: 'mitra' | 'konsumen';
  onClick: () => void;
}

function MobileCardList({ data, type, onClick }: MobileCardListProps) {
  return (
    <div className="space-y-3 md:hidden">
      {data.map((item, index) => (
        <Card key={item.id} className="bg-[var(--dark-800)] border-[var(--dark-700)] p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage 
                src={`https://randomuser.me/api/portraits/${index % 2 ? 'women' : 'men'}/${(index % 30) + 1}.jpg`} 
                alt={item.name} 
              />
              <AvatarFallback className="bg-[var(--dark-700)] text-white">
                {item.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-medium truncate">{item.name}</h4>
                <Badge className={cn(
                  "text-xs",
                  item.status === "Aktif" 
                    ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                    : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                )}>
                  {item.status}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-[var(--dark-400)] mt-1">
                <span className="truncate">{item.phone}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-3 text-xs">
                  <span className="text-[var(--dark-400)]">Bergabung: <span className="text-white">{item.joinDate}</span></span>
                  <span className="text-[var(--dark-400)]">Trx: <span className="text-white">{item.transactions}</span></span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-[var(--dark-400)] hover:text-white hover:bg-[var(--dark-700)]"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click propagation
                    // Disini bisa ditambahkan fungsi untuk melihat detail
                    alert(`Melihat detail ${item.name}`);
                  }}
                >
                  <EyeIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      
      <Button 
        variant="ghost" 
        className="text-[var(--accent-green)] hover:text-[var(--accent-green)]/80 w-full py-3"
        onClick={onClick}
      >
        Lihat Semua {type === 'mitra' ? 'Mitra' : 'Konsumen'} ({data.length})
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}