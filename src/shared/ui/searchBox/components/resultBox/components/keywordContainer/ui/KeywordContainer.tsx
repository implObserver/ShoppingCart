import { useSearchBoxContext } from "@/shared/ui/searchBox/lib/context/Context"

export const KeywordContainer = ({ keyword }) => {
    const context = useSearchBoxContext();

    const clickHandle = (e) => {
        context.setValue(keyword);
    }

    return (
        <div onClick={clickHandle}>
            <span>{keyword}</span>
        </div>
    )
}