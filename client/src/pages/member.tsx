import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { BottomNavigation, SideNavigation } from "@/components/member/bottom-navigation";
import { Dashboard } from "@/components/member/dashboard";
import { Produk } from "@/components/member/produk";
import { Affiliasi } from "@/components/member/affiliasi";
import { Donasi } from "@/components/member/donasi";
import { Bantuan } from "@/components/member/bantuan";
import { Order } from "@/components/member/order";
import { Pengaturan } from "@/components/member/pengaturan";
import { ProductDetail } from "@/components/member/product-detail";
import { Checkout } from "@/components/member/checkout";
import { Notifikasi } from "@/components/member/notifikasi";

export default function Member() {
  const [location] = useLocation();
  const [, params] = useRoute("/member/produk/:slug");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSettingsTab, setActiveSettingsTab] = useState("profile");
  const [productSlug, setProductSlug] = useState<string | undefined>(undefined);

  // Extract the path segment after /member/ to determine active tab
  useEffect(() => {
    if (location === "/member") {
      setActiveTab("dashboard");
    } else if (location.startsWith("/member/")) {
      const pathSegments = location.split("/");
      const segment = pathSegments[2];
      
      if (segment) {
        setActiveTab(segment);
        
        // Handle settings subpages
        if (segment === "pengaturan" && pathSegments.length > 3) {
          const settingsSubpage = pathSegments[3];
          setActiveSettingsTab(settingsSubpage);
        } else if (segment === "donasi") {
          setActiveSettingsTab("donasi");
        } else if (segment === "bantuan") {
          setActiveSettingsTab("bantuan");
        } else if (segment === "pengaturan") {
          setActiveSettingsTab("profile");
        }
      }
      
      // Handle product detail page
      if (pathSegments[2] === "produk" && pathSegments.length > 3) {
        setProductSlug(pathSegments[3]);
      } else {
        setProductSlug(undefined);
      }
    }
  }, [location]);

  // Render the appropriate component based on active tab
  const renderContent = () => {
    // Special routes
    if (location === "/member/checkout") {
      return <Checkout />;
    }
    
    if (location === "/member/notifikasi") {
      return <Notifikasi />;
    }
    
    // Handle product detail page
    if (activeTab === "produk" && productSlug) {
      return <ProductDetail slug={productSlug} />;
    }
    
    // Normal tab routing
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "produk":
        return <Produk />;
      case "affiliasi":
        return <Affiliasi />;
      case "order":
        return <Order />;
      case "donasi":
        return <Donasi />;
      case "pengaturan":
        return <Pengaturan activeTab={activeSettingsTab} />;
      case "bantuan":
        return <Pengaturan activeTab="bantuan" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row">
      {/* Side Navigation (Desktop) */}
      <SideNavigation />

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:pl-72 lg:pl-80 md:py-8 pb-20 md:pb-8 bg-[var(--dark-900)] mt-16 md:mt-0">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <BottomNavigation />
    </div>
  );
}