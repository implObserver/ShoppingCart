import { ImageContext, Preview } from "@/shared/ui/preview"
import { LikeContainer } from "../component/likeFeatureContainer"
import { ShowCaseContainer } from "../component/showCaseFeatureContainer"
import { useEntityPreviewContext } from "../lib/context/Context";
import { PreviewWrapper } from "../component/previewWrapper";
import styles from './styles/Preview.module.css'

export const PreviewEntity = ({ children }) => {
    const like = children[0];
    const showCase = children[1];
    const previewContext = useEntityPreviewContext();

    const imageContext: ImgContextType = {
        url: previewContext.url
    }

    return (
        <div className={styles.entity__preview}>
            <ImageContext.Provider value={imageContext}>
                <PreviewWrapper></PreviewWrapper>
            </ImageContext.Provider>

            <LikeContainer>
                {like}
            </LikeContainer>

            <ShowCaseContainer>
                {showCase}
            </ShowCaseContainer>
        </div>
    )
}