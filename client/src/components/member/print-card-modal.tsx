import { useState } from "react";
import { QrCode, Printer, Download, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PrintCardModalProps {
  referralCode: string;
  userName?: string;
}

export function PrintCardModal({ referralCode, userName = "Ahmad" }: PrintCardModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // URL untuk QR code yang berisi link referral
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://berkah-abadi.com/ref/${referralCode}`;
  
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (printWindow) {
      // Setup HTML content for the print window
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Kartu Nama Afiliasi</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .card {
                width: 8.5cm;
                height: 5.5cm;
                border: 1px solid #ccc;
                border-radius: 10px;
                padding: 15px;
                box-sizing: border-box;
                position: relative;
                margin: 20px auto;
                background: #111114;
                color: white;
                overflow: hidden;
              }
              .logo {
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 15px;
                color: #1b6c35;
              }
              .name {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
              }
              .title {
                font-size: 12px;
                color: #9696a6;
                margin-bottom: 15px;
              }
              .contact {
                font-size: 12px;
                margin-bottom: 5px;
                color: #9696a6;
              }
              .qr-code {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 70px;
                height: 70px;
                background: white;
                padding: 5px;
                border-radius: 5px;
              }
              .referral {
                font-family: monospace;
                font-size: 12px;
                padding: 3px 6px;
                background: rgba(27, 108, 53, 0.2);
                color: #1b6c35;
                border-radius: 4px;
                display: inline-block;
                margin-top: 5px;
              }
              .accent {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 10px;
                background: #1b6c35;
              }
              @media print {
                @page {
                  size: 9cm 6cm;
                  margin: 0;
                }
                .card {
                  margin: 0;
                  border: none;
                  width: 100%;
                  height: 100%;
                }
              }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="logo">BERKAH ABADI</div>
              <div class="name">${userName}</div>
              <div class="title">Partner Afiliasi</div>
              <div class="contact">www.berkah-abadi.com</div>
              <div class="contact">Scan QR code untuk bergabung</div>
              <div class="referral">Kode: ${referralCode}</div>
              <img class="qr-code" src="${qrCodeUrl}" alt="QR Code Referral" />
              <div class="accent"></div>
            </div>
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.close();
                }, 500);
              };
            </script>
          </body>
        </html>
      `);
      
      printWindow.document.close();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="sm" 
          variant="outline" 
          className="text-[var(--accent-green)] border-[var(--accent-green)] hover:bg-[var(--accent-green)]/10 flex-1"
        >
          <QrCode className="mr-2 h-4 w-4" /> Cetak ID Card
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[var(--dark-800)] border-[var(--dark-700)] w-[95vw] max-w-[95vw] md:max-w-2xl p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-white">Preview Kartu Nama</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {/* Preview Kartu */}
          <div className="w-full max-w-sm md:max-w-md mx-auto bg-[var(--dark-900)] rounded-lg overflow-hidden border border-[var(--dark-700)] relative p-4 md:p-6">
            <div className="flex items-start">
              <div>
                <p className="text-[var(--accent-green)] font-bold text-sm">BERKAH ABADI</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" alt="User" />
                    <AvatarFallback className="bg-[var(--accent-green)] text-white">{userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-bold">{userName}</p>
                    <p className="text-[var(--dark-400)] text-xs">Partner Afiliasi</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[var(--dark-400)] text-xs">www.berkah-abadi.com</p>
                  <p className="text-[var(--dark-400)] text-xs">Scan QR code untuk bergabung</p>
                  <div className="mt-1 bg-[var(--accent-green)]/10 rounded px-2 py-1 inline-block">
                    <p className="text-[var(--accent-green)] text-xs font-mono">Kode: {referralCode}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-1 rounded ml-auto">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code" 
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[var(--accent-green)]"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-6">
            <Button
              variant="outline"
              className="text-[var(--dark-400)] border-[var(--dark-600)] w-full md:w-auto"
              onClick={() => setIsOpen(false)}
            >
              <X className="mr-2 h-4 w-4" /> Batal
            </Button>
            <Button 
              className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-white w-full md:w-auto"
              onClick={handlePrint}
            >
              <Printer className="mr-2 h-4 w-4" /> Cetak Kartu
            </Button>
            <Button
              variant="outline"
              className="text-white border-[var(--dark-600)] w-full md:w-auto"
            >
              <Download className="mr-2 h-4 w-4" /> Unduh PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}