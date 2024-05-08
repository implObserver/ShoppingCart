import { useEntityPriceContext } from "@/entities/price/lib/context/Context";
import { Price, PriceContext } from "@/shared/ui/price"
import styles from '../styles/ActualPrice.module.css'

export const ActualPrice = () => {
    const context = useEntityPriceContext();
    const price = context.discount ? context.discountPrice : context.price;
    const style = context.discount ? styles.dicount__price : styles.base__price;

    const priceContext: PriceContextType = {
        price: price,
        currency: context.currency
    }

    return (
        <span className={style}>
            <PriceContext.Provider value={priceContext}>
                <Price></Price>
            </PriceContext.Provider>
        </span>

    )
}