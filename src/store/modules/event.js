const eventModule = {
    namespaced: true,
    state: {
        todoCreated: null
    },
    mutations: {
        TODO_CREATED(state) {
            state.todoCreated = {dt: new Date()};
        },
    },
    actions: {
        todoCreated({commit}) {
            commit('TODO_CREATED')
        },
    },
    getters: {
        todoCreated: state => state.todoCreated
    }
}

export default eventModule;