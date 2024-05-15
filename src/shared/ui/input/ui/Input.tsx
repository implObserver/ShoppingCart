import { useTextInputContext } from "../lib/context/Context"
import styles from './styles/Input.module.css'

export const Input = () => {
    //const context = useTextInputContext();

    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        //context.setValue(e.target.value);
    }

    return (
        <div className={styles.container__input}>
            <input type="text" onInput={inputHandle} />
        </div>
    )
}