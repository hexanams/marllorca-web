import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PageName = 'home' | 'history' | 'property' | 'contact';

interface PageLoadingState {
  isLoading: boolean;
  assetsLoaded: boolean;
  hasInitialized: boolean;
}

interface LoadingState {
  pages: Record<PageName, PageLoadingState>;
  setPageLoading: (page: PageName, loading: boolean) => void;
  setPageAssetsLoaded: (page: PageName, loaded: boolean) => void;
  setPageInitialized: (page: PageName, initialized: boolean) => void;
  getPageState: (page: PageName) => PageLoadingState;
  resetPage: (page: PageName) => void;
  resetAll: () => void;
}

const defaultPageState: PageLoadingState = {
  isLoading: true,
  assetsLoaded: false,
  hasInitialized: false,
};

export const useLoadingStore = create<LoadingState>()(
  persist(
    (set, get) => ({
      pages: {
        home: { ...defaultPageState },
        history: { ...defaultPageState },
        property: { ...defaultPageState },
        contact: { ...defaultPageState },
      },
      setPageLoading: (page: PageName, loading: boolean) =>
        set((state) => ({
          pages: {
            ...state.pages,
            [page]: { ...state.pages[page], isLoading: loading },
          },
        })),
      setPageAssetsLoaded: (page: PageName, loaded: boolean) =>
        set((state) => ({
          pages: {
            ...state.pages,
            [page]: { ...state.pages[page], assetsLoaded: loaded },
          },
        })),
      setPageInitialized: (page: PageName, initialized: boolean) =>
        set((state) => ({
          pages: {
            ...state.pages,
            [page]: { ...state.pages[page], hasInitialized: initialized },
          },
        })),
      getPageState: (page: PageName) => get().pages[page],
      resetPage: (page: PageName) =>
        set((state) => ({
          pages: {
            ...state.pages,
            [page]: { ...defaultPageState },
          },
        })),
      resetAll: () =>
        set({
          pages: {
            home: { ...defaultPageState },
            history: { ...defaultPageState },
            property: { ...defaultPageState },
            contact: { ...defaultPageState },
          },
        }),
    }),
    {
      name: 'loading-storage',
      // Only persist the initialization flags, not loading states
      partialize: (state) => ({
        pages: Object.fromEntries(
          Object.entries(state.pages).map(([page, pageState]) => [
            page,
            { 
              isLoading: true, // Always start with loading on refresh
              assetsLoaded: false, // Always recheck assets
              hasInitialized: pageState.hasInitialized // Persist initialization
            },
          ])
        ),
      }),
    }
  )
);
