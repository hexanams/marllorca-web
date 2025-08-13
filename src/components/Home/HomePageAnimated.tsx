"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingStore } from "@/stores/loadingStore";
import LoadingScreen from "./LoadingScreen";
import HomeFirstSectionAnimated from "./HomeFirstSectionAnimated";
import HomeSecondSectionAnimated from "./HomeSecondSectionAnimated";
import HomeThirdSectionAnimated from "./HomeThirdSectionAnimated";
import HomeForthSectionAnimated from "./HomeForthSectionAnimated";
import HomeFifthSectionAnimated from "./HomeFifthSectionAnimated";
import HomeSixthSection from "./HomeSixthSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePageAnimated = () => {
  const {
    getPageState,
    setPageLoading,
    setPageAssetsLoaded,
    setPageInitialized,
  } = useLoadingStore();
  
  const { isLoading, assetsLoaded, hasInitialized } = getPageState('home');

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If already initialized, skip loading
    if (hasInitialized) {
      setPageLoading('home', false);
      return;
    }

    let assetsReady = false;
    let minTimeElapsed = false;

    // Function to check if both conditions are met
    const checkLoadingComplete = () => {
      if (assetsReady && minTimeElapsed) {
        setPageLoading('home', false);
        setPageInitialized('home', true);
      }
    };

    // Handle window load
    const handleWindowLoad = () => {
      setPageAssetsLoaded('home', true);
      assetsReady = true;
      checkLoadingComplete();
    };

    // Check if window is already loaded
    if (document.readyState === "complete") {
      setPageAssetsLoaded('home', true);
      assetsReady = true;
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      minTimeElapsed = true;
      checkLoadingComplete();
    }, 2000);

    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [
    assetsLoaded,
    hasInitialized,
    setPageLoading,
    setPageAssetsLoaded,
    setPageInitialized,
  ]);

  useEffect(() => {
    if (assetsLoaded && !isLoading) {
      // Initialize smooth scrolling and other global animations
      gsap.set("body", { overflow: "visible" });

      // Add smooth scrolling behavior
      document.documentElement.style.scrollBehavior = "smooth";

      // Refresh ScrollTrigger after loading
      ScrollTrigger.refresh();
    }
  }, [isLoading, assetsLoaded]);

  const handleLoadingComplete = () => {
    if (assetsLoaded) {
      setPageLoading('home', false);
      setPageInitialized('home', true);
    }
  };

  return (
    <>
      {/* Always render content for asset loading */}
      <div className={`relative ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Animated Sections */}
        <HomeFirstSectionAnimated />
        <HomeSecondSectionAnimated />
        <HomeThirdSectionAnimated />
        <HomeForthSectionAnimated />
        <HomeFifthSectionAnimated />
        <HomeSixthSection />
        <ScrollProgressIndicator />
      </div>
      
      {/* Show loading screen when loading */}
      {isLoading && (
        <LoadingScreen
          assetsLoaded={assetsLoaded}
          onComplete={handleLoadingComplete}
        />
      )}
    </>
  );
};

// Scroll Progress Indicator Component
const ScrollProgressIndicator = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const progressBar = document.createElement("div");
    progressBar.className =
      "fixed top-0 left-0 h-1 bg-gold-500 z-50 transition-all duration-300";
    progressBar.style.width = "0%";
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (document.body.contains(progressBar)) {
        document.body.removeChild(progressBar);
      }
    };
  }, []);

  return null;
};

export default HomePageAnimated;
