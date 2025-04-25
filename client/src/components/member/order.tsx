import { Package, Truck, Clock, ReceiptText, Search, Filter, Calendar, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Link } from "wouter";

// Definisi tipe untuk order
interface OrderType {
  id: string;
  date: string;
  total: number;
  status: "Diproses" | "Dikirim" | "Selesai" | "Dibatalkan";
  items: number;
  products: string[];
  trackingNumber: string | null;
  estimatedArrival: string | null;
}

// Definisi tipe untuk item keranjang
interface CartItemType {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  unit: string;
  commission: number;
  quantity: number;
}

// Dummy data untuk order
const orders: OrderType[] = [
  {
    id: "INV2023120001",
    date: "01 Des 2023",
    total: 224000,
    status: "Dikirim",
    items: 10,
    products: ["Drajat Karunia - 1 Slop"],
    trackingNumber: "JNE123456789",
    estimatedArrival: "03 Des 2023"
  },
  {
    id: "INV2023110015",
    date: "25 Nov 2023",
    total: 448000,
    status: "Selesai",
    items: 20,
    products: ["VBPRO Nusantara - 1 Slop", "Pribumi Classic - 1 Slop"],
    trackingNumber: "SiCepat987654321",
    estimatedArrival: "28 Nov 2023"
  },
  {
    id: "INV2023110010",
    date: "20 Nov 2023",
    total: 224000,
    status: "Diproses",
    items: 10,
    products: ["VBPRO Red - 1 Slop"],
    trackingNumber: null,
    estimatedArrival: null
  },
  {
    id: "INV2023100025",
    date: "30 Okt 2023",
    total: 224000,
    status: "Dibatalkan",
    items: 10,
    products: ["Pribumi Classic - 1 Slop"],
    trackingNumber: null,
    estimatedArrival: null
  }
];

// Dummy data untuk keranjang belanja
const initialCartItems: CartItemType[] = [
  {
    id: 1,
    name: "VB Pro Nusantara",
    slug: "vb-pro-nusantara",
    image: "/assets/images/products/vb-pro-nusantara.jpg",
    price: 224000,
    unit: "Slop",
    commission: 26000,
    quantity: 1
  },
  {
    id: 2,
    name: "DK - Drajat Karunia",
    slug: "dk-drajat-karunia",
    image: "/assets/images/products/dk-drajat-karunia.jpg",
    price: 224000,
    unit: "Slop",
    commission: 26000,
    quantity: 2
  }
];

