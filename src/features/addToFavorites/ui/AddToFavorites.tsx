import { useState } from "react";
import { addToFavorites } from "../api/addToFavorites";
import { useProductContext } from "@/entities/product";
import { Like } from "@/shared/ui/like";

export const AddToFavorites = () => {
    const [status, setStatus] = useState(false);
    const context = useProductContext();
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            setStatus(!status);
            addToFavorites(status, context);
        }
    }

    return (
        <div
            onClick={handleClick}>
            <Like></Like>
        </div>
    )
}