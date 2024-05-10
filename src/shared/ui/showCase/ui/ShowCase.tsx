import { Segment, SegmentContext } from "../components/segment";
import { useShowCaseContext } from "../lib/context/Context"
import styles from './styles/ShowCase.module.css'

export const ShowCase = () => {
    const context = useShowCaseContext();
    const urls = context.urls;

    const fill = () => {
        return urls.map((url, index) => {

            const segmentContext: SegmentContextType = {
                url,
                setPreview: context.setPreview
            }

            return (
                <SegmentContext.Provider key={index} value={segmentContext}>
                    <Segment></Segment>
                </SegmentContext.Provider>
            )
        })
    }
    
    return (
        <div className={styles.showcase}>
            {fill()}
        </div>
    )
}