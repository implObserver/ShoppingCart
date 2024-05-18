import { ResultBox } from "../components/resultBox/ui/ResultBox"
import { useSearchBoxContext } from "../lib/context/Context"
import styles from './styles/Input.module.css'

export const SearchBox = () => {
    const context = useSearchBoxContext();
    console.log('dd')
    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setValue(e.target.value);
    }

    return (
        <div className={styles.container__input}>
            <div className={styles.wrapper}>
                <input type="text" value={context.value} onInput={inputHandle} placeholder='Искать товары' autoComplete="off" />
                <button>Найти</button>
            </div>
            <ResultBox></ResultBox>
        </div>
    )
}