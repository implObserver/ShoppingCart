import styles from '../styles/MainPage.module.css'
import { ProductShowcase } from '@/widgets/productShowcase';
const ty = {
    use: 'empty'
}
localStorage.setItem('project', JSON.stringify(ty));
console.log(localStorage.getItem('project'))
export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <ProductShowcase></ProductShowcase>
        </div>
    )
}