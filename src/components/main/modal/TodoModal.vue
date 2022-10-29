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
                                    dense
                                    outlined
                                    label="Тип"
                                    name="name"
                                    item-text="name"
                                    item-value="id"
                                    :items="items"
                                    v-model="todo.typeId"
                                    :error-messages="typeErrors"
                                    @input="$v.todo.typeId.$touch()"
                                    @blur="$v.todo.typeId.$touch()"
                                />
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
                        @click="closeModal"
                    >
                        Отмена
                    </v-btn>
                    <v-btn
                        dark
                        elevation="0"
                        color="primary"
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
                items: [
                    {id: 1, name: 'Задача'},
                    {id: 2, name: 'Баг'}
                ],
                todo: {
                    title: null,
                    description: null,
                    typeId: 1,
                    statusId: 1
                },
            }
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
                    todoApi.save(this.todo).then(() => {
                        this.$emit("close");
                        this.$emit("snackbar");
                    })
                }
            },
        }
    }
</script>

<style lang="scss">

</style>