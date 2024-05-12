import { Price, PriceContext } from "@/shared/ui/price";
import styles from './styles/LastPrice.module.css'
import { useEntityPriceContext } from "../../../lib/context/Context";

export const LastPrice = () => {
    const context = useEntityPriceContext();
    const price = context.discount ? context.price : '';
    const priceContext: PriceContextType = {
        price: price,
        currency: context.currency
    }

    return (
        <span className={styles.last__price}>
            <PriceContext.Provider value={priceContext}>
                <Price></Price>
            </PriceContext.Provider>
        </span>

    )
}