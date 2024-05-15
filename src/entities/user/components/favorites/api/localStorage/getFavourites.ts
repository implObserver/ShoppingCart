import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const getFavourites = () => {
    const { getItem } = useLocalStorage('ObserverShop__Favourites');
    const result = getItem();
    return result ? result : [];
}