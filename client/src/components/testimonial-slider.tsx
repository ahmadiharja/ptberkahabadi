import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden bg-[var(--dark-800)] rounded-xl p-6">
      <div className="absolute top-6 left-8 text-[var(--accent-green)] opacity-30">
        <Quote size={40} />
      </div>
      
      <div ref={sliderRef} className="relative min-h-[220px] md:min-h-[200px] overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-500 ease-in-out px-4 ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex 
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <blockquote className="text-[var(--light-100)] text-lg md:text-xl mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            <footer className="text-right">
              <div className="font-semibold text-[var(--accent-green)]">{testimonial.author}</div>
              <div className="text-[var(--dark-400)] text-sm">{testimonial.role}</div>
            </footer>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[var(--accent-green)] w-4" : "bg-[var(--dark-400)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full bg-[var(--dark-700)] hover:bg-[var(--dark-600)] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-[var(--dark-700)] hover:bg-[var(--dark-600)] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}