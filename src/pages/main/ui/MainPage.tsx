import styles from '../styles/MainPage.module.css'
import { ProductsShowcase } from '@/widgets/productsShowcase';
import { Link } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { ProductFilling } from '@/features/productFilling';

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Header></Header>
            <Link to='favourites'> favorite</Link>
            <ProductFilling>
                <ProductsShowcase></ProductsShowcase>
            </ProductFilling>
        </div>
    )
}