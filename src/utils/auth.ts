// @ts-ignore
import {store} from "../store/index"
export const getToken = () => {
    return store.getters.getToken
}
