import { useEffect, useRef } from "react";

export const DropdownElement = ({ status, children }) => {
    const dropDownElementRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (!dropDownElementRef.current.contains(element)
                || element.className.includes('dropdown__close')) {
                status.setState(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })

    return (
        <div ref={dropDownElementRef}>
            {children}
        </div>
    )
}