import { Description, DescriptionContext } from "@/shared/ui/description"
import { useEntityDescriptionContext } from "../lib/context/Context"
import styles from './styles/Description.module.css'

export const DescriptionEntity = () => {
    const context = useEntityDescriptionContext();

    const descriptionContext: EntityDescriptionContextType = {
        description: context.description
    }

    return (
        <div className={styles.entity__description}>
            <DescriptionContext.Provider value={descriptionContext}>
                <Description></Description>
            </DescriptionContext.Provider>
        </div >
    )
}