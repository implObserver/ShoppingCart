import { Logo, LogoContext } from "@/shared/ui/logo"
import logo from '@/shared/assets/Logo.svg'
import styles from './styles/LogoEntity.module.css'

export const LogoEntity = () => {
    const logoContext: LogoContextType = {
        logo,
    }
    return (
        <div className={styles.entity__logo}>
            <LogoContext.Provider value={logoContext}>
                <Logo></Logo>
            </LogoContext.Provider>
        </div>
    )
}