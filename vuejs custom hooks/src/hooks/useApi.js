import { ref } from 'vue'


const useApi = (url, options) => {
    const response = ref([]);
    const onSendRequest = async () => {
        const res = await fetch(url, options)
        const data = await res.json();
        response.value = data;

    }
    return { response, onSendRequest }
}
export default useApi