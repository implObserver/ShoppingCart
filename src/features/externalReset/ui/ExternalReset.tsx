import { PlugContext } from "@/shared/ui/plug/lib/context/Context";
import { Plug } from "@/shared/ui/plug/ui/Plug";
import { useEffect, useRef } from "react";
import styles from './styles/ExternalReset.module.css'

export const ExternalReset = ({ state, children }) => {
    const externalElementRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (!externalElementRef.current.contains(element)
                || element.className.includes('plug')) {
                state.setState(false);
            }
        };
        if (state.getState()) {
            document.addEventListener('mousedown', handler);
        }
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div ref={externalElementRef} className={`${state.getState() ? styles.light : ''}`}>
            <PlugContext.Provider value={state.getState()}>
                {children}
                <Plug></Plug>
            </PlugContext.Provider>
        </div>
    )
}