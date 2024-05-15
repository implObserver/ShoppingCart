import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import styles from './styles/Search.module.css'

export const SearchPanel = () => {
    return (
        <div className={styles.panel__search}>
            <Input></Input>
            <Button></Button>
        </div>
    )
}