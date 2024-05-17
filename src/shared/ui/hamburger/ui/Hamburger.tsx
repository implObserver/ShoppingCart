import styles from './styles/Hamburger.module.css'
import { BottomLine } from '../components/bottomLine/ui/BottomLine';
import { CenterLine } from '../components/centerLine/ui/CenterLine';
import { TopLine } from '../components/topLine/ui/TopLine';
import { useHamburgerContext } from '../lib/context/Context';

export const Hamburger = () => {
    const status = useHamburgerContext();
    return (
        <div className={styles.container}>
            <div className={`${styles.hamburger__menu} ${status ? styles.open : ''}`}>
                <TopLine></TopLine>
                <CenterLine></CenterLine>
                <BottomLine></BottomLine>
            </div>
        </div>
    )
}