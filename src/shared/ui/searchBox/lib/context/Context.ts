import { createContext, useContext } from "react";

export const TextInputContext = createContext<undefined | TextInputContextType>(undefined);

export const useTextInputContext = () => {
    const props = useContext(TextInputContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TextInputContext');
    }
    return props;
}