import { Hamburger } from '@/shared/ui/hamburger'
import styles from './styles/HamburgerContainer.module.css'

export const HamburgerContainer = ({ children }) => {
    return (
        <div className={styles.container__hamburger}>
            {children}
        </div>
    )
}