import { SearchBox } from "@/entities/searchBox";
import { ExternalReset } from "@/features/externalReset";
import { useCustomState } from "@/shared/lib";
import styles from './styles/SearchPanel.module.css'

export const SearchPanelContainer = () => {
    const isCheck = useCustomState();

    const clickHandle = (e) => {
        e.stopPropagation();
        e.preventDefault();
        isCheck.setState(true);
    }

    return (
        <div className="search__panel__container">
            <div className={styles.container__search__panel} onClick={clickHandle}>
                <ExternalReset state={isCheck} index={'searchbox'}>
                    <SearchBox></SearchBox>
                </ExternalReset>
            </div>
        </div>
    )
}