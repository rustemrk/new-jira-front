import restHttpClient from "@/api/restHttpClient";

const todoStatusApi = {
    get: (id) => {
        return restHttpClient.get('/api/todo-status/' + id);
    },
    list: () => {
        return restHttpClient.get('/api/todo-status')
    },
}

export default todoStatusApi