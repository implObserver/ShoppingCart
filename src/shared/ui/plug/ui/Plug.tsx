import { usePlugContext } from '../lib/context/Context'
import styles from './styles/Plug.module.css'

export const Plug = () => {
    const state = usePlugContext();
    return (
        <div className={`${state ? styles.plug : ''}`}></div>
    )
}