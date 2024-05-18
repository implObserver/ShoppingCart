import { useLocalStorage } from "@/shared/lib";

export const saveKeywords = (keywords: Array<string>) => {
    const { setItem } = useLocalStorage('ObserverShop__Keywords');
    setItem(keywords);
}