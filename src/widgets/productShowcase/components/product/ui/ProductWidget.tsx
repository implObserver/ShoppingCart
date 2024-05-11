import { Product } from "@/entities/product"
import { AddToFavorites } from "@/features/addToFavorites"

export const ProductWidget = () => {
    return (
        <div>
            <Product>
                <AddToFavorites></AddToFavorites>
            </Product>
        </div>
    )
}