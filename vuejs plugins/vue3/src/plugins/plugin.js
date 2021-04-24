export  default {
    install:(app,options)=>{
        const MyCustomPlugin={
            pname:'Plugin Name V1.0',
            onCreate(){
                console.log('On Create')
            },
            onLoad(msg){
                console.log('onLoad' + ' ' + msg)
            },
            getVersionName(){
                return this.pname
            },
            getString(key){
                return options[options.lang][key]
            }
        }
        app.config.globalProperties.$random=()=>{
            return Math.random()*100
        }
        app.config.globalProperties.$customLogger=MyCustomPlugin
        app.provide('cLog',MyCustomPlugin)
        app.mixin({
            created() {
                console.log('component created')
            },
            mounted() {
                console.log('component mounted')
            },
            updated() {
                console.log('update')
            },
        })
    }
}
