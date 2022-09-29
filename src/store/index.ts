// src/store/index.ts
// 导入模块
// 使用vuex的createStore创建store实例
// 导出useStore方法，返回值Store，其他地方需要用到store的一定要使用useStore()
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { store as app, AppStore, AppState } from '@/store/modules/app'
import {main} from "./modules/main/index"
import user from "./modules/user/index"
export interface RootState {
    user: any
    app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>
export  const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        reducer(val) {
            return {
                assessmentData: val.user
            }
        }
    })],
  modules: {
    app,main,user
  }
})

export function useStore (): Store {
  return store as Store
}
