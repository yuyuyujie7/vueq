<template>
    <div>
        <blog-post :lisdata="lis"></blog-post>
        <div>
            父组件
            <ul>
                <li v-for="vl in lis" :key="vl.key">{{vl}}</li>
            </ul>
        </div>
        <div>
            子组件外部引入
            <WAIBU :lis='lis'></WAIBU>
        </div>
    </div>
</template>

<script>
import waibu from './waibuyin'
import waibuyinVue from './waibuyin.vue';
export default {
data(){
    return{
        lis:['张三','李四']
    }
},
components:{
    blogPost:{
        methods:{
            methods:{
                up:function(){
                    this.lisdata.push('王伟')
                }    
        },
        props:['lisdata'],//props声明
        template:'<ul><li v-for=\"v in lisdata\" :key=\"v.key\" @click=\"up\"></li></ul>'
    },
    WAIBU:waibuyin
    }
}
}
</script>

<style>

</style>