export function Order() {
  const [activeTab, setActiveTab] = useState("all");
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);
  const [searchTerm, setSearchTerm] = useState("");

  // Hitung total harga dan komisi
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCommission = cartItems.reduce((sum, item) => sum + (item.commission * item.quantity), 0);

  // Fungsi untuk menambah kuantitas produk
  const increaseQuantity = (id: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Fungsi untuk mengurangi kuantitas produk
  const decreaseQuantity = (id: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Filter pesanan berdasarkan search term
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Pesanan Saya</h1>
        <p className="text-[var(--dark-400)]">
          Lihat keranjang dan lacak pesanan Anda.
        </p>
      </div>

      {/* Order Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card className="p-3 sm:p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Total Pesanan</p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1 text-white">{orders.length}</h3>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-[var(--accent-green)]">
              <Package className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </div>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Sedang Dikirim</p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1 text-white">
                {orders.filter(order => order.status === "Dikirim").length}
              </h3>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-[var(--accent-green)]">
              <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </div>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Diproses</p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1 text-white">
                {orders.filter(order => order.status === "Diproses").length}
              </h3>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-[var(--accent-green)]">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </div>
          </div>
        </Card>

        <Card className="p-3 sm:p-4 bg-[var(--dark-800)] border-[var(--dark-700)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[var(--dark-400)]">Keranjang</p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1 text-white">
                {cartItems.length}
              </h3>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-[var(--accent-green)]">
              <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 text-black" />
            </div>
          </div>
        </Card>
      </div>

      {/* Order Tabs and Filters */}
      <Tabs defaultValue="cart" className="w-full">
        <div className="bg-[var(--dark-800)] p-4 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <TabsList className="grid grid-cols-5 gap-2 bg-[var(--dark-900)]">
              <TabsTrigger 
                value="cart" 
                className="text-white data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
                onClick={() => setActiveTab("cart")}
              >
                Keranjang
              </TabsTrigger>
              <TabsTrigger 
                value="all" 
                className="text-white data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
                onClick={() => setActiveTab("all")}
              >
                Semua
              </TabsTrigger>
              <TabsTrigger 
                value="process" 
                className="text-white data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
                onClick={() => setActiveTab("process")}
              >
                Diproses
              </TabsTrigger>
              <TabsTrigger 
                value="shipping" 
                className="text-white data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
                onClick={() => setActiveTab("shipping")}
              >
                Dikirim
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="text-white data-[state=active]:bg-[var(--accent-green)] data-[state=active]:text-black"
                onClick={() => setActiveTab("completed")}
              >
                Selesai
              </TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--dark-400)] h-4 w-4" />
                <Input 
                  placeholder="Cari pesanan..."
                  className="pl-10 bg-[var(--dark-900)] border-[var(--dark-700)] text-white w-full md:w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {activeTab !== "cart" && (
                <>
                  <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)]">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="border-[var(--dark-600)] text-[var(--dark-400)]">
                    <Calendar className="h-4 w-4 mr-2" />
                    Tanggal
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Keranjang Tab */}
        <TabsContent value="cart" className="mt-0 space-y-4">
          {cartItems.length > 0 ? (
            <>
              {/* Cart Items */}
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full sm:w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between mb-2">
                        <Link href={`/member/produk/${item.slug}`}>
                          <a className="text-lg font-medium text-white hover:text-[var(--accent-green)]">
                            {item.name}
                          </a>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[var(--dark-400)] hover:text-red-500 self-end sm:self-start"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-[var(--dark-400)] mb-2">
                        {item.unit}
                      </p>
                      
                      <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md border-[var(--dark-600)]"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center text-white">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-md border-[var(--dark-600)]"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <p className="text-lg font-semibold text-white">
                            Rp{(item.price * item.quantity).toLocaleString('id-ID')}
                          </p>
                          <p className="text-xs text-black bg-[var(--accent-green)] px-2 py-1 rounded-md">
                            Komisi: Rp{(item.commission * item.quantity).toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Cart Summary */}
              <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-[var(--dark-700)]">
                    <span className="text-[var(--dark-400)]">Subtotal</span>
                    <span className="text-white font-medium">Rp{cartTotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-[var(--dark-700)]">
                    <span className="text-[var(--dark-400)]">Total Komisi</span>
                    <span className="text-[var(--accent-green)] font-medium">Rp{cartCommission.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-xl font-semibold text-white">Rp{cartTotal.toLocaleString('id-ID')}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="border-[var(--dark-600)] text-white hover:bg-[var(--dark-700)]"
                    >
                      Lanjut Belanja
                    </Button>
                    <Link href="/member/checkout">
                      <a className="w-full sm:w-auto">
                        <Button
                          className="w-full bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Checkout
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </Card>
            </>
          ) : (
            <div className="bg-[var(--dark-800)] border border-[var(--dark-700)] rounded-lg p-8 text-center">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-[var(--dark-900)] flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-[var(--dark-400)]" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Keranjang Anda Kosong</h3>
              <p className="text-[var(--dark-400)] mb-6">Belum ada produk yang ditambahkan ke keranjang</p>
              <Link href="/member/produk">
                <a>
                  <Button className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                    Lihat Produk
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="all" className="mt-0 space-y-4">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>
        
        <TabsContent value="process" className="mt-0 space-y-4">
          {filteredOrders
            .filter(order => order.status === "Diproses")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>
        
        <TabsContent value="shipping" className="mt-0 space-y-4">
          {filteredOrders
            .filter(order => order.status === "Dikirim")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>
        
        <TabsContent value="completed" className="mt-0 space-y-4">
          {filteredOrders
            .filter(order => order.status === "Selesai")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Order Card Component
function OrderCard({ order }: { order: OrderType }) {
  return (
    <Card className="bg-[var(--dark-800)] border-[var(--dark-700)] overflow-hidden">
      <div className="p-4 border-b border-[var(--dark-700)] flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <div className="flex items-center mb-1">
            <span className="text-sm font-medium text-white mr-2">{order.id}</span>
            <Badge className={getStatusBadgeClass(order.status)}>
              {order.status}
            </Badge>
          </div>
          <p className="text-xs text-[var(--dark-400)]">
            <Clock className="inline-block h-3 w-3 mr-1" /> 
            Tanggal order: {order.date}
          </p>
        </div>
        <div className="mt-2 sm:mt-0 flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-[var(--dark-400)] border-[var(--dark-600)] hover:text-white"
          >
            Detail
          </Button>
          {order.status === "Dikirim" && (
            <Button 
              size="sm" 
              className="bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black"
            >
              Lacak
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-[var(--dark-400)] mb-1">Produk</p>
            {order.products.map((product: string, index: number) => (
              <p key={index} className="text-sm text-white">{product}</p>
            ))}
          </div>
          
          <div>
            <p className="text-xs text-[var(--dark-400)] mb-1">Info Pengiriman</p>
            {order.trackingNumber ? (
              <>
                <p className="text-sm text-white">No. Resi: {order.trackingNumber}</p>
                <p className="text-sm text-[var(--dark-400)]">Estimasi tiba: {order.estimatedArrival}</p>
              </>
            ) : (
              <p className="text-sm text-[var(--dark-400)]">Belum tersedia</p>
            )}
          </div>
          
          <div>
            <p className="text-xs text-[var(--dark-400)] mb-1">Total Pembayaran</p>
            <p className="text-sm text-white font-semibold">Rp{order.total.toLocaleString('id-ID')}</p>
            <p className="text-xs text-[var(--dark-400)]">{order.items} items</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Helper function for badge styling
function getStatusBadgeClass(status: OrderType['status']): string {
  switch(status) {
    case "Diproses":
      return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "Dikirim":
      return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
    case "Selesai":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
    case "Dibatalkan":
      return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
    default:
      return "bg-[var(--dark-400)]/10 text-[var(--dark-400)]";
  }
} 