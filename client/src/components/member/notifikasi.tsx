import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ShoppingBag, Bell, Package, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Simplified notification data
const notificationData = [
  {
    id: "1",
    type: "order",
    title: "Pesanan Dikonfirmasi",
    description: "Pesanan #ORD123456 telah dikonfirmasi dan sedang diproses.",
    date: "Hari ini, 10:30",
    icon: ShoppingBag,
    read: false
  },
  {
    id: "2",
    type: "order",
    title: "Pesanan Dikirim",
    description: "Pesanan #ORD123123 telah dikirim melalui JNE. Estimasi tiba 2-3 hari.",
    date: "Hari ini, 08:45",
    icon: Package,
    read: false
  },
  {
    id: "3",
    type: "promo",
    title: "Promo Spesial Ramadhan",
    description: "Dapatkan diskon 10% untuk pembelian produk premium selama bulan Ramadhan.",
    date: "Kemarin, 14:20",
    icon: DollarSign,
    read: true
  },
  {
    id: "4",
    type: "affiliate",
    title: "Komisi Afiliasi Masuk",
    description: "Anda mendapatkan komisi Rp50.000 dari pembelian mitra anda.",
    date: "3 hari yang lalu",
    icon: Users,
    read: true
  },
  {
    id: "5",
    type: "affiliate",
    title: "Mitra Baru Bergabung",
    description: "Ahmad Rizal telah bergabung melalui kode referral Anda. Anda mendapatkan bonus Rp25.000.",
    date: "1 minggu yang lalu",
    icon: Users,
    read: true
  }
];

export function Notifikasi() {
  const [currentTab, setCurrentTab] = useState("all");
  const [notifications, setNotifications] = useState(notificationData);
  
  // Mark a notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };
  
  // Filter notifications based on current tab
  const filteredNotifications = notifications.filter(notif => {
    if (currentTab === "all") return true;
    if (currentTab === "unread") return !notif.read;
    return notif.type === currentTab;
  });
  
  // Count unread notifications
  const unreadCount = notifications.filter(notif => !notif.read).length;
  
  // Helper for notification icon styles
  const getIconStyles = (type: string) => {
    switch(type) {
      case "order":
        return "bg-blue-900/30 text-blue-400";
      case "promo":
        return "bg-purple-900/30 text-purple-400";
      case "affiliate":
        return "bg-[var(--accent-green)]/20 text-[var(--accent-green)]";
      default:
        return "bg-[var(--dark-700)] text-[var(--dark-400)]";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-medium text-white flex items-center">
            Notifikasi
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-[var(--accent-green)] text-black">
                {unreadCount} baru
              </Badge>
            )}
          </h1>
          <p className="text-[var(--dark-400)]">
            Informasi terbaru untuk Anda
          </p>
        </div>
        {unreadCount > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-[var(--dark-600)] text-[var(--dark-400)] hover:text-white"
            onClick={markAllAsRead}
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Tandai dibaca
          </Button>
        )}
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="bg-[var(--dark-800)] p-1 w-full flex mb-4">
          <TabsTrigger 
            value="all" 
            className="flex-1 data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
          >
            Semua
          </TabsTrigger>
          <TabsTrigger 
            value="unread" 
            className="flex-1 data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
          >
            Belum Dibaca
            {unreadCount > 0 && (
              <span className="ml-1 bg-[var(--dark-900)] text-white text-xs px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger 
            value="order" 
            className="flex-1 data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
          >
            Pesanan
          </TabsTrigger>
        </TabsList>

        <TabsContent value={currentTab} className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <Card 
                key={notification.id}
                className={`p-4 border ${notification.read ? 'border-[var(--dark-700)] bg-[var(--dark-800)]' : 'border-[var(--accent-green)]/50 bg-[var(--dark-800)]'}`}
                onClick={() => !notification.read && markAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${getIconStyles(notification.type)}`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-white">{notification.title}</h3>
                      <span className="text-xs text-[var(--dark-400)]">{notification.date}</span>
                    </div>
                    <p className="text-sm text-[var(--dark-400)] mt-1">
                      {notification.description}
                    </p>
                    {!notification.read && (
                      <div className="mt-2 flex justify-end">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 text-xs text-[var(--accent-green)] hover:bg-[var(--dark-900)]"
                        >
                          Tandai dibaca
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="p-3 rounded-full bg-[var(--dark-800)] mb-3">
                <Bell className="h-5 w-5 text-[var(--dark-400)]" />
              </div>
              <h3 className="text-white font-medium">Tidak ada notifikasi</h3>
              <p className="text-[var(--dark-400)] text-sm mt-1">
                {currentTab === "unread" 
                  ? "Semua notifikasi telah dibaca."
                  : "Belum ada notifikasi untuk kategori ini."}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 