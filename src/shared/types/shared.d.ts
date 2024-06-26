interface PriceContextType {
    price: string,
    currency: string,
}

interface ImageContextType {
    urls: PreviewUrls,
}

interface DescriptionContextType {
    description: string,
}

interface ImageShowcaseContextType {
    setPreview: React.Dispatch<React.SetStateAction<PreviewUrls>>,
    urls: Array<PreviewUrls>,
}

interface SegmentContextType {
    setPreview: React.Dispatch<React.SetStateAction<PreviewUrls>>,
    urls: PreviewUrls,
}

interface PreviewUrls {
    url: string,
    srcSet: Array<string>
}

interface LogoContextType {
    logo: string
}

interface SearchPanelContextType {
    trigger: boolean,
    keywords: Array<string>,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
}

interface KeywordContainerContextType {
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

interface PlugContextType {
    state: boolean,
    index: string,
}