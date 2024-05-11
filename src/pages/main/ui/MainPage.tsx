import styles from '../styles/MainPage.module.css'
import { ProductsShowcase } from '@/widgets/productsShowcase';

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <ProductsShowcase></ProductsShowcase>
        </div>
    )
}