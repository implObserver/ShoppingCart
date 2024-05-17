import { Button } from "@/shared/ui/button"
import { SearchBox } from "@/shared/ui/searchBox"
import styles from './styles/Search.module.css'

export const SearchPanel = () => {
    return (
        <div className={styles.panel__search}>
            <SearchBox></SearchBox>
            <Button name={"Найти"}></Button>
        </div>
    )
}