<template>
    <div>
        <div>{{$route.params.id}}</div>
         <ul>
             <!--to="{name:'shopp',params:{sid:v.id}} sid一定要和路由里面定义的参数名称一致-->
            <li v-for="v in shoppingList" :key="v.key">
                <router-link :to="{name:'shopp',params:{sid:v.id,name:v.name,msg:v},query:{sid:v.id,name:v.name}}">{{v.name}}
                    </router-link>
                    </li>
        </ul>

    </div>
</template>

<script>
export default {
data(){
    return{
        shoppinglist:[
            {id:1,name:'牛奶',addres:'重庆',price:'10'},
            {id:2,name:'米线',addres:'北京',price:'15'},
            {id:3,name:'包子',addres:'上海',price:'20'},
            {id:4,name:'雪糕',addres:'广州',price:'12'},
            {id:5,name:'烧麦',addres:'杭州',price:'10'},
        ]
    }
}
}
</script>

<style>

</style>
