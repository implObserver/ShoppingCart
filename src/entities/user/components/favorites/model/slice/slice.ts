import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state: Favorites, action: PayloadAction<ProductContextType>) => {
            const index = state.favorites.map(e => e.id).indexOf(action.payload.id);
            if (index === -1) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state: Favorites, action: PayloadAction<ProductContextType>) => {
            const index = state.favorites.map(e => e.id).indexOf(action.payload.id);
            if (index >= 0) {
                state.favorites.splice(index, 1);
            }
        }
    }
})

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;