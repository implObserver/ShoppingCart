import { ImageContext, Preview } from "@/shared/ui/preview"
import { LikeContainer } from "../component/likeFeatureContainer"
import { ShowCaseContainer } from "../component/showCaseFeatureContainer"
import { useEntityPreviewContext } from "../lib/context/Context";
import { PreviewWrapper } from "../component/previewWrapper";
import styles from './styles/Preview.module.css'
import { useState } from "react";
import { ShowCaseContext } from "@/shared/ui/imageShowcase";

export const PreviewEntity = ({ children }) => {
    const like = children;
    const previewContext = useEntityPreviewContext();
    const [url, setUrl] = useState(previewContext.urls[0]);

    const imageContext: ImgContextType = {
        url
    }

    const showCaseContext: ImageShowcaseContextType = {
        setPreview: setUrl,
        urls: previewContext.urls
    }

    return (
        <div className={styles.entity__preview}>
            <ImageContext.Provider value={imageContext}>
                <PreviewWrapper />
            </ImageContext.Provider>

            <LikeContainer>
                {like}
            </LikeContainer>

            <ShowCaseContext.Provider value={showCaseContext}>
                <ShowCaseContainer />
            </ShowCaseContext.Provider>
        </div>
    )
}