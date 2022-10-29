<template>
    <div>
        <v-toolbar elevation=0 height="50" class="toolbar">
            <v-btn
                icon
                @click="collapseSidebar"
                class="menu-btn">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-toolbar-title>Jira</v-toolbar-title>

            <v-spacer/>

            <v-btn
                @click="showModal"
                color="primary"
                depressed
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>
        <todo-modal
            v-if="show"
            :show="show"
            @close="show = !show"
            @snackbar="snackbar = !snackbar"
        />
        <v-snackbar
            v-model="snackbar"
            :timeout="snackbarTimeOut"
            right
            bottom
            absolute
            color="primary"
            elevation="0"
            transition="scroll-y-transition"
        >
            {{ snackbarText }}
        </v-snackbar>
    </div>
</template>

<script>
    import TodoModal from "@/components/main/modal/TodoModal";

    export default {
        name: "MainToolbar",
        components: {TodoModal},

        data() {
            return {
                show: false,
                snackbar: false,
                snackbarText: 'Задача добавлена',
                snackbarTimeOut: 1500
            }
        },
        computed: {
            isCollapsed() {
                return this.$store.getters["sidebar/isCollapsed"];
            },
        },
        methods: {
            showModal() {
                this.show = !this.show
            },
            collapseSidebar() {
                this.$store.dispatch('sidebar/setCollapsed', !this.isCollapsed)
            },
        }
    }
</script>

<style lang="scss">
    .toolbar {
        border-bottom: 1px #DCDCDC solid !important;

        .menu-btn:hover {
            color: #1976d2 !important;
        }
    }

</style>