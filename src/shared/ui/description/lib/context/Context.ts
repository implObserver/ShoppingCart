import { createContext, useContext } from "react";

export const DescriptionContext = createContext<undefined | String>(undefined);

export const useDescriptionContext = () => {
    const props = useContext(DescriptionContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a DescriptionContext');
    }
    return props;
}