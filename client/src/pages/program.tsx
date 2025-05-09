import React, { useEffect } from 'react';
import { Container } from "@/components/ui/container";
import { ImageSlider } from "@/components/ui/image-slider";
import { StatsCard } from "@/components/stats-card";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { FAQAccordion } from "@/components/faq-accordion";
import { 
  Users, 
  MapPin, 
  ThumbsUp, 
  CreditCard, 
  Gift, 
  Package, 
  Truck, 
  ClipboardList,
  TrendingUp,
  Clock,
  BarChart3,
  FileText,
  Lightbulb,
  Award,
  Shield,
  Sparkles,
  LayoutGrid
} from "lucide-react";
import { useLocation } from 'wouter';

// Slider images
const sliderImages = [
  "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
];

// Testimonial data
const testimonials = [
  {
    quote: "Drajat Karunia dan VBPRO adalah solusi bagi perokok yang ingin tetap sehat, nyaman, dan tidak mengganggu keluarga. Ini bukan sekadar rokok, tapi gerakan ekonomi umat yang membawa manfaat dunia dan akhirat.",
    author: "KH. Abdullah",
    role: "Tokoh Ulama & Pengasuh Pesantren"
  },
  {
    quote: "Saya merekomendasikan Drajat Karunia bagi perokok yang ingin menikmati rokok berkualitas tanpa rasa bersalah. Dengan setiap batangnya, kita ikut membantu umat dan pesantren berkembang.",
    author: "Ustadz H. Rohmat",
    role: "Dai Nasional"
  },
  {
    quote: "Biasanya kalau suami merokok, saya selalu menghindar karena baunya bikin pusing. Tapi sejak dia pakai VBPRO, saya tidak merasa terganggu lagi. Baunya lebih lembut dan tidak menyengat seperti rokok biasa.",
    author: "Bu Rina, 35 tahun",
    role: "Ibu Rumah Tangga"
  },
  {
    quote: "Saya sudah mencoba berbagai merek rokok, tapi Drajat Karunia rasanya beda. Hisapannya lebih lembut, tidak bikin batuk, dan tidak ada sensasi serik di tenggorokan.",
    author: "Faisal, 40 tahun",
    role: "Karyawan Swasta"
  },
  {
    quote: "Drajat Karunia bukan sekadar rokok biasa. Setiap batang yang saya beli ikut membantu pemberdayaan santri dan pesantren. Ini bukan hanya soal menikmati rokok berkualitas, tapi juga ikut berkontribusi pada ekonomi umat. Rokok yang nikmat sekaligus berpahala!",
    author: "H. Ridwan, 52 tahun",
    role: "Pengusaha Muslim"
  }
];

// FAQ items
const faqItems = [
  {
    id: "item-1",
    question: "Apa itu Berkah Abadi?",
    answer: "Berkah Abadi adalah perusahaan distribusi produk yang beroperasi dengan sistem afilias. Kami fokus pada penyediaan produk berkualitas tinggi dan peluang bisnis yang adil dan transparan bagi seluruh mitra."
  },
  {
    id: "item-2",
    question: "Bagaimana cara bergabung dengan Berkah Abadi?",
    answer: "Untuk bergabung, Anda dapat mendaftar melalui website kami atau menghubungi salah satu mitra resmi kami. Proses pendaftaran mudah dan cepat, dan Anda akan mendapatkan akses ke sistem bisnis dan produk-produk kami."
  },
  {
    id: "item-3",
    question: "Apakah pendaftaran Berkah Abadi berbayar?",
    answer: "Tidak, pendaftaran tidak dipungut biaya. Untuk mengaktifkan keanggotaan dan mendapatkan akses penuh ke sistem bisnis, Anda perlu melakukan pembelian perdana satu slop rokok Berkah Abadi Nusantara atau Rokok DK."
  },
  {
    id: "item-4",
    question: "Apakah Modal untuk bergabung dengan Berkah Abadi mahal?",
    answer: "Tidak perlu modal besar! Daftar mudah, bisa langsung menghasilkan. Bahkan, Anda bisa gunakan komisi untuk beli produk. Kami mendukung mitra agar bisa berjualan tanpa modal!"
  },
  {
    id: "item-5",
    question: "Berapa komisi yang bisa saya dapatkan?",
    answer: "Setiap transaksi referral akan memberikan Anda komisi sebesar Rp26.000. Semakin banyak referral, semakin besar penghasilan Anda. Program afiliasi kami tidak memiliki batasan penghasilan."
  },
  {
    id: "item-6",
    question: "Bagaimana sistem donasi otomatis bekerja?",
    answer: "Dari setiap transaksi, Rp8.000 akan otomatis disalurkan ke yayasan pilihan Anda. Anda juga dapat mengatur persentase komisi yang ingin dialokasikan untuk donasi tambahan."
  }
];

export default function Program() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to affiliasi page
    setLocation('/affiliasi');
  }, [setLocation]);
  
  return null; // Return nothing as we're redirecting
} 