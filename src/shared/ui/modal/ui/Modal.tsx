import styles from './styles/Modal.module.css'

export const Modal = ({ children }) => {
    return (
        <div className={`${styles.modal} ${styles.open}`}>
            {children}
        </div >
    )
}