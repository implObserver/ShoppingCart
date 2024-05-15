import { useHamburgerContext } from '../../../lib/Context';
import styles from './styles/CenterLine.module.css'

export const CenterLine = () => {
    const context = useHamburgerContext();
    return (
        <div className={`${styles.center__line} ${context ? styles.open : ''}`}>

        </div>
    )
}