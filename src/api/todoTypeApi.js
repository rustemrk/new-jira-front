import restHttpClient from "@/api/restHttpClient";

const todoTypeApi = {
    list: () => {
        return restHttpClient.get('/api/v1/todo-type')
    },
}

export default todoTypeApi