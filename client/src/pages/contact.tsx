import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to tentang-kami page
    setLocation('/tentang-kami');
  }, [setLocation]);
  
  return null; // Return nothing as we're redirecting
}
