export default {
    setSession({ commit }: any, loginResponse: any) {
        commit('SET_LOGIN_SESSION', loginResponse)
    },

    setData({ commit }: any,data:any){
        commit('SET_DATA', data)
    }
}