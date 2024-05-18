import { useLocalStorage } from "@/shared/lib";
import { getAvailableKeywords } from "../response/getDefaultKeywords";

export const loadKeywords = () => {
    const { getItem } = useLocalStorage('ObserverShop__Keywords');
    const result = getItem();
    return result ? result : getAvailableKeywords();
}