import { useLogoContext } from "../lib/context/Context"
import styles from './styles/Logo.module.css'

export const Logo = () => {
    const context = useLogoContext();
    return (
        <div className={styles.logo}>
            <img
                alt=""
                src={context.logo}
            />
        </div>
    )
}