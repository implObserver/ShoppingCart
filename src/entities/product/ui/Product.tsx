import { EntityPriceContext, PriceEntity } from "../components/price"
import { useProductContext } from "../lib/context/Context"
import { EntityPreviewContext, PreviewEntity } from "../components/preview";
import { DescriptionEntity, EntityDescriptionContext } from "../components/description";
import styles from './styles/Product.module.css'

export const Product = ({ children }) => {
    const context = useProductContext();
    const previewContext = context.preview;
    const priceContext = context.price;
    const descriptionContext = context.description;

    console.log(context)
    return (
        <div className={styles.product}>
            <EntityPreviewContext.Provider value={previewContext}>
                <PreviewEntity>
                    {children}
                </PreviewEntity>
            </EntityPreviewContext.Provider>

            <EntityDescriptionContext.Provider value={descriptionContext}>
                <DescriptionEntity></DescriptionEntity>
            </EntityDescriptionContext.Provider>

            <EntityPriceContext.Provider value={priceContext}>
                <PriceEntity></PriceEntity>
            </EntityPriceContext.Provider>
        </div>
    )
}