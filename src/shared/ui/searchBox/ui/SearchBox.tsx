import { ResultBox } from "../components/resultBox/ui/ResultBox"
import { useTextInputContext } from "../lib/context/Context"
import styles from './styles/Input.module.css'

export const SearchBox = () => {
    //const context = useTextInputContext();

    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        //context.setValue(e.target.value);
    }

    return (
        <div className={styles.container__input}>
            <input type="text" onInput={inputHandle} placeholder='Искать товары' />
            <ResultBox></ResultBox>
        </div>
    )
}