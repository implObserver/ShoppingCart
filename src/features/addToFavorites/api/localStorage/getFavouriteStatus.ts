import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const getFavouriteStatus = (id: number) => {
    const { getItem } = useLocalStorage(`ObserverShop__likeFeatureState__${id}`);
    const result = getItem();
    return result ? result : false;
}