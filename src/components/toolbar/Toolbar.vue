<template>
    <header>
        <v-toolbar elevation=0 height="50" class="toolbar">
            <v-btn
                icon
                @click="collapseSidebar"
                class="menu-btn">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-toolbar-title>Jira</v-toolbar-title>

            <v-spacer/>

            <!--            todo подумать над стилем кнопки-->
            <v-btn
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                color="primary"
                class="mr-3"
                depressed
            >
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>

            <v-btn
                @click="showModal"
                color="primary"
                depressed
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>
        <v-snackbar
            v-if="snackbar"
            v-model="snackbar"
            :timeout="2000"
            right
            bottom
            absolute
            color="primary"
            elevation="0"
            transition="scroll-y-transition"
        >
            {{ snackbarText }}
        </v-snackbar>
    </header>
</template>

<script>
    import TodoModal from "@/components/modal/TodoModal";
    import {snackbarMixin} from "@/mixins/snackbarMixin";
    import {UtModal} from "@/utils/UtModal";

    export default {
        name: "Toolbar",
        components: {TodoModal},
        mixins: [snackbarMixin],
        data() {
            return {
                show: false,
                snackbar: false,
                snackbarText: null,
            }
        },
        computed: {
            isCollapsed() {
                return this.$store.getters["sidebar/isCollapsed"];
            },
        },
        methods: {
            showModal() {
                UtModal.showModal(TodoModal, {
                    propsData: {
                        show: true
                    }
                });
            },
            collapseSidebar() {
                this.$store.dispatch('sidebar/setCollapsed', !this.isCollapsed)
            }
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