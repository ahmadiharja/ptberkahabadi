
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For testing/preview purposes, allow login without validation
    localStorage.setItem("isLoggedIn", "true");
    setLocation("/member");
  };

  return (
    <div className="flex-1">
      <main className="pt-24 pb-16">
        <Container>
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-light mb-8 text-center">Login</h1>
            
            <div className="bg-[var(--dark-800)] p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-[var(--dark-400)]">Email / No HP / Username</label>
                  <Input 
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Masukkan email/no hp/username"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[var(--dark-400)]">Password</label>
                  <Input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-3 bg-[var(--accent-green)] hover:bg-opacity-90 text-white rounded-md font-medium transition-all"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
