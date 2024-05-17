import { Hamburger, HamburgerContext } from "@/shared/ui/hamburger"
import { useTriggerContext } from "../lib/context/Context";
import styles from './styles/HamburgerTrigger.module.css'

export const HamburgerTrigger = () => {
    const context = useTriggerContext();

    const handleClick = (e) => {
        e.stopPropagation();
        context.toggle();
    }

    return (
        <div className={styles.trigger__hamburger} onClick={handleClick}>
            <HamburgerContext.Provider value={context.getState()}>
                <Hamburger></Hamburger>
            </HamburgerContext.Provider>
        </div>
    )
}