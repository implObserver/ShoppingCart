import { LogoEntity } from "@/entities/logoEntity"
import styles from './styles/Bar.module.css'
import { HamburgerTrigger } from "@/features/hamburgerTrigger"
import { SearchPanelContainer } from "../components/searchPanelContainer"

export const Bar = () => {
    return (
        <div>
            <div className={styles.bar}>
                <LogoEntity />
                <HamburgerTrigger></HamburgerTrigger>
                <SearchPanelContainer></SearchPanelContainer>
            </div>
        </div>
    )
}