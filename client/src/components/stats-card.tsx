import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({ value, label, icon, className }: StatsCardProps) {
  return (
    <div className={cn(
      "p-6 bg-[var(--dark-800)] rounded-xl text-center shadow-md",
      className
    )}>
      {icon && (
        <div className="mx-auto mb-3 w-10 h-10 text-[var(--accent-blue)]">
          {icon}
        </div>
      )}
      <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[var(--light-100)]">{value}</h3>
      <p className="text-[var(--dark-400)] text-sm md:text-base">{label}</p>
    </div>
  );
}