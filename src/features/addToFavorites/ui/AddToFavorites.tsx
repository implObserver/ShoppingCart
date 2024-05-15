import { useState } from "react";
import { addToFavorites } from "../api/addToFavorites";
import { useProductContext } from "@/entities/product";
import { Like, LikeContext } from "@/shared/ui/like";
import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";
import { getFavouriteStatus } from "../api/localStorage/getFavouriteStatus";
import { setFavouriteStatus } from "../api/localStorage/setFavouriteStatus";

export const AddToFavorites = () => {
    const context = useProductContext();
    const [status, setStatus] = useState(getFavouriteStatus(context.id));

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            setFavouriteStatus(context.id, !status);
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