import { LogoEntity } from '@/entities/logoEntity/ui/LogoEntity'
import styles from './styles/Header.module.css'
import { SearchBarWidget } from '../components/searchBarWidget'

export const Header = () => {
    return (
        <div className={styles.header}>
            <LogoEntity></LogoEntity>
            <SearchBarWidget></SearchBarWidget>
        </div>
    )
}