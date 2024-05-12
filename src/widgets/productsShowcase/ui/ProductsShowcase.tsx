import { ProductContext } from "@/entities/product"
import examples from '../../../shared/lib/productExample/products.json'
import { ProductWidget } from "../components/product"
import styles from './styles/ProductShowcase.module.css'

export const ProductsShowcase = () => {
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
        <div className={styles.showcase__product}>
            {fill()}
        </div>
    )
}