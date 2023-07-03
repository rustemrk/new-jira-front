import restHttpClient from "@/api/restHttpClient";

const boardApi = {
    search: (data) => {
        return restHttpClient.post('/api/v1/board/search', data)
    },
    saveOrder: (data) => {
        return restHttpClient.put('/api/v1/board/save-order', data)
    }
}

export default boardApi