import { HeaderMenu } from "../components/header"
import { Promo } from "../components/promo"
import { TopMenu } from "../components/topMenu"

export const Header = () => {
    return (
        <div>
            <Promo></Promo>
            <HeaderMenu></HeaderMenu>
            <TopMenu></TopMenu>
        </div>
    )
}