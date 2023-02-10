const appModule = {
    namespaced: true,
    state: {
        busy: null
    },
    mutations: {
        SET_BUSY(state, busy) {
            state.busy = busy;
        },
    },
    actions: {
        setAppBusy({commit}, busy) {
            commit('SET_BUSY', busy);
        }
    },
    getters: {
        isAppBusy: state => state.busy,
    },
}

export default appModule;