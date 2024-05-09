import { useImageContext } from "../lib/context/Context"
import styles from './styles/Preview.module.css'

export const Preview = () => {
    const context = useImageContext();
    return (
        <div className={styles.preview}>
            <img src={context.url} alt="" />
        </div>
    )
}