import restHttpClient from "@/api/restHttpClient";

const todoApi = {
    get: (id) => {
        return restHttpClient.get('/api/v1/todo/' + id);
    },
    create: (data) => {
        return restHttpClient.post('/api/v1/todo', data)
    },
    update: (data) => {
        return restHttpClient.put('/api/v1/todo', data)
    }
}

export default todoApi