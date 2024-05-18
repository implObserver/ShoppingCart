import { ProductContext } from "@/entities/product"
import { ProductWidget } from "../components/product"
import styles from './styles/ProductShowcase.module.css'
import { useDefaultContext } from "@/shared/lib"

export const ProductsShowcase = () => {
    const products = useDefaultContext('productsContext');
    
    const fill = () => {
        return products.map((example: ProductContextType) => {
            return (
                <ProductContext.Provider key={example.id} value={example}>
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