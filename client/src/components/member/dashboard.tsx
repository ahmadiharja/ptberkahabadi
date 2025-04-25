import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  CreditCard, 
  BarChart3, 
  ShoppingBag, 
  ChevronRight, 
  Box, 
  TrendingUp, 
  ArrowRight,
  Settings,
  Bell
} from "lucide-react";
import { Heart as HeartIcon } from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell
} from "recharts";
import { Link, useLocation } from "wouter";

// Data statistik aktivitas bulanan (dummy)
const monthlyActivityData = [
  { name: "Jan", komisi: 250000, donasi: 90000 },
  { name: "Feb", komisi: 320000, donasi: 120000 },
  { name: "Mar", komisi: 280000, donasi: 100000 },
  { name: "Apr", komisi: 430000, donasi: 150000 },
  { name: "Mei", komisi: 520000, donasi: 180000 },
  { name: "Jun", komisi: 390000, donasi: 140000 },
  { name: "Jul", komisi: 550000, donasi: 190000 },
  { name: "Agu", komisi: 620000, donasi: 210000 },
  { name: "Sep", komisi: 580000, donasi: 200000 },
  { name: "Okt", komisi: 680000, donasi: 230000 },
  { name: "Nov", komisi: 780000, donasi: 270000 },
  { name: "Des", komisi: 850000, donasi: 290000 },
];

// Data produk terlaris (dummy)
const topProductsData = [
  { name: "VB Pro Nu...", value: 45 },
  { name: "Pribumi C...", value: 25 },
  { name: "DK-Drajat...", value: 20 },
  { name: "Pribumi An...", value: 10 }
];

// Warna untuk chart pie
const COLORS = ["#4CAF50", "#8BC34A", "#CDDC39", "#9E9E9E"];

