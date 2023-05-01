const eventModule = {
    namespaced: true,
    state: {
        todoCreated: null,
        todoUpdated: null
    },
    mutations: {
        TODO_CREATED(state) {
            state.todoCreated = {dt: new Date()};
        },
        TODO_UPDATED(state) {
            state.todoUpdated = {dt: new Date()};
        },
    },
    actions: {
        todoCreated({commit}) {
            commit('TODO_CREATED')
        },
        todoUpdated({commit}) {
            commit('TODO_UPDATED')
        },
    },
    getters: {
        todoCreated: state => state.todoCreated,
        todoUpdated: state => state.todoUpdated
    }
}

export default eventModule;