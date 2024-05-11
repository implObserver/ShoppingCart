interface PriceContextType {
    price: string,
    currency: string,
}

interface ImgContextType {
    url: string,
}

interface DescriptionContextType {
    description: string,
}

interface ImageShowcaseContextType {
    setPreview: React.Dispatch<React.SetStateAction<string>>,
    urls: Array<string>,
}

interface SegmentContextType {
    setPreview: React.Dispatch<React.SetStateAction<string>>,
    url: string,
}