<template>
    <div class="modal">
        <v-dialog
            v-model="show"
            persistent
            max-width="800px"
        >
            <v-card>
                <v-card-title>
                    <v-col cols="6">
                        <span class="text-h6">Создание задачи</span>
                    </v-col>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="4">
                                <v-select
                                    class="todo-type-select"
                                    dense
                                    outlined
                                    label="Тип"
                                    name="name"
                                    item-text="name"
                                    item-value="id"
                                    :items="todoTypeItems"
                                    v-model="todo.typeId"
                                    :loading="todoTypesLoading"
                                    :disabled="todoTypesLoading"
                                    :error-messages="typeErrors"
                                    @input="$v.todo.typeId.$touch()"
                                    @blur="$v.todo.typeId.$touch()"
                                >
                                    <template #item="{ item }">
                                        <v-icon :color="item.color">{{ item.icon }}</v-icon>
                                        <v-list-item>{{ item.name }}</v-list-item>
                                    </template>

                                    <template #selection="{ item }">
                                        <div class="selection">
                                            <v-icon :color="item.color">{{ item.icon }}</v-icon>
                                            <v-list-item>{{ item.name }}</v-list-item>
                                        </div>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-form ref="form">
                                    <v-text-field
                                        dense
                                        autofocus
                                        outlined
                                        clearable
                                        clear-icon="mdi-close-circle-outline"
                                        label="Заголовок"
                                        v-model.trim="todo.title"
                                        :error-messages="titleErrors"
                                        @input="$v.todo.title.$touch()"
                                        @blur="$v.todo.title.$touch()"
                                    />
                                </v-form>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea
                                    outlined
                                    v-model="todo.description"
                                    label="Описание"
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        outlined
                        color="primary"
                        elevation="0"
                        :disabled="isLoading"
                        @click="closeModal"
                    >
                        Отмена
                    </v-btn>
                    <v-btn
                        elevation="0"
                        color="primary"
                        :disabled="isLoading"
                        @click="save"
                    >
                        Создать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import todoApi from "@/api/todoApi";
    import {validationMixin} from 'vuelidate'
    import {required} from 'vuelidate/lib/validators'
    import todoTypeApi from "@/api/todoTypeApi";

    export default {
        name: "TodoModal",
        props: {
            show: {type: Boolean, default: false},
        },
        mixins: [validationMixin],
        validations: {
            todo: {
                title: {required},
                typeId: {required}
            }
        },
        data() {
            return {
                errors: [],
                typeError: [],
                todoTypeItems: [],
                isLoading: false,
                todoTypesLoading: false,
                todo: {
                    title: null,
                    description: null,
                    typeId: 1,
                },
            }
        },
        created() {
            this.getTodoTypes()
        },
        computed: {
            titleErrors() {
                if (!this.$v.todo.title.$dirty ||
                    !this.$v.todo.title.required && this.errors.push('')) {
                    return this.errors
                } else {
                    this.errors = []
                    return this.errors
                }
            },
            typeErrors() {
                if (!this.$v.todo.typeId.$dirty ||
                    !this.$v.todo.typeId.required && this.typeError.push('')) {
                    return this.typeError
                } else {
                    this.typeError = []
                    return this.typeError
                }
            }
        },
        methods: {
            async getTodoTypes() {
                this.todoTypesLoading = true;
                await todoTypeApi.list().then(response => {
                    this.todoTypeItems = response.data
                }).finally(() => {
                    this.todoTypesLoading = false;
                })
            },
            closeModal() {
                this.$emit("close");
            },
            hasErrors() {
                if (!this.todo.title) this.errors.push('')
                if (!this.todo.typeId) this.typeError.push('')
                return this.errors.length > 0 || this.typeError.length > 0;
            },
            save() {
                if (!this.hasErrors()) {
                    this.isLoading = true;
                    todoApi.create(this.todo).then(() => {
                        this.$store.dispatch('event/todoCreated');
                        this.$emit("close");
                        this.$emit("snackbar");
                    }).finally(() => {
                        this.isLoading = false;
                    })
                }
            },
        }
    }
</script>

<style lang="scss">

    .todo-type-select {
        .v-select__selections {
            height: 40px;
            flex-wrap: nowrap;

            .selection {
                display: flex;
                flex-direction: row;

                .v-list-item {
                    padding: 0 8px;
                }
            }
        }
    }

    .v-menu__content {
        .v-list-item {
            padding: 0 8px;
        }
    }
</style>