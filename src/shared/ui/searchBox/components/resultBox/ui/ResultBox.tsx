import { useSearchBoxContext } from '../../../lib/context/Context';
import { KeywordContainer } from '../components/keywordContainer/ui/KeywordContainer';
import styles from './styles/ResultBox.module.css'

export const ResultBox = () => {
    const context = useSearchBoxContext();

    const fill = () => {
        return context.keywords.map((keyword, index) => {
            return (
                <li key={index}>
                    <KeywordContainer keyword={keyword}></KeywordContainer>
                </li>
            )
        })
    }

    return (
        <div className={`${styles.container__result} ${context.trigger ? styles.open : ''}`}>
            <ul>
                {fill()}
            </ul>
        </div >
    )
}