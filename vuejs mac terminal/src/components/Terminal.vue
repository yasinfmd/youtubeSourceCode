<template>
    <div class="terminalWrapper">
    <div class="terminalWindow">
    <i class="close"></i>
    <i class="resize"></i>
    <i class="minimize"></i>
    <p>Başlık</p>
    </div>
    <div class="terminalBody">
        <div class="terminal">
        <p v-for="(item,index) in logData" :key='index' class="log" :class="(item.isNew && item.isNew ===true) ? 'animationLog':'' ">
        {{item.text}}
        </p>
        
            <div class="terminalEndLine"> <span >_</span> </div>
        </div>
    </div>
    </div>    
</template>

<script>
export default {
    props:['logData']
    
}
</script>

<style scoped>
.terminalWrapper{

    display: flex;
    background: #262626;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
}
.terminalWindow{
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 8px;
    border-bottom: 1px solid #262626;
}
.terminalWindow i {
    width: 1em;
    height: 1em;
    font-size: 10px;
    border-radius: 9999px;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.terminalWindow p {
    font-weight: 600;
    font-size: 12px;
    color: #d9d9d9;
}
.close{
    background: #f5222d;
}
.resize{
    background: #ffc53d;
    
}
.minimize{
    background: #52c41a;
    
}

.terminalBody{
    display: flex;
    width: 100%;
    background: #141410;
    box-sizing: border-box;
    height: 400px;
}
.terminal{
    box-sizing: border-box;
    padding: 12px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.log{
    text-align: left;
    color: #8ab4f8;
    width: 100%;
    font-size: 11px;

}
.animationLog{
     animation: newLog 1000ms;
}
.terminalEndLine{
    background: currentColor;
    width: 4px;
    height: 16px;
    margin-top: 6px;
    animation: terminalAnimation 700ms infinite;
}
@keyframes newLog {
     0%{
         opacity: 0;
     }
        50%{
         opacity: 1;
     }
         100%{
         opacity: 0;
     }
}

@keyframes terminalAnimation {
     0%{
         opacity: 0;
     }
        50%{
         opacity: 1;
     }
         100%{
         opacity: 0;
     }
}

.terminalEndLine span{
    opacity: 0;
}
::-webkit-scrollbar{
    width:4px;
}
::-webkit-scrollbar-track{
    background: #141410;
    border-radius: 20px;
}
::-webkit-scrollbar-thumb{
    background: #262626;
}
</style>