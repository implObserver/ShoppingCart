import { ProductPage } from "@/pages/product";
import { FavouritePage } from "@/pages/favourites";
import { MainPage } from "@/pages/main";
import { CartPage } from "@/pages/cart";

const routes = [
    {
        path: "/",
        element:
            <MainPage></MainPage>
    },
    {
        path: "cart",
        element:
            <CartPage></CartPage>
    },
    {
        path: "product",
        element:
            <ProductPage></ProductPage>
    },
    {
        path: "favourites",
        element:
            <FavouritePage></FavouritePage>
    },
];

export default routes;