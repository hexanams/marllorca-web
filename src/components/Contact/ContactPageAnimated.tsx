"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoadingStore } from "@/stores/loadingStore";
import LoadingScreen from "../Home/LoadingScreen";
import ContactFirstSectionAnimated from "./ContactFirstSectionAnimated";
import ContactSecondSectionAnimated from "./ContactSecondSectionAnimated";
import HomeSixthSectionAnimated from "../Home/HomeSixthSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactPageAnimated = () => {
  const {
    getPageState,
    setPageLoading,
    setPageAssetsLoaded,
    setPageInitialized,
  } = useLoadingStore();

  const { isLoading, assetsLoaded, hasInitialized } = getPageState("contact");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If already initialized, skip loading
    if (hasInitialized) {
      setPageLoading("contact", false);
      return;
    }

    let assetsReady = false;
    let minTimeElapsed = false;

    // Function to check if both conditions are met
    const checkLoadingComplete = () => {
      if (assetsReady && minTimeElapsed) {
        setPageLoading("contact", false);
        setPageInitialized("contact", true);
      }
    };

    // Handle window load
    const handleWindowLoad = () => {
      setPageAssetsLoaded("contact", true);
      assetsReady = true;
      checkLoadingComplete();
    };

    // Check if window is already loaded
    if (document.readyState === "complete") {
      setPageAssetsLoaded("contact", true);
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
      setPageLoading("contact", false);
      setPageInitialized("contact", true);
    }
  };

  return (
    <>
      {/* Always render content for asset loading */}
      <div
        className={`relative overflow-hidden bg-black-500 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Animated Contact Sections */}
        <ContactFirstSectionAnimated />
        <ContactSecondSectionAnimated />
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

export default ContactPageAnimated;
