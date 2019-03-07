<template>
    <div>
        <div>{{$route.params.id}}</div>
        <ul><!--to="{name:'shopp',params:{sid:v.id}} sid一定要和路由里面定义的参数名称一致-->
            <li v-for="v in shoppingList" :key="v.key"><router-link :to="{name:'shopp',params:{sid:v.id,name:v.name,msg:v},query:{sid:v.id,name:v.name}}">{{v.name}}</router-link></li>
        </ul>
        
        <button @click="getData">获取数据</button>
        <div class="goods">
            <router-link  v-for="v in goods" :key="v.key" :to="{name:'showlist',query:{id:v.goods_id}}">
             <dl>{{v.name}}<img :src="serverUrl+v.image">
                <dt><img :src="serverUrl+v.image"/></dt>
                <dd>{{v.name}}</dd>
                <dd>￥{{v.price}}</dd>
            </dl>
            </router-link>
        </div>
        <ul><li v-for="v in goods" :key="v.key">{{v.name}}<img :src="serverUrl+v.image"></li></ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            shoppingList:[
            {id:1,name:'牛奶',addres:'重庆',price:'10'},
            {id:2,name:'米线',addres:'北京',price:'15'},
            {id:3,name:'包子',addres:'上海',price:'20'},
            {id:4,name:'雪糕',addres:'广州',price:'12'},
            {id:5,name:'烧麦',addres:'杭州',price:'10'},
            ],
            goods:[],
            serverUrl:'http://www.shop.com/public/uploads/cache/'
        }
    },
    computed:{
        imgurl:{
            get:function(){
                return this.serverUrl
            },
            set:function(url){
                this.serverUrl+=url
            }
        }
    },
    methods:{
       
        getData:function(){
            let object=this
            // //"http://p.3.cn/prices/mgets?skuIds=J_954086&type=1"
            //http://www.kuaidi100.com/query?type=yuantong&postid=11111111111
             let url="http://www.shop.com/index/api/getmsg"
            // this.$axios({
            //     method:'get',
            //     url:url,
            //     data:{skuIds:'J_954086',
            //     type:1
            //     }
            // })

            // post方法
            // axios({
            //     url:url,
            //     method:post,
            //     data:{
            //         type:'yuantong',postid:1233232
            //     }
            // }).then(function(res){
            //         console.log(res.data)
            //     })

            axios.get(url,{
                params:{type:'yuantong',postid:1233232},
            }).then(function(res){
                res.data.forEach((element,index)=> {
                    let img=element.image.split(".")
                    res.data[index].image=img[0]+"-230x230"+"."+img[1]
                    console.log(index)
                });
                object.goods=res.data
                console.log(res.data)
                //成功回调 res响应的数据
            }).catch(function(error){
                //失败
                console.log(error)
            })
            //axios用法 使用前引入axios组件 import axios from "axios"
            //axios.get(提交地址,参数).then(成功的回调函数).catch(失败的回调函数)
            //参数：{params:{提交的url后面的参数}}
            //提交的url后面的参数:{参数1：值2,参数2:值2}
            //成功的回调函数：function(res){ res就是响应的结果 在回调里面可以写自己的业务 }
            //失败的回调函数:function(error){error是错误信息，错误后你想做什么也可以写在这里}
        }
    }
}
</script>
<style lang="css" scoped>
   .goods dl{ width: 230px;
    float: left;
    border: 1px solid #ccc;
    margin: 10px 13px 0 0;
    position: relative;
}
</style>