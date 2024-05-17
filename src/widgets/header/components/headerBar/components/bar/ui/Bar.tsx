import { LogoEntity } from "@/entities/logoEntity"
import { SearchBar } from "@/entities/searchBar"
import styles from './styles/Bar.module.css'
import { HamburgerTrigger } from "@/features/hamburgerTrigger"

export const Bar = () => {
    return (
        <div>
            <div className={styles.bar}>
                <LogoEntity></LogoEntity>
                <SearchBar>
                    <HamburgerTrigger></HamburgerTrigger>
                </SearchBar>
            </div>
        </div>
    )
}