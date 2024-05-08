import { useEntityPriceContext } from "@/entities/price/lib/context/Context";
import { Price } from "@/shared/ui/price";
import { PriceContext } from "@/shared/ui/price/lib/context/Context";
import styles from '../styles/LastPrice.module.css'

export const LastPrice = () => {
    const context = useEntityPriceContext();
    const price = context.discount ? context.price : '';
    const priceContext: PriceContext = {
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