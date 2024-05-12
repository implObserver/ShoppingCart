import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const getFavourites = () => {
    const { getItem } = useLocalStorage('ObserverShoppingFavourites');
    const result = getItem();
    return result ? result : [];
}