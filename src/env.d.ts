/// <reference types="astro/client" />

interface Window {
  __floatingBarInitialized?: boolean;
  __lenis?: {
    isStopped: boolean;
    stop: () => void;
    start: () => void;
    scrollTo: (target: number) => void;
  };
}
