import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  autoplayInterval?: number;
  className?: string;
}

export function ImageSlider({ images, autoplayInterval = 5000, className = "" }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [images.length, autoplayInterval]);
  
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Slides Container */}
      <div 
        className="relative h-64 md:h-80 lg:h-96" 
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.5s ease-in-out'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
        
        {/* Control Buttons - Increased size and z-index */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
          <button 
            onClick={goToPrevious}
            className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all focus:outline-none pointer-events-auto"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all focus:outline-none pointer-events-auto"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dots Indicator - Added z-index */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}