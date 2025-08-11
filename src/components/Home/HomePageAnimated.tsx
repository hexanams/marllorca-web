'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from './LoadingScreen';
import HomeFirstSectionAnimated from './HomeFirstSectionAnimated';
import HomeSecondSectionAnimated from './HomeSecondSectionAnimated';
import HomeThirdSectionAnimated from './HomeThirdSectionAnimated';
import HomeForthSectionAnimated from './HomeForthSectionAnimated';
import HomeFifthSectionAnimated from './HomeFifthSectionAnimated';
import HomeSixthSection from './HomeSixthSection';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePageAnimated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload critical images
    const criticalImages = [
      '/images/back.jpg',
      '/images/pool.jpg',
      '/images/listing.jpg',
      '/images/out.jpg'
    ];

    const imagePromises = criticalImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    // Wait for images to load
    Promise.allSettled(imagePromises).then(() => {
      setAssetsLoaded(true);
    });

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      if (assetsLoaded) {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, [assetsLoaded]);

  useEffect(() => {
    if (assetsLoaded && !isLoading) {
      // Initialize smooth scrolling and other global animations
      gsap.set('body', { overflow: 'visible' });
      
      // Add smooth scrolling behavior
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Refresh ScrollTrigger after loading
      ScrollTrigger.refresh();
    }
  }, [isLoading, assetsLoaded]);

  const handleLoadingComplete = () => {
    if (assetsLoaded) {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative">
      {/* Animated Sections */}
      <HomeFirstSectionAnimated />
      <HomeSecondSectionAnimated />
      <HomeThirdSectionAnimated />
      <HomeForthSectionAnimated />
      <HomeFifthSectionAnimated />
      <HomeSixthSection />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
    </div>
  );
};

// Scroll Progress Indicator Component
const ScrollProgressIndicator = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 h-1 bg-gold-500 z-50 transition-all duration-300';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      if (document.body.contains(progressBar)) {
        document.body.removeChild(progressBar);
      }
    };
  }, []);

  return null;
};

export default HomePageAnimated;
