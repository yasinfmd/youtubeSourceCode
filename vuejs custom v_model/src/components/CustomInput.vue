<template>
<div>
    <h2>Form</h2>
    <div>
    <input :value='firstName' @input="onChangeFirstName($event)" />
    </div>
    <div>
    
<input  :value='age' @input="onChangeAge($event)" />
</div>
</div>
    
</template>

<script>
export default {
    methods:{
           onChangeAge(e){
                let ageValue=e.target.value;
                if(this.ageModifiers){
                    ageValue=ageValue.split('').reverse().join('')
                }
                this.$emit('update:age',ageValue)
           },
            onChangeFirstName(e){
                let firstNameValue=e.target.value
                if(this.firstNameModifiers){
                     firstNameValue=firstNameValue.toUpperCase();   
                }
                this.$emit('update:firstName',firstNameValue)
            }
    },
    props:{
        firstName:String,
        age:String,
        firstNameModifiers:{
            default:()=>{}
        },
        ageModifiers:{
            
        }
    },
    
    emits:['update:firstName','update:age']
}
</script>