import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Heart, HelpCircle, Bell, Lock, Settings as SettingsIcon, ChevronRight, ArrowLeft, MapPin, Plus, Edit, Trash2, X, CreditCard, CheckCircle2 } from "lucide-react";
import { Donasi } from "./donasi";
import { Bantuan } from "./bantuan";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface PengaturanProps {
  activeTab?: string;
}

// Setting menu items (digunakan untuk tampilan mobile dan desktop)
const settingMenuItems = [
  { id: "profile", name: "Profil", icon: User, href: "/member/pengaturan/profile" },
  { id: "shipping", name: "Alamat Pengiriman", icon: MapPin, href: "/member/pengaturan/shipping" },
  { id: "rekening", name: "Pengaturan Rekening", icon: CreditCard, href: "/member/pengaturan/rekening" },
  { id: "donasi", name: "Donasi", icon: Heart, href: "/member/pengaturan/donasi" },
  { id: "bantuan", name: "Bantuan", icon: HelpCircle, href: "/member/pengaturan/bantuan" },
];

export function Pengaturan({ activeTab = "profile" }: PengaturanProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [location, navigate] = useLocation();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);
  const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
  
  // Update current tab when prop changes
  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  // Check if mobile on mount and when window size changes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint in Tailwind
    };

    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Handle menu item click in mobile view
  const handleMenuItemClick = (item: typeof settingMenuItems[0]) => {
    if (isMobile) {
      navigate(item.href); // Navigate to the specific settings page
    } else {
      setCurrentTab(item.id); // Just change the tab in desktop view
    }
  };

  // Check if we're on a specific settings page in mobile view
  const isSettingsSubpage = location.includes('/member/pengaturan/') && location !== '/member/pengaturan';
  const currentSettingPage = isSettingsSubpage ? location.split('/').pop() : null;

  // Function to toggle the add address modal
  const toggleAddAddressModal = () => {
    setIsAddAddressModalOpen(!isAddAddressModalOpen);
  };

  // Function to toggle the add account modal
  const toggleAddAccountModal = () => {
    setIsAddAccountModalOpen(!isAddAccountModalOpen);
  };

  // Render settings menu list (for mobile)
  const renderSettingsMenu = () => {
    return (
      <Card className="bg-[var(--dark-800)] border-[var(--dark-700)]">
        <div className="p-2">
          {settingMenuItems.map((item) => (
            <button
              key={item.id}
              className="w-full text-left px-4 py-3 flex items-center justify-between rounded-md mb-1 text-white hover:bg-[var(--dark-900)] transition-colors"
              onClick={() => handleMenuItemClick(item)}
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-3 text-[var(--dark-400)]" />
                <span>{item.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-[var(--dark-400)]" />
            </button>
          ))}
        </div>
      </Card>
    );
  };

  // Render specific settings content based on the current tab/page
  const renderSettingContent = (tabId: string) => {
    switch(tabId) {
      case "profile":
        return (
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)]">
            {/* Profile Header with Avatar */}
            <div className="p-6 border-b border-[var(--dark-700)] flex flex-col sm:flex-row items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[var(--dark-700)] border-2 border-[var(--dark-600)] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-[var(--accent-green)] text-black p-1.5 rounded-full hover:bg-[var(--accent-green)]/90 transition-colors">
                  <User className="h-4 w-4" />
                </button>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium text-white">Ahmad Fadhil</h3>
                <p className="text-[var(--dark-400)]">Mitra Berkah Abadi</p>
                <p className="text-[var(--accent-green)] text-sm">ID: BAABADI123</p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="p-6">
              <h2 className="text-xl font-medium text-white mb-6">Informasi Pribadi</h2>
              
              <div className="space-y-6">
                {/* Nama Lengkap */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm text-white">Nama Lengkap</label>
                  <Input 
                    id="fullName"
                    placeholder="Masukkan nama lengkap"
                    defaultValue="Ahmad Fadhil"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>

                {/* Nomor Telepon */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-white">Nomor Telepon</label>
                  <Input 
                    id="phone"
                    placeholder="Contoh: 081234567890"
                    defaultValue="081234567890"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                  <p className="text-xs text-[var(--dark-400)]">
                    Pastikan nomor telepon Anda aktif dan dapat menerima SMS.
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="contoh@email.com"
                    defaultValue="ahmad.fadhil@example.com"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>

                {/* Alamat */}
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm text-white">Alamat</label>
                  <textarea 
                    id="address"
                    rows={3}
                    placeholder="Masukkan alamat lengkap"
                    defaultValue="Jl. Contoh No. 123, Kelurahan Contoh, Kecamatan Contoh, Jakarta Selatan, 12345"
                    className="w-full rounded-md bg-[var(--dark-900)] border border-[var(--dark-700)] text-white p-3 text-sm focus:outline-none focus:border-[var(--accent-green)]"
                  />
                </div>
              </div>

              <div className="border-t border-[var(--dark-700)] my-6 pt-6">
                <h2 className="text-xl font-medium text-white mb-6">Keamanan Akun</h2>
                
                <div className="space-y-6">
                  {/* Password Lama */}
                  <div className="space-y-2">
                    <label htmlFor="currentPassword" className="text-sm text-white">Password Saat Ini</label>
                    <Input 
                      id="currentPassword"
                      type="password"
                      placeholder="Masukkan password saat ini"
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>

                  {/* Password Baru */}
                  <div className="space-y-2">
                    <label htmlFor="newPassword" className="text-sm text-white">Password Baru</label>
                    <Input 
                      id="newPassword"
                      type="password"
                      placeholder="Masukkan password baru"
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                    <p className="text-xs text-[var(--dark-400)]">
                      Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, dan angka.
                    </p>
                  </div>

                  {/* Konfirmasi Password */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm text-white">Konfirmasi Password</label>
                    <Input 
                      id="confirmPassword"
                      type="password"
                      placeholder="Masukkan ulang password baru"
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
                >
                  Batal
                </Button>
                <Button
                  className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                >
                  Simpan Perubahan
                </Button>
              </div>
            </div>
          </Card>
        );
      case "shipping":
        return (
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="p-6 border-b border-[var(--dark-700)] flex justify-between items-center">
              <h2 className="text-xl font-medium text-white">Alamat Pengiriman</h2>
              <Button 
                className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                size="sm"
                onClick={toggleAddAddressModal}
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Alamat
              </Button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {/* Default Address */}
                <div className="bg-[var(--dark-900)] border-2 border-[var(--accent-green)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">Alamat Rumah</h3>
                      <Badge className="ml-2 bg-[var(--accent-green)] text-black text-xs">Utama</Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil</p>
                    <p className="text-[var(--dark-400)] text-sm">081234567890</p>
                    <p className="text-[var(--dark-400)] text-sm">
                      Jl. Contoh No. 123, Kelurahan Contoh, Kecamatan Contoh, Jakarta Selatan, 12345
                    </p>
                  </div>
                </div>

                {/* Other Addresses */}
                <div className="bg-[var(--dark-900)] border border-[var(--dark-700)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">Alamat Kantor</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                      >
                        Jadikan Utama
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil</p>
                    <p className="text-[var(--dark-400)] text-sm">081234567890</p>
                    <p className="text-[var(--dark-400)] text-sm">
                      Gedung Office Tower Lt. 5, Jl. Bisnis Raya No. 10, Jakarta Pusat, 10110
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--dark-900)] border border-[var(--dark-700)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">Alamat Orang Tua</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                      >
                        Jadikan Utama
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil (Untuk Orang Tua)</p>
                    <p className="text-[var(--dark-400)] text-sm">081234567890</p>
                    <p className="text-[var(--dark-400)] text-sm">
                      Perumahan Indah Blok C5 No. 7, Kelurahan Sejahtera, Kecamatan Bahagia, Bandung, Jawa Barat, 40115
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add Address Modal */}
            <AddAddressModal />
          </Card>
        );
      case "rekening":
        return (
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="p-6 border-b border-[var(--dark-700)] flex justify-between items-center">
              <h2 className="text-xl font-medium text-white">Pengaturan Rekening</h2>
              <Button 
                className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                size="sm"
                onClick={toggleAddAccountModal}
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Rekening
              </Button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {/* Default Bank Account */}
                <div className="bg-[var(--dark-900)] border-2 border-[var(--accent-green)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">Bank BCA</h3>
                      <Badge className="ml-2 bg-[var(--accent-green)] text-black text-xs">Utama</Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil</p>
                    <p className="text-[var(--dark-400)] text-sm">1234567890</p>
                    <div className="flex items-center mt-2 text-xs text-[var(--accent-green)]">
                      <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                      <span>Terverifikasi</span>
                    </div>
                  </div>
                </div>

                {/* Other Bank Accounts */}
                <div className="bg-[var(--dark-900)] border border-[var(--dark-700)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">Bank Mandiri</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                      >
                        Jadikan Utama
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil</p>
                    <p className="text-[var(--dark-400)] text-sm">9876543210</p>
                    <div className="flex items-center mt-2 text-xs text-[var(--accent-green)]">
                      <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                      <span>Terverifikasi</span>
                    </div>
                  </div>
                </div>

                {/* E-Wallet */}
                <div className="bg-[var(--dark-900)] border border-[var(--dark-700)] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">GoPay</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
                      >
                        Jadikan Utama
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white">Ahmad Fadhil</p>
                    <p className="text-[var(--dark-400)] text-sm">081234567890</p>
                    <div className="flex items-center mt-2 text-xs text-[var(--accent-green)]">
                      <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                      <span>Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Add Account Modal */}
            <AddAccountModal />
          </Card>
        );
      case "donasi":
        return <Donasi />;
      case "bantuan":
        return <Bantuan />;
      default:
        return null;
    }
  };

  // Render the back button for mobile subpages
  const renderBackButton = () => {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-4 text-[var(--dark-400)] hover:text-white"
        onClick={() => navigate('/member/pengaturan')}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Kembali ke Pengaturan
      </Button>
    );
  };

  // Add Address Modal Component
  const AddAddressModal = () => {
    if (!isAddAddressModalOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-[var(--dark-800)] border border-[var(--dark-700)] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
          <div className="p-4 border-b border-[var(--dark-700)] flex justify-between items-center sticky top-0 bg-[var(--dark-800)]">
            <h3 className="text-lg font-medium text-white">Tambah Alamat Baru</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
              onClick={toggleAddAddressModal}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Judul Alamat */}
                <div className="space-y-2">
                  <label htmlFor="addressTitle" className="text-sm text-white">Judul Alamat</label>
                  <Input 
                    id="addressTitle"
                    placeholder="Contoh: Rumah, Kantor, dll."
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
                
                {/* Nama Penerima */}
                <div className="space-y-2">
                  <label htmlFor="recipientName" className="text-sm text-white">Nama Penerima</label>
                  <Input 
                    id="recipientName"
                    placeholder="Nama lengkap penerima"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
              </div>
              
              {/* Nomor Telepon */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm text-white">Nomor Telepon</label>
                <Input 
                  id="phoneNumber"
                  placeholder="Contoh: 081234567890"
                  className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                />
              </div>
              
              {/* Alamat Lengkap */}
              <div className="space-y-2">
                <label htmlFor="fullAddress" className="text-sm text-white">Alamat Lengkap</label>
                <textarea 
                  id="fullAddress"
                  rows={3}
                  placeholder="Nama jalan, nomor rumah, RT/RW"
                  className="w-full rounded-md bg-[var(--dark-900)] border border-[var(--dark-700)] text-white p-3 text-sm focus:outline-none focus:border-[var(--accent-green)]"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kelurahan */}
                <div className="space-y-2">
                  <label htmlFor="kelurahan" className="text-sm text-white">Kelurahan/Desa</label>
                  <Input 
                    id="kelurahan"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
                
                {/* Kecamatan */}
                <div className="space-y-2">
                  <label htmlFor="kecamatan" className="text-sm text-white">Kecamatan</label>
                  <Input 
                    id="kecamatan"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kota/Kabupaten */}
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm text-white">Kota/Kabupaten</label>
                  <Input 
                    id="city"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
                
                {/* Provinsi */}
                <div className="space-y-2">
                  <label htmlFor="province" className="text-sm text-white">Provinsi</label>
                  <Input 
                    id="province"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                  />
                </div>
              </div>
              
              {/* Kode Pos */}
              <div className="space-y-2">
                <label htmlFor="postalCode" className="text-sm text-white">Kode Pos</label>
                <Input 
                  id="postalCode"
                  className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white w-full sm:w-1/3"
                />
              </div>
              
              {/* Jadikan Alamat Utama */}
              <div className="flex items-center space-x-2 mt-2">
                <input 
                  type="checkbox" 
                  id="defaultAddress" 
                  className="rounded border-[var(--dark-600)] bg-[var(--dark-900)] text-[var(--accent-green)] focus:ring-[var(--accent-green)]"
                />
                <label htmlFor="defaultAddress" className="text-sm text-white">
                  Jadikan sebagai alamat utama
                </label>
              </div>
              
              <div className="flex space-x-3 mt-4 pt-2 border-t border-[var(--dark-700)]">
                <Button
                  variant="outline"
                  className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
                  onClick={toggleAddAddressModal}
                >
                  Batal
                </Button>
                <Button
                  className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                >
                  Simpan Alamat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Add Account Modal Component
  const AddAccountModal = () => {
    if (!isAddAccountModalOpen) return null;
    
    const [accountType, setAccountType] = useState<'bank' | 'ewallet'>('bank');
    const [selectedBank, setSelectedBank] = useState<string>('');
    const [selectedEwallet, setSelectedEwallet] = useState<string>('');
    
    const bankOptions = [
      { value: 'bca', label: 'Bank BCA' },
      { value: 'mandiri', label: 'Bank Mandiri' },
      { value: 'bni', label: 'Bank BNI' },
      { value: 'bri', label: 'Bank BRI' },
      { value: 'cimb', label: 'Bank CIMB Niaga' },
      { value: 'permata', label: 'Bank Permata' },
      { value: 'other', label: 'Bank Lainnya' }
    ];
    
    const ewalletOptions = [
      { value: 'gopay', label: 'GoPay' },
      { value: 'ovo', label: 'OVO' },
      { value: 'dana', label: 'DANA' },
      { value: 'linkaja', label: 'LinkAja' },
      { value: 'shopeepay', label: 'ShopeePay' }
    ];
    
    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-[var(--dark-800)] border border-[var(--dark-700)] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
          <div className="p-4 border-b border-[var(--dark-700)] flex justify-between items-center sticky top-0 bg-[var(--dark-800)]">
            <h3 className="text-lg font-medium text-white">Tambah Rekening Baru</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 text-[var(--dark-400)] hover:text-white"
              onClick={toggleAddAccountModal}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {/* Account Type Selector */}
              <div className="space-y-2">
                <label className="text-sm text-white">Jenis Rekening</label>
                <div className="flex rounded-md overflow-hidden">
                  <button 
                    className={`flex-1 py-2 text-center ${accountType === 'bank' 
                      ? 'bg-[var(--accent-green)] text-black' 
                      : 'bg-[var(--dark-900)] text-white hover:bg-[var(--dark-800)]'
                    }`}
                    onClick={() => setAccountType('bank')}
                  >
                    Bank
                  </button>
                  <button 
                    className={`flex-1 py-2 text-center ${accountType === 'ewallet' 
                      ? 'bg-[var(--accent-green)] text-black' 
                      : 'bg-[var(--dark-900)] text-white hover:bg-[var(--dark-800)]'
                    }`}
                    onClick={() => setAccountType('ewallet')}
                  >
                    E-Wallet
                  </button>
                </div>
              </div>
              
              {/* Bank Selection (shown if accountType is 'bank') */}
              {accountType === 'bank' && (
                <div className="space-y-2">
                  <label htmlFor="bankSelection" className="text-sm text-white">Pilih Bank</label>
                  <select 
                    id="bankSelection" 
                    className="w-full rounded-md bg-[var(--dark-900)] border border-[var(--dark-700)] text-white p-2 text-sm focus:outline-none focus:border-[var(--accent-green)]"
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                  >
                    <option value="" disabled>Pilih Bank</option>
                    {bankOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* E-Wallet Selection (shown if accountType is 'ewallet') */}
              {accountType === 'ewallet' && (
                <div className="space-y-2">
                  <label htmlFor="ewalletSelection" className="text-sm text-white">Pilih E-Wallet</label>
                  <select 
                    id="ewalletSelection" 
                    className="w-full rounded-md bg-[var(--dark-900)] border border-[var(--dark-700)] text-white p-2 text-sm focus:outline-none focus:border-[var(--accent-green)]"
                    value={selectedEwallet}
                    onChange={(e) => setSelectedEwallet(e.target.value)}
                  >
                    <option value="" disabled>Pilih E-Wallet</option>
                    {ewalletOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* Bank Account Name */}
              <div className="space-y-2">
                <label htmlFor="accountName" className="text-sm text-white">Nama Pemilik Rekening</label>
                <Input 
                  id="accountName"
                  placeholder="Masukkan nama sesuai rekening/akun"
                  className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                />
              </div>
              
              {/* Account Number */}
              <div className="space-y-2">
                <label htmlFor="accountNumber" className="text-sm text-white">
                  {accountType === 'bank' ? 'Nomor Rekening' : 'Nomor Telepon'}
                </label>
                <Input 
                  id="accountNumber"
                  placeholder={accountType === 'bank' ? "Contoh: 1234567890" : "Contoh: 081234567890"}
                  className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                />
                <p className="text-xs text-[var(--dark-400)]">
                  Pastikan nomor yang Anda masukkan sudah benar dan aktif.
                </p>
              </div>
              
              {/* Make as Default */}
              <div className="flex items-center space-x-2 mt-4">
                <input 
                  type="checkbox" 
                  id="defaultAccount" 
                  className="rounded border-[var(--dark-600)] bg-[var(--dark-900)] text-[var(--accent-green)] focus:ring-[var(--accent-green)]"
                />
                <label htmlFor="defaultAccount" className="text-sm text-white">
                  Jadikan sebagai rekening utama
                </label>
              </div>
              
              <div className="flex space-x-3 mt-4 pt-4 border-t border-[var(--dark-700)]">
                <Button
                  variant="outline"
                  className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
                  onClick={toggleAddAccountModal}
                >
                  Batal
                </Button>
                <Button
                  className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                >
                  Simpan Rekening
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // If on mobile and at a settings subpage, show the specific content with a back button
  if (isMobile && isSettingsSubpage && currentSettingPage) {
    return (
      <div className="space-y-4">
        {renderBackButton()}
        <div className="mb-4">
          <h1 className="text-2xl font-medium text-white">
            {settingMenuItems.find(item => item.id === currentSettingPage)?.name || "Pengaturan"}
          </h1>
        </div>
        {renderSettingContent(currentSettingPage)}
      </div>
    );
  }

  // On mobile main settings page, show just the menu
  if (isMobile) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-medium text-white">Pengaturan</h1>
          <p className="text-[var(--dark-400)]">
            Kelola akun dan preferensi Anda.
          </p>
        </div>
        {renderSettingsMenu()}
      </div>
    );
  }

  // On desktop, show the tabbed interface
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Pengaturan</h1>
        <p className="text-[var(--dark-400)]">
          Kelola akun dan preferensi Anda.
        </p>
      </div>

      {/* Desktop layout with side menu on left */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Menu (left side on desktop) */}
        <div className="md:w-64 lg:w-72">
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="p-2">
              {settingMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md mb-1 flex items-center transition-colors
                    ${currentTab === item.id 
                      ? 'bg-[var(--accent-green)] text-black' 
                      : 'text-white hover:bg-[var(--dark-900)]'
                    }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${currentTab === item.id ? 'text-black' : 'text-[var(--dark-400)]'}`} />
                  <span>{item.name}</span>
                  {currentTab === item.id && (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </button>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Content area (right side on desktop) */}
        <div className="flex-1">
          {renderSettingContent(currentTab)}
        </div>
      </div>
    </div>
  );
} 