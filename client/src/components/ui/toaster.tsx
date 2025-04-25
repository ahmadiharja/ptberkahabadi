import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { X, Check, AlertCircle, Info, AlertTriangle } from "lucide-react";

export function Toaster() {
  const { toasts, dismiss } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`border ${
            toast.type === "success"
              ? "border-[var(--accent-green)] bg-[var(--accent-green)]/15"
              : toast.type === "error"
              ? "border-red-600 bg-red-950/40"
              : toast.type === "warning"
              ? "border-yellow-600 bg-yellow-950/40"
              : "border-[var(--dark-700)] bg-[var(--dark-800)]/95"
          } p-4 rounded-lg shadow-lg transition-all transform ${
            toast.dismissed ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          } duration-300 flex items-start backdrop-blur-sm`}
        >
          {toast.type === "success" && (
            <div className="mr-3 flex-shrink-0 h-5 w-5 bg-[var(--accent-green)] rounded-full flex items-center justify-center">
              <Check className="h-3 w-3 text-black" />
            </div>
          )}
          {toast.type === "error" && (
            <div className="mr-3 flex-shrink-0 h-5 w-5 bg-red-600 rounded-full flex items-center justify-center">
              <AlertCircle className="h-3 w-3 text-white" />
            </div>
          )}
          {toast.type === "warning" && (
            <div className="mr-3 flex-shrink-0 h-5 w-5 bg-yellow-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-3 w-3 text-white" />
            </div>
          )}
          {(!toast.type || toast.type === "info") && (
            <div className="mr-3 flex-shrink-0 h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
              <Info className="h-3 w-3 text-white" />
            </div>
          )}
          <div className="flex-1">
            {toast.title && (
              <h3 className={`font-medium mb-1 ${
                toast.type === "success" ? "text-[var(--accent-green)]" : "text-white"
              }`}>{toast.title}</h3>
            )}
            {toast.description && (
              <div className="text-sm text-[var(--dark-300)]">
                {toast.description}
              </div>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="ml-4 p-1 text-[var(--dark-400)] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
