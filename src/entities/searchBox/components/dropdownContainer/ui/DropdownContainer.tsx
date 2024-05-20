import { Dropdown, DropdownContext } from "@/shared/ui/dropdown"
import { usePlugContext } from "@/shared/ui/plug/lib/context/Context"
import styles from './styles/DropdownContainer.module.css'
import { ResultBox } from "../components/resultBox"

export const DropdownContainer = () => {
    const context = usePlugContext();

    return (
        <div className={styles.container__dropdown__resultBox}>
            <DropdownContext.Provider value={context.state}>
                <Dropdown>
                    <ResultBox></ResultBox>
                </Dropdown>
            </DropdownContext.Provider>
        </div>
    )
}