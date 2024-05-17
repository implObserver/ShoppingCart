import { useCustomState } from "@/shared/lib";
import { Bar } from "../components/bar/ui/Bar"
import { DropDownContainer } from "../components/dropDownContainer/ui/DropDownContainer"
import { DropdownContext } from "@/shared/ui/dropdown";
import styles from './styles/Header.module.css'
import { DropdownElement } from "@/features/dropdownElement";
import { TriggerContext } from "@/features/hamburgerTrigger";

export const HeaderBar = () => {
    const dropdownStatus = useCustomState();

    return (
        <DropdownElement status={dropdownStatus}>
            <div className={`${styles.bar__header} ${dropdownStatus.getState() ? styles.light : ''}`}>

                <TriggerContext.Provider value={dropdownStatus}>
                    <Bar></Bar>
                </TriggerContext.Provider>

                <DropdownContext.Provider value={dropdownStatus.getState()}>
                    <DropDownContainer></DropDownContainer>
                </DropdownContext.Provider>

            </div>
        </DropdownElement>
    )
}