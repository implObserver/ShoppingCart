import { Plug } from "@/shared/ui/plug/ui/Plug";
import { useEffect, useRef } from "react";
import styles from './styles/ExternalReset.module.css';
import { PlugContext } from "@/shared/ui/plug";

export const ExternalReset = ({ state, children, index }) => {
    const externalElementRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (element.className.includes('plug')) {
                if (element.className.includes(index)) {
                    state.setState(false);
                }
            }
        };

        if (state.getState()) {
            document.addEventListener('mousedown', handler);
        }

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    },)

    const plugContext: PlugContextType = {
        state: state.getState(),
        index: index,
    }

    return (
        <div ref={externalElementRef} className={`${state.getState() ? `${styles.light} ${index}` : ''}`}>
            <PlugContext.Provider value={plugContext}>
                {children}
                <Plug></Plug>
            </PlugContext.Provider>
        </div>
    )
}