import { Provider } from "react-redux"
import { store } from "./Store"

export const WithRedux = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}