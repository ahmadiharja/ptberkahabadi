import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader2, Send, User, UserCheck } from "lucide-react";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [referralCode, setReferralCode] = useState("BAABADI123");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  // Function to request OTP
  const handleRequestOTP = () => {
    if (!whatsappNumber) {
      toast({
        title: "Nomor WhatsApp diperlukan",
        description: "Silakan masukkan nomor WhatsApp Anda untuk menerima kode OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
      toast({
        title: "Kode OTP Terkirim",
        description: "Kode OTP telah dikirim ke nomor WhatsApp Anda",
      });
    }, 1500);
  };

  // Function to verify OTP
  const handleVerifyOTP = () => {
    if (!otpCode) {
      toast({
        title: "Kode OTP diperlukan",
        description: "Silakan masukkan kode OTP yang telah dikirim",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpVerified(true);
      toast({
        title: "Verifikasi Berhasil",
        description: "Kode OTP telah diverifikasi",
      });
    }, 1500);
  };

  // Function to handle registration submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!username || !fullName || !email || !password || !confirmPassword || !whatsappNumber) {
      toast({
        title: "Data tidak lengkap",
        description: "Silakan lengkapi semua data yang diperlukan",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password tidak cocok",
        description: "Password dan konfirmasi password harus sama",
        variant: "destructive",
      });
      return;
    }

    if (!isOtpVerified) {
      toast({
        title: "Verifikasi OTP diperlukan",
        description: "Silakan verifikasi nomor WhatsApp Anda dengan kode OTP",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessCard(true);
      
      // Close success card and redirect after 2 seconds
      setTimeout(() => {
        setShowSuccessCard(false);
        onClose();
        setLocation("/member");
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-[var(--dark-800)] border-[var(--dark-700)] text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-white">Daftar Mitra Baru</DialogTitle>
            <DialogDescription className="text-[var(--dark-400)]">
              Silakan lengkapi formulir di bawah ini untuk mendaftar sebagai mitra.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2">
            <Card className="p-3 bg-[var(--dark-700)] border-[var(--dark-600)] mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-[var(--accent-green)]">
                  <UserCheck className="h-4 w-4 text-black" />
                </div>
                <div>
                  <p className="text-sm text-white">Kamu diundang oleh:</p>
                  <p className="text-sm font-medium text-[var(--accent-green)]">PT Berkah Abadi</p>
                </div>
              </div>
            </Card>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="referralCode" className="text-[var(--dark-300)]">Kode Referral</Label>
                  <Input
                    id="referralCode"
                    placeholder="Masukkan kode referral"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    readOnly
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="username" className="text-[var(--dark-300)]">Username</Label>
                  <Input
                    id="username"
                    placeholder="Masukkan username"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="fullName" className="text-[var(--dark-300)]">Nama Lengkap</Label>
                  <Input
                    id="fullName"
                    placeholder="Masukkan nama lengkap"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[var(--dark-300)]">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan alamat email"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-[var(--dark-300)]">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan password"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword" className="text-[var(--dark-300)]">Konfirmasi Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Konfirmasi password"
                    className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="whatsappNumber" className="text-[var(--dark-300)]">Nomor WhatsApp</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="whatsappNumber"
                      placeholder="Contoh: 08123456789"
                      className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      disabled={isOtpSent}
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className={`min-w-24 ${
                        isOtpSent
                          ? isOtpVerified
                            ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/50"
                            : "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-blue-500/50"
                          : "border-[var(--dark-600)] text-[var(--dark-400)]"
                      }`}
                      onClick={handleRequestOTP}
                      disabled={isLoading || isOtpVerified || !whatsappNumber}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                      ) : isOtpVerified ? (
                        <>
                          <Check className="h-4 w-4 mr-1" /> Terverifikasi
                        </>
                      ) : isOtpSent ? (
                        "Kirim Ulang"
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-1" /> Kirim OTP
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {isOtpSent && !isOtpVerified && (
                  <div className="grid gap-2">
                    <Label htmlFor="otpCode" className="text-[var(--dark-300)]">Kode OTP</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="otpCode"
                        placeholder="Masukkan kode OTP"
                        className="bg-[var(--dark-900)] border-[var(--dark-700)] text-white"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                      />
                      <Button
                        type="button"
                        size="sm"
                        className="min-w-24 bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                        onClick={handleVerifyOTP}
                        disabled={isLoading || !otpCode}
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Verifikasi"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <DialogFooter className="mt-6 flex-col sm:flex-col">
                <Button
                  type="submit"
                  className="w-full bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                  disabled={isSubmitting || !isOtpVerified}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Mendaftar...
                    </>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Card */}
      <Dialog open={showSuccessCard} onOpenChange={() => setShowSuccessCard(false)}>
        <DialogContent className="sm:max-w-[400px] bg-[var(--dark-800)] border-[var(--dark-700)] text-white">
          <div className="py-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-green)] flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">Pendaftaran Berhasil!</h2>
            <p className="text-[var(--dark-400)]">
              Selamat datang di keluarga PT Berkah Abadi. Anda akan diarahkan ke halaman member.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}