import { favoritesReducer } from '@/entities/user/components/favorites';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

console.log(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export default store;