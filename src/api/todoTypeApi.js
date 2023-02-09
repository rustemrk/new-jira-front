import restHttpClient from "@/api/restHttpClient";

const todoTypeApi = {
    list: () => {
        return restHttpClient.get('/api/todo-type')
    },
}

export default todoTypeApi