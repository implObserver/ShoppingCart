import { getFavourites } from "../../api/localStorage/getFavourites";

export const initialState: Favorites = {
    favorites: getFavourites(),
}