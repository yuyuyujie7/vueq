<template>
    <div>
        zyj组件
        {{tps}}
        <div>{{cltps}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cltps:this.tps
        }
    },
    props:['tps'],
    watch:{
        tps:function(){
            return this.tps
        }
    }
}
</script>
