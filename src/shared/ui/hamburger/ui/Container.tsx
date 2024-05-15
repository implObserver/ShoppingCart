
import { Hamburger } from '../components/hamburger'
import styles from './styles/Container.module.css'

export const Container = () => {
    return (
        <div className={styles.container}>
            <Hamburger></Hamburger>
        </div>
    )
}