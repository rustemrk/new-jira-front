<template>
    <div>
        <v-card
            @click.native="showModal"
            class="mt-2 card"
            elevation="1">
            <v-card-text>
                {{ todo.title }}
            </v-card-text>
            <v-card-actions>
                <v-list-item class="grow">
                    <v-row align="center" justify="end">
                        <v-icon :color="todo.typeColor">
                            {{ todo.typeIcon }}
                        </v-icon>
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
        <todo-modal
            v-if="show"
            :todo-id="todo.id"
            :show="show"
            @close="show = !show"
            @snackbar="showSnackbar"
        />
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
    </div>
</template>

<script>
    import TodoModal from "@/components/modal/TodoModal";
    import {snackbarMixin} from "@/mixins/snackbarMixin";

    export default {
        name: "KanbanCard",
        components: {TodoModal},
        mixins: [snackbarMixin],
        props: {
            todo: null
        },
        data() {
            return {
                show: false,
                snackbar: false,
                snackbarText: null
            }
        },
        methods: {
            showModal() {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss">
    .card {
        transform: translate(0, 0);
    }

    .card:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }
</style>