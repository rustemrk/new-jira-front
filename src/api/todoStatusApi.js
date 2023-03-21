import restHttpClient from "@/api/restHttpClient";

const todoStatusApi = {
    get: (id) => {
        return restHttpClient.get('/api/v1/todo-status/' + id);
    },
    getAll: () => {
        return restHttpClient.get('/api/v1/todo-status')
    },
    getAllWithTodos: () => {
        return restHttpClient.get('/api/v1/todo-status/with-todos')
    },
}

export default todoStatusApi