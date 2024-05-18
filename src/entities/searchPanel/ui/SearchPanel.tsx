import { SearchBox, SearchBoxContext } from "@/shared/ui/searchBox"
import styles from './styles/Search.module.css'
import { useState } from "react"
import { usePlugContext } from "@/shared/ui/plug/lib/context/Context";

export const SearchPanel = () => {
    const [value, setValue] = useState('');

    const trigger = usePlugContext();
    const searchBoxContext: SearchBoxContextType = {
        trigger,
        keywords: ['lol', 'kek', 'cheburek'],
        setValue,
        value,
    }
    return (
        <div className={styles.panel__search}>
            <SearchBoxContext.Provider value={searchBoxContext}>
                <SearchBox></SearchBox>
            </SearchBoxContext.Provider>
        </div>
    )
}