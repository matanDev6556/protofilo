'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      next();
    }

    if (touchStart - touchEnd < -75) {
      prev();
    }
  };

  const scrollTo = (index: number) => {
    setCurrentIndex(index);
  };

  const next = () => {
    scrollTo((currentIndex + 1) % images.length);
  };

  const prev = () => {
    scrollTo((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-[600px] sm:h-[800px] md:h-[800px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 z-20 transform-none'
              : index === (currentIndex + 1) % images.length
              ? 'opacity-60 z-10 translate-x-4 translate-y-4 scale-95 rotate-3'
              : index === (currentIndex + 2) % images.length
              ? 'opacity-30 z-0 translate-x-8 translate-y-8 scale-90 rotate-6'
              : 'opacity-0 z-0 translate-x-8 translate-y-8 scale-90 rotate-6'
          }`}
        >
          <Image
            src={image || '/placeholder.svg'}
            alt={`Project image ${index + 1}`}
            fill
            className="object-contain rounded-lg shadow-xl"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
              index === currentIndex
                ? 'bg-[#FFD700] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] z-30"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] z-30"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
