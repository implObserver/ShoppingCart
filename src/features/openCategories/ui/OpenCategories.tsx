import { Hamburger } from "@/shared/ui/hamburger"
import { Modal } from "@/shared/ui/modal"
import styles from './styles/OpenCategories.module.css'
import { useState } from "react"

export const OpenCategories = () => {
    const [status, setStatus] = useState(false);
    const handleClick = (e) => {
        
        setStatus(!status);
        console.log(status)
    }

    return (
        <div className={styles.container__feature__hamburger} onClick={handleClick}>
            <Hamburger></Hamburger>
            <Modal>
                <div style={{
                    position: "absolute",
                    zIndex: 4,
                    width: '100vw',
                    height: '50vh',
                    backgroundColor: 'red',
                    top: '18%',
                    right: '0%'
                }}>
                </div>
            </Modal>
        </div>
    )
}