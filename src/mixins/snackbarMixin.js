export const snackbarMixin = {
    methods: {
        showSnackbar(text) {
            this.snackbarText = text
            this.snackbar = !this.snackbar
        }
    }
}