import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  ShoppingBag, 
  MapPin, 
  CreditCard, 
  Check, 
  Truck, 
  AlertCircle,
  Trash,
  ChevronRight,
  CalendarDays
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Dummy cart data
const cartItems = [
  {
    id: 1,
    name: "VB Pro Nusantara",
    slug: "vb-pro-nusantara",
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    price: 224000,
    quantity: 2,
    unit: "Slop",
    commission: 26000
  },
  {
    id: 2,
    name: "DK - Drajat Karunia",
    slug: "dk-drajat-karunia",
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    price: 224000,
    quantity: 1,
    unit: "Slop",
    commission: 26000
  }
];

// Opsi pengiriman dummy
const shippingOptions = [
  { id: "regular", name: "Regular", price: 20000, days: "2-3" },
  { id: "express", name: "Express", price: 35000, days: "1" },
  { id: "same-day", name: "Same Day", price: 50000, days: "0" },
];

// Opsi pembayaran dummy
const paymentOptions = [
  { id: "bank-transfer", name: "Transfer Bank", description: "BCA, Mandiri, BNI, BRI", icon: "💳" },
  { id: "e-wallet", name: "E-Wallet", description: "GoPay, OVO, DANA, ShopeePay", icon: "📱" },
  { id: "virtual-account", name: "Virtual Account", description: "Pembayaran melalui ATM/M-Banking", icon: "🏦" },
  { id: "cod", name: "Cash on Delivery", description: "Bayar saat barang sampai", icon: "💰" },
];

