<template>
    <div>
        <v-toolbar elevation=1 height="50">
            <v-btn icon class="menu-btn">
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
        <todo-modal v-if="show" :show="show" @close="show = !show"/>
    </div>
</template>

<script>
    import TodoModal from "@/components/modal/TodoModal";

    export default {
        name: "MainToolbar",
        components: {TodoModal},

        data() {
            return {
                show: false,
            }
        },
        methods: {
            showModal() {
                this.show = !this.show
            },
        }
    }
</script>

<style lang="scss">
    .menu-btn:hover {
        color: #1976d2 !important;
    }
</style>