export function Dashboard() {
  const [, navigate] = useLocation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium text-white">Dashboard</h1>
        <p className="text-[var(--dark-400)]">
          Selamat datang kembali, <span className="text-white">Ahmad</span>
        </p>
      </div>

      {/* Stats Cards - Update to 2 cards per row on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card 
          className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-colors cursor-pointer"
          onClick={() => navigate("/member/affiliasi")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="p-3 rounded-full bg-[var(--accent-green)] mb-3 sm:mb-0 sm:mr-3 self-start">
              <Users className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--dark-400)]">Total Downline</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">12</h3>
              <p className="text-xs text-green-500 mt-1">+2 bulan ini</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-colors cursor-pointer"
          onClick={() => {
            // Set the tab to "komisi" in localStorage before navigating
            localStorage.setItem('affiliasi_active_tab', 'komisi');
            navigate("/member/affiliasi");
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="p-3 rounded-full bg-[var(--accent-green)] mb-3 sm:mb-0 sm:mr-3 self-start">
              <CreditCard className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--dark-400)]">Total Komisi</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">Rp1.170.000</h3>
              <p className="text-xs text-green-500 mt-1">+Rp208.000 pending</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-colors cursor-pointer"
          onClick={() => navigate("/member/order")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="p-3 rounded-full bg-[var(--accent-green)] mb-3 sm:mb-0 sm:mr-3 self-start">
              <BarChart3 className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--dark-400)]">Transaksi Bulan Ini</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">32</h3>
              <p className="text-xs text-green-500 mt-1">+15% dari bulan lalu</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-4 bg-[var(--dark-800)] border-[var(--dark-700)] hover:border-[var(--accent-green)] transition-colors cursor-pointer"
          onClick={() => navigate("/member/donasi")}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="p-3 rounded-full bg-[var(--accent-green)] mb-3 sm:mb-0 sm:mr-3 self-start">
              <HeartIcon className="w-5 h-5 text-black" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--dark-400)]">Total Donasi</p>
              <h3 className="text-2xl font-semibold mt-1 text-white">Rp104.000</h3>
              <p className="text-xs text-green-500 mt-1">+Rp8.000 bulan ini</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="md:col-span-2">
          <Card className="p-5 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-white">Aktivitas Bulanan</h3>
                <p className="text-sm text-[var(--dark-400)]">Pendapatan komisi dan donasi yang disalurkan</p>
              </div>
              <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] mr-2"></div>
                  <span className="text-xs text-[var(--dark-400)]">Komisi</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 opacity-80 mr-2"></div>
                  <span className="text-xs text-[var(--dark-400)]">Donasi</span>
                </div>
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlyActivityData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorKomisi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent-green)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="var(--accent-green)" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorDonasi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--dark-700)" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: 'var(--dark-400)' }} 
                    tickLine={{ stroke: 'var(--dark-700)' }}
                    axisLine={{ stroke: 'var(--dark-700)' }}
                  />
                  <YAxis 
                    tick={{ fill: 'var(--dark-400)' }} 
                    tickLine={{ stroke: 'var(--dark-700)' }}
                    axisLine={{ stroke: 'var(--dark-700)' }}
                    tickFormatter={(value) => `${value / 1000}K`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--dark-900)', 
                      borderColor: 'var(--dark-700)', 
                      color: 'white' 
                    }}
                    formatter={(value: number) => [`Rp${value.toLocaleString('id-ID')}`, '']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="komisi" 
                    stroke="var(--accent-green)" 
                    fillOpacity={1} 
                    fill="url(#colorKomisi)" 
                    strokeWidth={2}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="donasi" 
                    stroke="#3B82F6" 
                    fillOpacity={1} 
                    fill="url(#colorDonasi)"
                    strokeWidth={2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Products Chart */}
        <div className="md:col-span-1">
          <Card className="p-5 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-white">Produk Terlaris</h3>
                <p className="text-sm text-[var(--dark-400)]">Berdasarkan transaksi</p>
              </div>
            </div>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={topProductsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {topProductsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--dark-900)', 
                      borderColor: 'var(--dark-700)', 
                      color: 'white' 
                    }}
                    formatter={(value: number) => [`${value}%`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Activities and Quick Actions - Updated to provide better mobile view */}
      <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-6">
        {/* Recent Activities */}
        <div className="sm:col-span-4 lg:col-span-7">
          <Card className="p-5 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Aktivitas Terbaru</h3>
              <Button variant="ghost" size="sm" className="text-[var(--dark-400)] hover:text-white">
                Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start p-3 rounded-lg bg-[var(--dark-900)]">
                <div className="mr-4 mt-1 p-2 rounded-full bg-green-500/10">
                  <CreditCard className="h-5 w-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Komisi Diterima</p>
                  <p className="text-[var(--dark-400)] text-sm">Rp104.000 telah ditransfer ke rekening BCA Anda</p>
                  <p className="text-[var(--dark-400)] text-xs mt-1">2 jam yang lalu</p>
                </div>
              </div>

              <div className="flex items-start p-3 rounded-lg bg-[var(--dark-900)]">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/12.jpg" alt="Budi Santoso" />
                  <AvatarFallback className="bg-[var(--dark-700)] text-white">BS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-white font-medium">Downline Baru</p>
                  <p className="text-[var(--dark-400)] text-sm">Budi Santoso telah bergabung sebagai downline Anda</p>
                  <p className="text-[var(--dark-400)] text-xs mt-1">Kemarin, 14:23</p>
                </div>
              </div>

              <div className="flex items-start p-3 rounded-lg bg-[var(--dark-900)]">
                <div className="mr-4 mt-1 p-2 rounded-full bg-purple-500/10">
                  <ShoppingBag className="h-5 w-5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Pesanan Baru</p>
                  <p className="text-[var(--dark-400)] text-sm">Pesanan #12345 telah berhasil dibuat</p>
                  <p className="text-[var(--dark-400)] text-xs mt-1">2 hari yang lalu</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="sm:col-span-2 lg:col-span-5">
          <Card className="p-5 bg-[var(--dark-800)] border-[var(--dark-700)]">
            <h3 className="text-lg font-medium text-white mb-4">Aksi Cepat</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-[var(--dark-600)] flex-col h-auto py-3 text-[var(--dark-400)] hover:text-white md:flex-row md:py-2">
                <Box className="h-5 w-5 mb-1.5 md:mb-0 md:mr-2 md:h-4 md:w-4" /> 
                <span>Order Produk</span>
              </Button>
              <Button variant="outline" className="border-[var(--dark-600)] flex-col h-auto py-3 text-[var(--dark-400)] hover:text-white md:flex-row md:py-2">
                <Users className="h-5 w-5 mb-1.5 md:mb-0 md:mr-2 md:h-4 md:w-4" /> 
                <span>Tambah Downline</span>
              </Button>
              <Button variant="outline" className="border-[var(--dark-600)] flex-col h-auto py-3 text-[var(--dark-400)] hover:text-white md:flex-row md:py-2">
                <CreditCard className="h-5 w-5 mb-1.5 md:mb-0 md:mr-2 md:h-4 md:w-4" /> 
                <span>Tarik Komisi</span>
              </Button>
              <Button variant="outline" className="border-[var(--dark-600)] flex-col h-auto py-3 text-[var(--dark-400)] hover:text-white md:flex-row md:py-2">
                <HeartIcon className="h-5 w-5 mb-1.5 md:mb-0 md:mr-2 md:h-4 md:w-4" /> 
                <span>Donasi</span>
              </Button>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[var(--accent-green)]/5 border border-[var(--accent-green)]/20">
              <div className="flex">
                <div className="mr-4 p-2 rounded-full bg-[var(--accent-green)]">
                  <TrendingUp className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Tingkatkan Afiliasi Anda</h4>
                  <p className="text-sm text-[var(--dark-400)] mt-1">
                    Dapatkan 3 downline baru bulan ini untuk meningkatkan level mitra Anda.
                  </p>
                  <Button className="mt-3 bg-[var(--accent-green)] hover:bg-[var(--accent-green)]/90 text-black">
                    Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}