export function Checkout() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState<"review" | "shipping" | "payment" | "confirmation">("review");
  const [shippingAddress, setShippingAddress] = useState({
    name: "Adi Berkah",
    phone: "08123456789",
    address: "Jl. Cisaranten Kulon No. 123",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40293",
    notes: ""
  });
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].id);
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].id);

  // Calculate total items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Calculate total commission
  const totalCommission = cartItems.reduce((acc, item) => acc + (item.commission * item.quantity), 0);
  
  // Get selected shipping fee
  const shippingFee = shippingOptions.find(option => option.id === selectedShipping)?.price || 0;
  
  // Calculate total payment
  const total = subtotal + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (step === "review") {
      setStep("shipping");
    } else if (step === "shipping") {
      setStep("payment");
    } else if (step === "payment") {
      setStep("confirmation");
      toast({
        title: "Pesanan Berhasil",
        description: "Pesanan Anda telah berhasil dibuat. Silakan selesaikan pembayaran.",
        type: "success"
      });
    } else if (step === "confirmation") {
      navigate("/member/order");
    }
  };

  const handleBack = () => {
    if (step === "shipping") {
      setStep("review");
    } else if (step === "payment") {
      setStep("shipping");
    } else if (step === "confirmation") {
      setStep("payment");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Progress Indicator */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-medium text-white">Checkout</h1>
          <p className="text-[var(--dark-400)]">Selesaikan pembelian Anda</p>
        </div>

        {/* Progress Steps */}
        <div className="mt-4 md:mt-0 flex w-full md:w-auto justify-between">
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
              step === "review" || step === "shipping" || step === "payment" || step === "confirmation"
                ? "bg-[var(--accent-green)] text-black"
                : "bg-[var(--dark-700)] text-[var(--dark-400)]"
            }`}>
              <ShoppingBag className="h-4 w-4" />
            </div>
            <span className="hidden md:block text-xs ml-2 text-white">
              Review
            </span>
          </div>
          <div className="h-px w-8 my-auto bg-[var(--dark-700)]"></div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
              step === "shipping" || step === "payment" || step === "confirmation"
                ? "bg-[var(--accent-green)] text-black"
                : "bg-[var(--dark-700)] text-[var(--dark-400)]"
            }`}>
              <MapPin className="h-4 w-4" />
            </div>
            <span className="hidden md:block text-xs ml-2 text-white">
              Alamat
            </span>
          </div>
          <div className="h-px w-8 my-auto bg-[var(--dark-700)]"></div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
              step === "payment" || step === "confirmation"
                ? "bg-[var(--accent-green)] text-black"
                : "bg-[var(--dark-700)] text-[var(--dark-400)]"
            }`}>
              <CreditCard className="h-4 w-4" />
            </div>
            <span className="hidden md:block text-xs ml-2 text-white">
              Pembayaran
            </span>
          </div>
          <div className="h-px w-8 my-auto bg-[var(--dark-700)]"></div>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
              step === "confirmation"
                ? "bg-[var(--accent-green)] text-black"
                : "bg-[var(--dark-700)] text-[var(--dark-400)]"
            }`}>
              <Check className="h-4 w-4" />
            </div>
            <span className="hidden md:block text-xs ml-2 text-white">
              Konfirmasi
            </span>
          </div>
        </div>
      </div>

      {/* Back Link */}
      {step !== "confirmation" && (
        <button
          onClick={handleBack}
          className="flex items-center text-[var(--dark-400)] hover:text-white mb-2"
          disabled={step === "review"}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Based on Step */}
        <div className="md:col-span-2 space-y-6">
          {/* Step 1: Review Items */}
          {step === "review" && (
            <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
              <div className="p-5 border-b border-[var(--dark-700)]">
                <h2 className="text-lg font-medium text-white">Keranjang Belanja</h2>
                <p className="text-sm text-[var(--dark-400)]">{totalItems} item dalam keranjang</p>
              </div>

              <div className="divide-y divide-[var(--dark-700)]">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-5 flex items-center">
                    <div className="h-16 w-16 bg-[var(--dark-700)] rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-[var(--dark-400)] text-sm">{item.quantity} {item.unit}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[var(--accent-green)] text-sm">
                          Komisi: Rp{(item.commission * item.quantity).toLocaleString('id-ID')}
                        </p>
                        <button className="text-red-400 hover:text-red-500 flex items-center text-xs">
                          <Trash className="h-3 w-3 mr-1" /> Hapus
                        </button>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-white font-medium">
                        Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                      <p className="text-[var(--dark-400)] text-xs">
                        @Rp{item.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Step 2: Shipping Address */}
          {step === "shipping" && (
            <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
              <div className="p-5 border-b border-[var(--dark-700)]">
                <h2 className="text-lg font-medium text-white">Alamat Pengiriman</h2>
                <p className="text-sm text-[var(--dark-400)]">Masukkan alamat pengiriman Anda</p>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Nama Penerima
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={shippingAddress.name}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Nomor Telepon
                    </label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={shippingAddress.phone}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Alamat Lengkap
                    </label>
                    <Textarea 
                      id="address"
                      name="address"
                      value={shippingAddress.address}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Kota
                    </label>
                    <Input 
                      id="city"
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Provinsi
                    </label>
                    <Input 
                      id="province"
                      name="province"
                      value={shippingAddress.province}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Kode Pos
                    </label>
                    <Input 
                      id="postalCode"
                      name="postalCode"
                      value={shippingAddress.postalCode}
                      onChange={handleChange}
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-medium text-[var(--dark-400)] mb-1">
                      Catatan (Opsional)
                    </label>
                    <Textarea 
                      id="notes"
                      name="notes"
                      value={shippingAddress.notes}
                      onChange={handleChange}
                      placeholder="Misalnya: Letakkan di depan pagar, hubungi saat pengiriman, dll."
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Payment Method */}
          {step === "payment" && (
            <div className="space-y-6">
              {/* Shipping Options */}
              <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
                <div className="p-5 border-b border-[var(--dark-700)]">
                  <h2 className="text-lg font-medium text-white">Opsi Pengiriman</h2>
                  <p className="text-sm text-[var(--dark-400)]">Pilih metode pengiriman</p>
                </div>

                <div className="p-5 space-y-3">
                  {shippingOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`p-4 rounded-lg border cursor-pointer ${
                        selectedShipping === option.id 
                          ? 'border-[var(--accent-green)] bg-[var(--accent-green)]/5' 
                          : 'border-[var(--dark-700)] hover:border-[var(--dark-600)]'
                      }`}
                      onClick={() => setSelectedShipping(option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedShipping === option.id 
                              ? 'border-[var(--accent-green)]' 
                              : 'border-[var(--dark-400)]'
                          }`}>
                            {selectedShipping === option.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]"></div>
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-white font-medium">{option.name}</p>
                            <div className="flex items-center text-sm text-[var(--dark-400)]">
                              <Truck className="h-3.5 w-3.5 mr-1.5" />
                              <span>Estimasi {option.days} hari</span>
                            </div>
                          </div>
                        </div>
                        <p className="font-medium text-white">Rp{option.price.toLocaleString('id-ID')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Payment Methods */}
              <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
                <div className="p-5 border-b border-[var(--dark-700)]">
                  <h2 className="text-lg font-medium text-white">Metode Pembayaran</h2>
                  <p className="text-sm text-[var(--dark-400)]">Pilih metode pembayaran yang diinginkan</p>
                </div>

                <div className="p-5 space-y-3">
                  {paymentOptions.map((option) => (
                    <div 
                      key={option.id}
                      className={`p-4 rounded-lg border cursor-pointer ${
                        selectedPayment === option.id 
                          ? 'border-[var(--accent-green)] bg-[var(--accent-green)]/5' 
                          : 'border-[var(--dark-700)] hover:border-[var(--dark-600)]'
                      }`}
                      onClick={() => setSelectedPayment(option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPayment === option.id 
                              ? 'border-[var(--accent-green)]' 
                              : 'border-[var(--dark-400)]'
                          }`}>
                            {selectedPayment === option.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]"></div>
                            )}
                          </div>
                          <div className="ml-3">
                            <div className="flex items-center">
                              <span className="mr-2">{option.icon}</span>
                              <p className="text-white font-medium">{option.name}</p>
                            </div>
                            <p className="text-sm text-[var(--dark-400)]">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirmation" && (
            <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
              <div className="p-5 border-b border-[var(--dark-700)]">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <h2 className="text-lg font-medium text-white">Pesanan Berhasil Dibuat</h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">Terima Kasih atas Pesanan Anda</h3>
                  <p className="text-[var(--dark-400)]">Order ID: #INV20230524001</p>
                </div>

                <div className="bg-[var(--dark-900)] p-4 rounded-lg border border-[var(--dark-700)]">
                  <h4 className="text-white font-medium mb-3">Detail Pembayaran</h4>
                  
                  <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30 mb-4 flex">
                    <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mr-3" />
                    <div>
                      <p className="text-yellow-400 font-medium">Menunggu Pembayaran</p>
                      <p className="text-sm text-[var(--dark-400)]">Silakan selesaikan pembayaran Anda sebelum:</p>
                      <div className="flex items-center mt-1 text-white">
                        <CalendarDays className="h-4 w-4 mr-1.5 text-yellow-400" />
                        <span>24 Mei 2023, 23:59 WIB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between py-2">
                      <p className="text-[var(--dark-400)]">Metode Pembayaran:</p>
                      <p className="text-white">Transfer Bank BCA</p>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <p className="text-[var(--dark-400)]">Nomor Rekening:</p>
                      <div>
                        <p className="text-white font-medium">8801234567890</p>
                        <p className="text-xs text-[var(--dark-400)]">a.n. PT Berkah Abadi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <p className="text-[var(--dark-400)]">Total Pembayaran:</p>
                      <p className="text-xl font-semibold text-white">Rp{total.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                    Saya Sudah Bayar
                  </Button>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Detail Pengiriman</h4>
                  <div className="bg-[var(--dark-900)] p-4 rounded-lg border border-[var(--dark-700)]">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[var(--accent-green)] mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">{shippingAddress.name}</p>
                        <p className="text-[var(--dark-400)]">{shippingAddress.phone}</p>
                        <p className="text-[var(--dark-400)]">
                          {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.province}, {shippingAddress.postalCode}
                        </p>
                        {shippingAddress.notes && (
                          <p className="text-sm text-[var(--dark-400)] mt-1 italic">
                            Catatan: {shippingAddress.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden sticky top-6">
            <div className="p-5 border-b border-[var(--dark-700)]">
              <h2 className="text-lg font-medium text-white">Ringkasan Pesanan</h2>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between">
                <p className="text-[var(--dark-400)]">Subtotal ({totalItems} item)</p>
                <p className="text-white">Rp{subtotal.toLocaleString('id-ID')}</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-[var(--dark-400)]">Biaya Pengiriman</p>
                <p className="text-white">Rp{shippingFee.toLocaleString('id-ID')}</p>
              </div>

              <div className="pt-3 border-t border-[var(--dark-700)]">
                <div className="flex justify-between">
                  <p className="text-[var(--dark-400)]">Total Komisi</p>
                  <p className="text-[var(--accent-green)]">Rp{totalCommission.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--dark-700)]">
                <div className="flex justify-between">
                  <p className="font-medium text-white">Total</p>
                  <p className="font-semibold text-white">Rp{total.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <Button 
                onClick={handleContinue}
                className="w-full mt-4 bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
              >
                {step === "review" && "Lanjut ke Pengiriman"}
                {step === "shipping" && "Lanjut ke Pembayaran"}
                {step === "payment" && "Konfirmasi Pesanan"}
                {step === "confirmation" && "Kembali ke Halaman Order"}
                <ChevronRight className="ml-1.5 h-4 w-4" />
              </Button>

              {step === "review" && (
                <div className="text-center mt-2">
                  <Link href="/member/produk">
                    <a className="text-sm text-[var(--dark-400)] hover:text-white">
                      Kembali Berbelanja
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 