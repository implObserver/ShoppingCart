import { useEntityPriceContext } from "@/entities/price/lib/context/Context";
import { Price } from "@/shared/ui/price"
import { PriceContext } from "@/shared/ui/price/lib/context/Context";
import styles from '../styles/ActualPrice.module.css'

export const ActualPrice = () => {
    const context = useEntityPriceContext();
    const price = context.discount ? context.discountPrice : context.price;
    const style = context.discount ? styles.dicount__price : styles.base__price;

    const priceContext: PriceContext = {
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