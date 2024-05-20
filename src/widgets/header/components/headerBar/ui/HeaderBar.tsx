import { useCustomState } from "@/shared/lib";
import { DropdownContext } from "@/shared/ui/dropdown";
import styles from './styles/Header.module.css'
import { ExternalReset } from "@/features/externalReset";
import { TriggerContext } from "@/features/hamburgerTrigger";
import { Bar } from "../components/bar";
import { DropDownContainer } from "../components/dropDownContainer";

export const HeaderBar = () => {
    const dropdownStatus = useCustomState();
    console.log('bar')
    return (
        <ExternalReset state={dropdownStatus} index={'header'}>
            <div className={styles.bar__header}>

                <TriggerContext.Provider value={dropdownStatus}>
                    <Bar></Bar>
                </TriggerContext.Provider>

                <DropdownContext.Provider value={dropdownStatus.getState()}>
                    <DropDownContainer></DropDownContainer>
                </DropdownContext.Provider>

            </div>
        </ExternalReset>
    )
}