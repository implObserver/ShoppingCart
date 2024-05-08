import { usePriceContext } from "../../../lib/context/Context"

export const Currency = () => {
    const context = usePriceContext();
    return (
        <span>{context.currency}</span>
    )
}