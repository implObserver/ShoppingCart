import styles from '../styles/MainPage.module.css'
import { ProductsShowcase } from '@/widgets/productsShowcase';
import { Link } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { examples } from '@/shared/lib';

export const MainPage = () => {
    const products = Object.values(examples);
    return (
        <div className={styles.page__main}>
            <Header></Header>
            <Link to='favourites'> favorite</Link>
            <ProductsShowcase products={products}></ProductsShowcase>
        </div>
    )
}