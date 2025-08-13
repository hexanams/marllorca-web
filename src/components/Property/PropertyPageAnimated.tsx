"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingStore } from "@/stores/loadingStore";
import LoadingScreen from "../Home/LoadingScreen";
import PropertyFirstSectionAnimated from "./PropertyFirstSectionAnimated";
import PropertySecondSectionAnimated from "./PropertySecondSectionAnimated";
import PropertyThirdSectionAnimated from "./PropertyThirdSectionAnimated";
import HomeSixthSectionAnimated from "../Home/HomeSixthSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PropertyPageAnimated = () => {
  const {
    getPageState,
    setPageLoading,
    setPageAssetsLoaded,
    setPageInitialized,
  } = useLoadingStore();
  
  const { isLoading, assetsLoaded, hasInitialized } = getPageState('property');

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If already initialized, skip loading
    if (hasInitialized) {
      setPageLoading('property', false);
      return;
    }

    let assetsReady = false;
    let minTimeElapsed = false;

    // Function to check if both conditions are met
    const checkLoadingComplete = () => {
      if (assetsReady && minTimeElapsed) {
        setPageLoading('property', false);
        setPageInitialized('property', true);
      }
    };

    // Handle window load
    const handleWindowLoad = () => {
      setPageAssetsLoaded('property', true);
      assetsReady = true;
      checkLoadingComplete();
    };

    // Check if window is already loaded
    if (document.readyState === "complete") {
      setPageAssetsLoaded('property', true);
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
  }, [hasInitialized, setPageLoading, setPageAssetsLoaded, setPageInitialized]);

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
      setPageLoading('property', false);
      setPageInitialized('property', true);
    }
  };

  return (
    <>
      {/* Always render content for asset loading */}
      <div className={`relative ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Animated Property Sections */}
        <PropertyFirstSectionAnimated />
        <PropertySecondSectionAnimated />
        <PropertyThirdSectionAnimated />
        <HomeSixthSectionAnimated />
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

export default PropertyPageAnimated;
