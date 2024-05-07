import { CartPage } from "@pages/cart";
import { ProductPage } from "@/pages/product";
import { WithRedux } from "./WithRedux";
import App from "../App";
import { FavouritePage } from "@/pages/favourites";
import { MainPage } from "@/pages/main";

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