import restHttpClient from "@/api/restHttpClient";

const todoApi = {
    get: (id) => {
        return restHttpClient.get('/api/todo/' + id);
    },
    create: (data) => {
        return restHttpClient.post('/api/todo', data)
    },
    update: (data) => {
        return restHttpClient.put('/api/todo', data)
    }
}

export default todoApi