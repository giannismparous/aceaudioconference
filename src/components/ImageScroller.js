import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/ImageScroller.css';

const images = [
  process.env.PUBLIC_URL + '/project_images/intercontinental.jpg',
  process.env.PUBLIC_URL + '/project_images/metromall.jpg',
  process.env.PUBLIC_URL + '/project_images/mercedes.jpg',
  process.env.PUBLIC_URL + '/project_images/electra.jpg',
];

function ImageScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  // Create extended array with clone of first image at the end for seamless loop
  const extendedImages = [...images, images[0]];

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Handle the seamless loop - when we reach the clone, instantly jump to real first slide
  useEffect(() => {
    if (currentIndex === images.length) {
      // We're at the cloned first slide, wait for transition to finish then jump
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Disable transition for instant jump
        setCurrentIndex(0); // Jump to real first slide
      }, 800); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      // Small delay to ensure the DOM has updated before re-enabling transition
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="carousel">
      <div 
        ref={trackRef}
        className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dot indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${(currentIndex % images.length) === index ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;