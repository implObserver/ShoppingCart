import store from "@/app/model/store/Store";
import { favoritesActions } from "@/entities/user";

export const addToFavorites = (status: boolean, context: ProductContextType) => {
    if (status === false) {
        store.dispatch(favoritesActions.addFavorite(context))
    } else {
        store.dispatch(favoritesActions.removeFavorite(context))
    }
    store.dispatch(favoritesActions.saveToLocalStorage());
}