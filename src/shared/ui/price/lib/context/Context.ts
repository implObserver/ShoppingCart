import { createContext, useContext } from "react";

export const PriceContext = createContext<undefined | PriceContext>(undefined);

export function usePriceContext() {
    const props = useContext(PriceContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PriceContext');
    }
    return props;
}