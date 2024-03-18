import { create } from 'zustand';

export const useLocationStore = create((set) => ({
  location: { lat: '51.5085', lon: '-0.1257' },
  setLocation: (location) => set(() => ({ location })),
}));
