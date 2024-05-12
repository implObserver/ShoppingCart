import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { setFavourites } from "../../api/localStorage/setFavourites";

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
        },
        saveToLocalStorage: (state: Favorites) => {
            setFavourites(state.favorites);
        }
    }
})

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;