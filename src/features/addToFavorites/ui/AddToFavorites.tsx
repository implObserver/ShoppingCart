import { useState } from "react";
import { addToFavorites } from "../api/addToFavorites";
import { useProductContext } from "@/entities/product";
import { Like, LikeContext } from "@/shared/ui/like";
import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";

export const AddToFavorites = () => {
    const context = useProductContext();
    const { getItem, setItem } = useLocalStorage(`${context.id}`);
    const [status, setStatus] = useState(getItem());;

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            setItem(!status);
            setStatus(!status);
            addToFavorites(status, context);

        }
    }

    return (
        <div
            onClick={handleClick}>
            <LikeContext.Provider value={status}>
                <Like></Like>
            </LikeContext.Provider>
        </div>
    )
}