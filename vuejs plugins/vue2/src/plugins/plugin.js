import Vue from 'vue'
let instance;
export const useCustomLog=({...options})=>{
    if(instance) return instance;
    instance=new Vue({
        data(){
            return{
                logMsg:'',
                isLogging:false
            }
        },
        methods:{
            getString(key){
                console.log('opt',options)
                console.log('key',key)
              return options[options.lang][key]
            },
            onLog(msg){
                this.logMsg=msg;
                this.isLogging=true
                console.warn('Plugins log'+ ' ' +msg)
                setTimeout(()=>{
                    this.isLogging=false
                },1000)
            }
        },
        created() {
            console.log('created',options)
        }
    })
    return  instance
}
export const LogPlugin={
    install(Vue,options){
        Vue.prototype.$log=useCustomLog(options)
    }
}
