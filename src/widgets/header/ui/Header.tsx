import { HeaderBar } from "../components/headerBar/ui/HeaderBar"
import { Promo } from "../components/promo"
import { TopMenu } from "../components/topMenu"
import styles from './styles/Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Promo></Promo>
            <HeaderBar></HeaderBar>
            <TopMenu></TopMenu>
        </div>
    )
}