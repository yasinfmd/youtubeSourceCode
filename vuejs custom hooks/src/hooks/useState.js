import { ref } from 'vue'


function useState(initialState) {
    const state = ref(initialState)
    const setState = (newValue) => {
        state.value = newValue
    }
    return [state, setState]
}
export default useState