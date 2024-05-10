import { ShowCase } from '@/shared/ui/showCase/ui/ShowCase'
import styles from './styles/ShowCaseContainer.module.css'

export const ShowCaseContainer = () => {
    return (
        <div className={styles.container__showcase}>
            <ShowCase></ShowCase>
        </div>
    )
}