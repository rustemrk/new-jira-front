<template>
    <div class="type-filter">
        <v-col cols="2">
            <v-menu
                content-class="type-item-menu"
                class="type-item-menu"
                :close-on-content-click="false"
                bottom
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        small
                        outlined
                        v-bind="attrs"
                        v-on="on"
                    >
                        Тип
                        <span v-if="filter.todoTypes.length > 0"
                              class="circle">
                            {{ filter.todoTypes.length > 0 ? filter.todoTypes.length : '' }}
                        </span>
                        <v-icon right dark>
                            mdi-chevron-down
                        </v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group
                        color="primary"
                        @change="asd"
                        v-model="filter.todoTypes"
                        multiple
                    >
                        <template v-for="(item, index) in todoTypes">
                            <v-list-item :key="index" :value="item.id">
                                <v-list-item-icon>
                                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-col>
    </div>
</template>

<script>
    import todoTypeApi from "@/api/todoTypeApi";

    export default {
        name: "TypeFilter",
        props: {
            filter: Object
        },
        data() {
            return {
                todoTypes: [],
            }
        },
        created() {
            this.getTodoTypes();
        },
        methods: {
            getTodoTypes() {
                todoTypeApi.getAll().then(response => {
                    this.todoTypes = response.data
                })
            },
            asd() {
                console.log(this.filter.todoTypes)
            },
        }
    }
</script>

<style lang="scss">
    .type-filter {
        .circle {
            border-radius: 100%;
            background-color: #1976d2;
            color: white;
            width: 16px;
            height: 16px;
            margin-left: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .type-item-menu {
        .v-list {
            .v-item-group {
                .v-list-item {
                    padding: 8px;
                    display: flex;
                    flex-direction: row;
                    min-height: 0;

                    .v-list-item__icon {
                        margin: 0 4px 0 0;
                    }

                    .v-list-item__content {
                        padding: 0;
                    }
                }
            }
        }
    }
</style>