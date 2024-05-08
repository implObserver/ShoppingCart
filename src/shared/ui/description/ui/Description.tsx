import { useDescriptionContext } from "../lib/context/Context"

export const Description = () => {
    const context = useDescriptionContext();
    return <span>{context}</span>
}