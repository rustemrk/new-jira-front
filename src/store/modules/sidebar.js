const sidebarModule = {
    namespaced: true,
    state: {
        collapsed: false,
        staticItems: [
            {
                id: 1,
                title: 'Доска',
                icon: 'mdi-view-week',
                route: '/board'
            },
            {
                id: 2,
                title: 'Бэклог',
                icon: 'mdi-table-column',
                route: '/backlog'
            }
        ],
    },
    mutations: {
        SET_COLLAPSED(state, collapsed) {
            state.collapsed = collapsed
        },
    },
    actions: {
        setCollapsed({commit}, collapsed) {
            commit('SET_COLLAPSED', collapsed);
        },
    },
    getters: {
        isCollapsed: state => state.collapsed,
        getStaticItems: state => state.staticItems
    },
}

export default sidebarModule;