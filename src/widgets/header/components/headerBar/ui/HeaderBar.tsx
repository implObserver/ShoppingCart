import styles from './styles/HeaderBar.module.css'
import { LogoEntity } from '@/entities/logoEntity'
import { Dropdown, DropdownContext } from '@/shared/ui/dropdown'
import { HamburgerContext } from '@/shared/ui/hamburger'
import { substringIncludes, useCustomState } from '@/shared/lib'
import { SearchBar } from '@/entities/searchBar'

export const HeaderBar = () => {
    const dropdownStatus = useCustomState();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        const includes = substringIncludes(element.className, 'hamburger', 'background')
        if (includes) {
            dropdownStatus.toggle();
        }
    }

    return (
        <div className={`${styles.wrapper__bar__header} ${dropdownStatus.getState() ? styles.light : ''}`}
            onClick={handleClick}>

            <div className={styles.header}>
                <HamburgerContext.Provider value={dropdownStatus.getState()}>
                    <LogoEntity></LogoEntity>
                    <SearchBar></SearchBar>
                </HamburgerContext.Provider>
            </div>

            <DropdownContext.Provider value={dropdownStatus.getState()}>
                <Dropdown>
                    <div className="settings" style={{
                        display: "grid",
                        height: '50vh',
                        backgroundColor: 'green',
                    }}>
                    </div>
                </Dropdown>
            </DropdownContext.Provider>
        </div>
    )
}