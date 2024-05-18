import { loadFavourites } from "../../api/localStorage/loadFavourites";

export const initialState: Favorites = {
    favorites: loadFavourites(),
}