import { ref } from "vue";

const sharedState=ref(0)

export default function useCounter(init=0){
    const counter=ref(init)

    function inc() {
        sharedState.value++
    }

    function dec() {
        sharedState.value--
        
    }

    return {counter,inc,dec,sharedState}
}