import { Preview } from "@/shared/ui/preview"
import styles from './styles/PreviewWrapper.module.css'

export const PreviewWrapper = () => {
    return (
        <div className={styles.wrapper__preview}>
            <Preview></Preview>
        </div>
    )
}