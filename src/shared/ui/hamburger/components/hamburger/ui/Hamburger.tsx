import { useState } from 'react'
import styles from './styles/Hamburger.module.css'
import { BottomLine } from '../components/bottomLine/ui/BottomLine';
import { CenterLine } from '../components/centerLine/ui/CenterLine';
import { TopLine } from '../components/topLine/ui/TopLine';

export const Hamburger = () => {
    const [status, setStatus] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setStatus(!status)
    }

    return (
        <div className={styles.hamburger__menu} onClick={handleClick}>
            <TopLine></TopLine>
            <CenterLine></CenterLine>
            <BottomLine></BottomLine>
        </div>
    )
}