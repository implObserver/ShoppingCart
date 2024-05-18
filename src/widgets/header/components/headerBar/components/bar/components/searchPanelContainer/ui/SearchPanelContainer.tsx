import { SearchPanel } from "@/entities/searchPanel";
import { ExternalReset } from "@/features/externalReset";
import { useCustomState } from "@/shared/lib";
import styles from './styles/SearchPanel.module.css'

export const SearchPanelContainer = () => {
    const isCheck = useCustomState();

    const clickHandle = () => {
        isCheck.setState(true);
    }

    return (
        <div>
            <div className={styles.container__search__panel} onClick={clickHandle}>
                <ExternalReset state={isCheck}>
                    <SearchPanel></SearchPanel>
                </ExternalReset>
            </div>
        </div>
    )
}