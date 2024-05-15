import { SearchBar } from "@/entities/searchBar"
import { OpenCategories } from "@/features/openCategories"

export const SearchBarWidget = () => {
    return (
        <div>
            <SearchBar>
                <OpenCategories></OpenCategories>
            </SearchBar>
        </div>
    )
}