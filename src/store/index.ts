// src/store/index.ts
// 导入模块
// 使用vuex的createStore创建store实例
// 导出useStore方法，返回值Store，其他地方需要用到store的一定要使用useStore()
import { createStore, createLogger } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { store as app, AppStore, AppState } from '@/store/modules/app'
import {main} from "./modules/main/index"
export interface RootState {
    app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
// const plugins = debug ? [createLogger({})] : []
let plugins :any;
plugins.push([createPersistedState({
  storage: window.sessionStorage,
  reducer(val) {
    return {
      // 只储存state中的assessmentData
      assessmentData: val.assessmentData
    }
  }
})]
)
export const store = createStore({
  plugins,
  modules: {
    app,main
  }
})

export function useStore (): Store {
  return store as Store
}
