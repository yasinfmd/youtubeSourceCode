import { ref } from 'vue'

const useToggle = (initialValue) => {
    const visible = ref(initialValue)

    const toggleVisible = () => {
        visible.value = !visible.value
    }
    return { visible, toggleVisible }
}
export default useToggle;