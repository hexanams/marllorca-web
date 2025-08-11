'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPScrollAnimations = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create main timeline
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  const createFadeInAnimation = (
    element: string | Element,
    options: {
      trigger?: string | Element;
      start?: string;
      end?: string;
      duration?: number;
      delay?: number;
      y?: number;
      x?: number;
      scale?: number;
      stagger?: number;
    } = {}
  ) => {
    const {
      trigger = element,
      start = "top 80%",
      end = "bottom 20%",
      duration = 1,
      delay = 0,
      y = 50,
      x = 0,
      scale = 1,
      stagger = 0
    } = options;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
        x,
        scale: scale === 1 ? undefined : scale
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  const createParallaxAnimation = (
    element: string | Element,
    options: {
      trigger?: string | Element;
      yPercent?: number;
      speed?: number;
    } = {}
  ) => {
    const {
      trigger = element,
      yPercent = -50,
      speed = 0.5
    } = options;

    gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: speed
      }
    });
  };

  const createTimelineAnimation = (
    elements: (string | Element)[],
    options: {
      trigger?: string | Element;
      start?: string;
      end?: string;
      stagger?: number;
      duration?: number;
    } = {}
  ) => {
    const {
      trigger,
      start = "top 70%",
      end = "bottom 30%",
      stagger = 0.2,
      duration = 1
    } = options;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: "play none none reverse"
      }
    });

    elements.forEach((element, index) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          ease: "power2.out"
        },
        index * stagger
      );
    });

    return tl;
  };

  const createPinAnimation = (
    element: string | Element,
    options: {
      start?: string;
      end?: string;
      pinSpacing?: boolean;
    } = {}
  ) => {
    const {
      start = "top top",
      end = "bottom top",
      pinSpacing = true
    } = options;

    ScrollTrigger.create({
      trigger: element,
      start,
      end,
      pin: true,
      pinSpacing
    });
  };

  const createTextRevealAnimation = (
    element: string | Element,
    options: {
      trigger?: string | Element;
      start?: string;
      duration?: number;
      stagger?: number;
    } = {}
  ) => {
    const {
      trigger = element,
      start = "top 80%",
      duration = 1,
      stagger = 0.1
    } = options;

    // Split text into words and wrap each in a span
    const textElement = typeof element === 'string' ? document.querySelector(element) : element;
    if (!textElement) return;

    const text = textElement.textContent || '';
    const words = text.split(' ');
    textElement.innerHTML = words
      .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join(' ');

    const wordSpans = textElement.querySelectorAll('span span');

    gsap.fromTo(
      wordSpans,
      {
        yPercent: 100
      },
      {
        yPercent: 0,
        duration,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger,
          start,
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    createFadeInAnimation,
    createParallaxAnimation,
    createTimelineAnimation,
    createPinAnimation,
    createTextRevealAnimation,
    timeline: timelineRef.current
  };
};

export default useGSAPScrollAnimations;
