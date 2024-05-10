import { createContext, useContext } from "react";

export const ShowCaseContext = createContext<undefined | ShowCaseContextType>(undefined);

export const useShowCaseContext = () => {
    const props = useContext(ShowCaseContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ShowCaseContext');
    }
    return props;
}