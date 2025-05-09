import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Ambassador from "@/pages/ambassador";
import Donasi from "@/pages/donasi";
import TentangKami from "@/pages/tentang-kami";
import Contact from "@/pages/contact";
import Login from "@/pages/login";
import Member from "@/pages/member";
import Program from "@/pages/program";
import Products from "@/pages/products";
import Affiliasi from "@/pages/affiliasi";
import ProductDetail from "@/pages/product-detail";
import Header from "@/components/header";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/products" component={Products}/>
      <Route path="/products/:slug" component={ProductDetail}/>
      <Route path="/program" component={Program}/>
      <Route path="/affiliasi" component={Affiliasi}/>
      <Route path="/ambassador" component={Ambassador}/>
      <Route path="/donasi" component={Donasi}/>
      <Route path="/tentang-kami" component={TentangKami}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/member" component={Member}/>
      <Route path="/member/produk" component={Member}/>
      <Route path="/member/produk/:slug" component={Member}/>
      <Route path="/member/affiliasi" component={Member}/>
      <Route path="/member/order" component={Member}/>
      <Route path="/member/pengaturan" component={Member}/>
      <Route path="/member/donasi" component={Member}/>
      <Route path="/member/bantuan" component={Member}/>
      <Route path="/member/checkout" component={Member}/>
      
      {/* Routes for settings subpages */}
      <Route path="/member/pengaturan/profile" component={Member}/>
      <Route path="/member/pengaturan/shipping" component={Member}/>
      <Route path="/member/pengaturan/donasi" component={Member}/>
      <Route path="/member/pengaturan/bantuan" component={Member}/>
      <Route path="/member/notifikasi" component={Member}/>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isMemberArea = location.startsWith("/member");
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen bg-[var(--dark-900)]">
        {!isMemberArea && <Header />}
        <Router />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
