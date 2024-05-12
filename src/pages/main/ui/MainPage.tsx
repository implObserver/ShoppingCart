import styles from '../styles/MainPage.module.css'
import { ProductsShowcase } from '@/widgets/productsShowcase';
import examples from '../../../shared/lib/productExample/products.json'
import { Link } from 'react-router-dom';

export const MainPage = () => {
    const products = Object.values(examples);
   
    
    return (
        <div className={styles.page__main}>
            <Link to='favourites'> favorite</Link>
            <ProductsShowcase products={products}></ProductsShowcase>
        </div>
    )
}