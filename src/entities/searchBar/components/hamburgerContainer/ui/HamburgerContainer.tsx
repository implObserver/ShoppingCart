import { Hamburger } from '@/shared/ui/hamburger'
import styles from './styles/HamburgerContainer.module.css'

export const HamburgerContainer = () => {
    return (
        <div className={styles.container__hamburger}>
            <Hamburger></Hamburger>
        </div>
    )
}