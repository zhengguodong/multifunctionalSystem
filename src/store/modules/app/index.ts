// src/store/modules/app/index.ts
// 让vuex支持type枚举类型推断
import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
  } from 'vuex'
  
  import { RootState } from '@/store'
  import { state } from './state'
  import { mutations, Mutations } from './mutations'
  import { actions, Actions } from './actions'
  import type { AppState } from './state'
  
  export { AppState }
  
  export type AppStore<S = AppState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>
  } & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>
  };
  export const store: Module<AppState, RootState> = {
    state,
    mutations,
    actions
  }
  