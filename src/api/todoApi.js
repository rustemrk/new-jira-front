import restHttpClient from "@/api/restHttpClient";

const todoApi = {
    get: (id) => {
        return restHttpClient.get('/todo/get/' + id);
    },
    save: (data) => {
        return restHttpClient.put('/todo/save', data)
    }
}

export default todoApi