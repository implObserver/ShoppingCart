import { ActualPrice } from "../components/actual"
import { LastPrice } from "../components/last"
import { useEntityPriceContext } from "../lib/context/Context";
import styles from './styles/PriceEntity.module.css'

export const PriceEntity = () => {
    const context = useEntityPriceContext();

    if (context.discount) {
        return (
            <span className={styles.entity__price}>
                <ActualPrice></ActualPrice>
                <LastPrice></LastPrice>
            </span>
        )
    } else {
        return (
            <span><ActualPrice></ActualPrice></span>
        )
    }
}