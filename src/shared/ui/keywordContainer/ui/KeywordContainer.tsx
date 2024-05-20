import styles from './styles/KeywordContainer.module.css'
import { useKeywordContainerContext } from "../lib/context/Context"

export const KeywordContainer = ({ keyword }) => {
    const context = useKeywordContainerContext();

    const clickHandle = (e) => {
        context.setValue(keyword);
    }

    return (
        <div className={styles.container__keyword} onClick={clickHandle}>
            <span>{keyword}</span>
            <div className={styles.container__remover}>

            </div>
        </div>
    )
}