<template>
    <v-card
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
</template>

<script>
    export default {
        name: "KanbanCard",
        props: {
            todo: null
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