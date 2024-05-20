import { useSearchPanelContext } from '@/shared/ui/searchPanel';
import styles from './styles/ResultBox.module.css'
import { KeywordContainer, KeywordContainerContext } from '@/shared/ui/keywordContainer';

export const ResultBox = () => {
    const context = useSearchPanelContext();
    const fill = () => {
        return context.keywords.map((keyword, index) => {
            return (
                <li key={index}>
                    <KeywordContainerContext.Provider value={{ setValue: context.setValue }}>
                        <KeywordContainer keyword={keyword}></KeywordContainer>
                    </KeywordContainerContext.Provider>
                </li>
            )
        })
    }

    return (
        <div className={styles.container__result}>
            <ul>
                {fill()}
            </ul>
        </div >
    )
}