import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const setFavourites = (favorites: Array<ProductContextType>) => {
    const { setItem } = useLocalStorage('ObserverShoppingFavourites');
    setItem(favorites);
}