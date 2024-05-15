import { createContext, useContext } from "react";

export const LogoContext = createContext<undefined | LogoContextType>(undefined);

export const useLogoContext = () => {
    const props = useContext(LogoContext);
    console.log(props)
    if (props === undefined) {
        throw new Error('use this context must be used with a LogoContext');
    }
    return props;
}