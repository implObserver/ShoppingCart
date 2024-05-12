import { useSelector } from 'react-redux'
import styles from '../styles/FavouritePage.module.css'
import { selectFavorites } from '@/entities/user'
import { ProductsShowcase } from '@/widgets/productsShowcase';
import { Link } from 'react-router-dom';

export const FavouritePage = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div className={styles.page__main}>
            <Link to='/'> favorite</Link>
            <ProductsShowcase products={favorites.favorites}></ProductsShowcase>
        </div>
    )
}