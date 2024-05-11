import { Product, ProductContext } from "@/entities/product"
import examples from '../../../shared/lib/productExample/products.json'
import { AddToFavorites } from "@/features/addToFavorites"
import { ProductWidget } from "../components/product"

export const ProductShowcase = () => {
    const fill = () => {
        const products = Object.values(examples);
        return products.map((example: ProductContextType, index) => {
            return (
                <ProductContext.Provider key={index} value={example}>
                    <ProductWidget></ProductWidget>
                </ProductContext.Provider>
            )
        })
    }

    return (
        <div>
            {fill()}
        </div>
    )
}