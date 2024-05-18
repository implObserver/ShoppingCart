import { createContext, useContext } from "react";

export const Context = createContext<undefined | unknown[]>(undefined);

export const useDefaultContext = (index: string) => {
    const props = useContext(Context);
    if (props === undefined) {
        throw new Error(`use this context must be used with a ${index}`);
    }
    return props;
}