import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div 
      className={cn(
        "max-w-[1280px] mx-auto px-4 md:px-6", 
        className
      )}
    >
      {children}
    </div>
  );
}
