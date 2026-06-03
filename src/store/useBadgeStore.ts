import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Badge } from '../types/badge';

interface BadgeState {
  myBadge: Badge | null;
  collectedBadges: Badge[];
  setMyBadge: (badge: Badge) => void;
  addCollectedBadge: (badge: Badge) => void;
  removeBadge: (id: string) => void;
  clearAlbum: () => void;
}

export const useBadgeStore = create<BadgeState>()(
  persist(
    (set, get) => ({

      myBadge: null, 
      collectedBadges: [],

      setMyBadge: (badge) => set({ myBadge: badge }),

      addCollectedBadge: (newBadge) => {
        const { collectedBadges } = get();
        

        const alreadyExists = collectedBadges.some((b) => b.id === newBadge.id);
        
        if (!alreadyExists) {
          set({
            collectedBadges: [
              { ...newBadge, collectedAt: Date.now() },
              ...collectedBadges,
            ],
          });
         
        }
      },

      removeBadge: (id) => {
        set({
          collectedBadges: get().collectedBadges.filter((b) => b.id !== id),
        });
      },

      clearAlbum: () => set({ collectedBadges: [] }),
    }),
    {
      name: 'scout-badge-storage',
      storage: createJSONStorage(() => AsyncStorage),
      
    }
  )
);