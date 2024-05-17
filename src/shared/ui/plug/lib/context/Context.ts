import { createContext, useContext } from "react";

export const PlugContext = createContext<undefined | boolean>(undefined);

export const usePlugContext = () => {
    const props = useContext(PlugContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PlugContext');
    }
    return props;
}