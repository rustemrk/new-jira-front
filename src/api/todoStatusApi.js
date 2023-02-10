import restHttpClient from "@/api/restHttpClient";

const todoStatusApi = {
    get: (id) => {
        return restHttpClient.get('/api/todo-status/' + id);
    },
    getAllWithTodos: () => {
        return restHttpClient.get('/api/todo-status/with-todos')
    },
}

export default todoStatusApi