import restHttpClient from "@/api/restHttpClient";

const todoTypeApi = {
    getAll: () => {
        return restHttpClient.get('/api/v1/todo-type')
    },
}

export default todoTypeApi