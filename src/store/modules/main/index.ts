export const main ={
    state:{
        show: false
      },
    getters:{
      getShow (state:any) {
          return state.show
      }
    },
    mutations:{
        setShow (state:any) {
          state.show = !state.show
        }
      },
      actions:{
        asySetShow ({commit}:{commit:any}) {
          commit('setShow')
        }
      }
}
