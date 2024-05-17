import { SearchPanel } from "../components/searchPanel"
import { HamburgerContainer } from "../components/hamburgerContainer"
import styles from './styles/SearchBar.module.css'

export const SearchBar = ({ children }) => {
    return (
        <div className={styles.search__bar}>
            <HamburgerContainer>
                {children}
            </HamburgerContainer>
            <SearchPanel />
        </div>
    )
}