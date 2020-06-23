<template>
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="dummy">
</template>

<script>
export default {
    props : ['code'],

    data(){
        return{
            coupon : 'hey',
            invalid : ['FREE','1111']
        }
    },   
    methods : {
        updateCode(code){
            //Validation
            if(this.invalid.includes(code)){
                alert('this is not valid!')

                this.$refs.dummy.value = ''
                code = ''
            }
            this.$emit('input',code)
        }
    }
}
</script>