<template>
    <div>
        <v-dialog
            v-model="show"
            persistent
            max-width="800px"
        >
            <v-card>
                <v-card-title>
                    <v-col cols="6">
                        <span class="text-h5">Создание задачи</span>
                    </v-col>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-select
                                    :items="items"
                                    v-model="todo.typeId"
                                    name="name"
                                    item-text="name"
                                    item-value="id"
                                    label="Тип"
                                    dense
                                    outlined
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    dense
                                    label="Заголовок"
                                    v-model="todo.title"
                                    :rules="rules.title"
                                    outlined
                                    autofocus
                                    clearable
                                />
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
                        color="blue darken-1"
                        text
                        @click="closeModal"
                    >
                        Отмена
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        dark
                        @click="save"
                    >
                        Создать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="snackbar"
            :timeout="snackbarTimeOut"
            absolute
            transition="scroll-y-transition"
            elevation="0"
            bottom
            right
            color="primary"
        >
            {{ snackbarText }}
        </v-snackbar>
    </div>
</template>

<script>
    import todoApi from "@/api/todoApi";

    export default {
        name: "TodoModal",
        props: {
            show: {type: Boolean, default: false},
        },
        data() {
            return {
                items: [
                    {id: 1, name: 'Задача'},
                    {id: 2, name: 'Баг'}
                ],
                valid: true,
                todo: {
                    title: null,
                    description: null,
                    typeId: 1,
                    statusId: 1
                },
                rules: {
                    title: [val => (val || '').length > 0 || ''],
                },
                snackbar: false,
                snackbarText: 'Задача добавлена',
                snackbarTimeOut: 1500
            }
        },
        methods: {
            closeModal() {
                this.$emit("close");
            },
            save() {
                todoApi.save(this.todo).then(() => {
                    this.$emit("close");
                    this.snackbar = !this.snackbar;
                })
            },
        }
    }
</script>

<style lang="scss">

</style>