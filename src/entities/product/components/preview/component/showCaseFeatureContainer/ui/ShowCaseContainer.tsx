import styles from './styles/ShowCaseContainer.module.css'

export const ShowCaseContainer = ({ children }) => {
    return (
        <div className={styles.container__showcase}>
            {children}
        </div>
    )
}