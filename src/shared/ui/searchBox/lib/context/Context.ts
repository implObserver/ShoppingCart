import { createContext, useContext } from "react";

export const SearchBoxContext = createContext<undefined | SearchBoxContextType>(undefined);

export const useSearchBoxContext = () => {
    const props = useContext(SearchBoxContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SearchBoxContext');
    }
    return props;
}