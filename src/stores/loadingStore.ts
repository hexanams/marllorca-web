import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoadingState {
  isLoading: boolean;
  assetsLoaded: boolean;
  hasInitialized: boolean;
  setIsLoading: (loading: boolean) => void;
  setAssetsLoaded: (loaded: boolean) => void;
  setHasInitialized: (initialized: boolean) => void;
  reset: () => void;
}

export const useLoadingStore = create<LoadingState>()(
  persist(
    (set) => ({
      isLoading: true,
      assetsLoaded: false,
      hasInitialized: false,
      setIsLoading: (loading: boolean) => set({ isLoading: loading }),
      setAssetsLoaded: (loaded: boolean) => set({ assetsLoaded: loaded }),
      setHasInitialized: (initialized: boolean) => set({ hasInitialized: initialized }),
      reset: () => set({ isLoading: true, assetsLoaded: false, hasInitialized: false }),
    }),
    {
      name: 'loading-storage',
      // Only persist the essential flags, not the loading state itself
      partialize: (state) => ({ 
        assetsLoaded: state.assetsLoaded,
        hasInitialized: state.hasInitialized 
      }),
    }
  )
);
