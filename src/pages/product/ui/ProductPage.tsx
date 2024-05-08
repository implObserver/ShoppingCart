import styles from '../styles/ProductPage.module.css'
import { useLocation } from 'react-router-dom';

export const ProductPage = () => {
    const context = useLocation();
    console.log(context)
    return (
        <div className={styles.page__product}>
            <span>{context.state.info}</span>
            <span>Product Page</span>
        </div>
    )
}