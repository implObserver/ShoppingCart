import { ImageShowcase } from '@/shared/ui/imageShowcase'
import styles from './styles/ShowCaseContainer.module.css'

export const ShowCaseContainer = () => {
    return (
        <div className={styles.container__showcase}>
            <ImageShowcase></ImageShowcase>
        </div>
    )
}