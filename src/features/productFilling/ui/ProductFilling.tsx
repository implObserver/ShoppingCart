import { Context } from "@/shared/lib";
import { getProducts } from "../api/response/getProducts"

export const ProductFilling = ({ children }) => {
    const products = getProducts();
    return (
        <div>
            <Context.Provider value={products}>
                {children}
            </Context.Provider>
        </div>
    )
}