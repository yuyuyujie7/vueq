<template>
    <div>
        <!-- 路由的query参数 路由暴露了参数 一般属于查询，传较少的参数
        获取路由查询参数用$route.query
        页面获取ID  $route.query.id
        页面获取name  $route.query.name -->

        <!-- router 导航路由器 当A标签使用 -->

        <!-- 路由的params参数 不会暴露参数 
        获取路由查询参数用$route.params
        页面获取ID  $route.params.id
        页面获取name  $route.params.name 
        如果想给路由绑定参数在url地址上显示
        在路由的path设置path：'/shopping/:id'
        :id声明绑定显示params里的参数
        如果params里没有id就不显示

        -->
        {{$route.params.id}}
        商品名称：{{$route.params.name}},
        地产:{{$route.params.address}},
        价格：{{$route.params.price}},
        <!-- <router-link :to="name:'shoppinglist',query:{id:10,name='张三'}"></router-link> -->

    </div>
</template>

<script>
export default {
data(){
    return{
        shopping:''
    }
},
created(){
    this.data=[
        {id:1,name:'牛奶',address:'北京',price:10},
         {id:2,name:'牛奶',address:'北京',price:40},
          {id:3,name:'牛奶',address:'北京',price:130},
           {id:4,name:'牛奶',address:'北京',price:50},
    ]
},
watch:{
    "$route":function(to,from){
        console.log(to);
    }
}
}
</script>

<style>

</style>
