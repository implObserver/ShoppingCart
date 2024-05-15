import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const setFavouriteStatus = (id: number, status: boolean) => {
    const { setItem } = useLocalStorage(`ObserverShop__likeFeatureState__${id}`);
    setItem(status);
}