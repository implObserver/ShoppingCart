import { Product } from '@/entities/product'
import styles from '../styles/MainPage.module.css'
import example from '../../../shared/lib/productExample/product.json'
import { ProductContext } from '@/entities/product/lib/context/Context';
import { Like } from '@/shared/ui/like/ui/Like';
import { ShowCase } from '@/shared/ui/showCase/ui/ShowCase';

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <ProductContext.Provider value={example}>
                <Product>
                    <Like></Like>
                    <ShowCase></ShowCase>
                </Product>
            </ProductContext.Provider>
        </div>
    )
}