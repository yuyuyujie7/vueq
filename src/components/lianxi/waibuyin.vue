<template>
    <div>
        <ul>
                <li v-for="vl in lis" :key="vl.key">{{vl}}</li>
            </ul>
    </div>
</template>

<script>
export default {
    props:['lis'],
    methods:{
        up:function(){
            this.lis.push('田七')
        }
    }
}
</script>

<style>


</style>
