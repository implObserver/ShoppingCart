import { SearchBox } from "@/entities/searchBox";
import { ExternalReset, ExternalResetContext } from "@/features/externalReset";
import { useCustomState } from "@/shared/lib";
import styles from './styles/SearchPanel.module.css'

export const SearchPanelContainer = () => {
    const isCheck = useCustomState();
    const externalElementContext: ExternalResetContextType = {
        state: isCheck,
        index: 'search__box'
    }
    const clickHandle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        isCheck.setState(true);
    }

    return (
        <div className="search__panel__container">
            <div className={styles.container__search__panel} onClick={clickHandle}>
                <ExternalResetContext.Provider value={externalElementContext}>
                    <ExternalReset>
                        <SearchBox></SearchBox>
                    </ExternalReset>
                </ExternalResetContext.Provider>
            </div>
        </div>
    )
}