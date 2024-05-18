import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveFavourites = (favorites: Array<ProductContextType>) => {
    const { setItem } = useLocalStorage('ObserverShop__Favourites');
    setItem(favorites);
}