import styles from './styles/SearchBox.module.css'
import { useState } from "react"
import { usePlugContext } from "@/shared/ui/plug/lib/context/Context";
import { SearchPanel, SearchPanelContext } from '@/shared/ui/searchPanel';
import { DropdownContainer } from '../components/dropdownContainer';

export const SearchBox = () => {
    const [value, setValue] = useState('');

    const trigger = usePlugContext();
  
    const searchBoxContext: SearchPanelContextType = {
        trigger: trigger.state,
        keywords: ['lol', 'kek', 'cheburek'],
        setValue,
        value,
    }

    return (
        <div className={styles.panel__search}>
            <SearchPanelContext.Provider value={searchBoxContext}>
                <SearchPanel></SearchPanel>
                <DropdownContainer></DropdownContainer>
            </SearchPanelContext.Provider>
        </div>
    )
}