import { useHamburgerContext } from '../../../lib/Context'
import styles from './style/BottomLine.module.css'

export const BottomLine = () => {
    const context = useHamburgerContext();
    return (
        <div className={`${styles.bottom__line} ${context ? styles.open : ''}`}>

        </div>
    )
}