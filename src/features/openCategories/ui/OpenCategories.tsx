import { Hamburger } from "@/shared/ui/hamburger"
import { Modal } from "@/shared/ui/modal"
import { useState } from "react"
import styles from './styles/OpenCategories.module.css'

export const OpenCategories = () => {
    const [status, setStatus] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.className !== 'settings') {
            setStatus(!status);
        }
    }

    if (status) {
        return (
            <div className={styles.container__feature__hamburger} onClick={handleClick}>
                <Hamburger></Hamburger>
                <Modal>
                    <div className="settings" style={{
                        position: "absolute",
                        zIndex: 2,
                        width: '100vw',
                        height: '50vh',
                        backgroundColor: 'red',
                        top: '17%',
                        right: '0%'
                    }}>
                    </div>
                </Modal >
            </div >
        )
    } else {
        return (
            <div onClick={handleClick}>
                <Hamburger></Hamburger>
            </div>
        )
    }
}