import {ref,onMounted,onUnmounted} from "vue";

export default function useUserActive(){
    const time=ref(null)
    const isExpire=ref(false)
    const eventsArr=['mousemove','keydown','scroll','click']
    const startTimer=()=>{
        time.value=setTimeout(()=>{
            console.log('5 saniye işlem yapılmadı güle güle :)')
            isExpire.value=true
        },1000*5)
    }
    const handleEvent=()=>{
        console.log('Event gerçekleşiyor')
        if(time.value){
            clearTimeout(time.value)
        }
        localStorage.setItem('lastActiveTime',Date.now())
        startTimer()

    }
    onMounted(()=>{
        eventsArr.forEach((event)=>{
            window.addEventListener(event,handleEvent)
        })
    })
    onUnmounted(()=>{
        eventsArr.forEach((event)=>{
            window.removeEventListener(event,handleEvent)
        })
    })
    return {isExpire}
}
