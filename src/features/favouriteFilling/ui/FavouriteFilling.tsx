import { selectFavorites } from "@/entities/user"
import { Context } from "@/shared/lib"
import { useSelector } from "react-redux"

export const FavouriteFilling = ({ children }) => {
    const favourites = useSelector(selectFavorites);
    return (
        <div>
            <Context.Provider value={favourites.favorites}>
                {children}
            </Context.Provider>
        </div>
    )
}