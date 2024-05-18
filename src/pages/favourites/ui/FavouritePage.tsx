import { FavouriteFilling } from '@/features/favouriteFilling';
import styles from '../styles/FavouritePage.module.css'
import { ProductsShowcase } from '@/widgets/productsShowcase';
import { Link } from 'react-router-dom';

export const FavouritePage = () => {
    return (
        <div className={styles.page__main}>
            <Link to='/'> favorite</Link>
            <FavouriteFilling>
                <ProductsShowcase></ProductsShowcase>
            </FavouriteFilling>
        </div>
    )
}