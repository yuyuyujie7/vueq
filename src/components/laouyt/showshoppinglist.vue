<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            goodsmsg:[]
        }
    },
    created(){
        let route=this.$route
        axios({
            url:'http://www.shop.com/index/api/getGoodsById',
            method:"get",
            data:{id:this.route.query.id}
        }).then(function(res){
            console.log(res.data)
        })
    }
}
</script>

<style>

</style>
