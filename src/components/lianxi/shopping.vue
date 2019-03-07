<template>
    <div>
        <ul>
            <li v-for="v in shopData" :key="v">
                <input type="checkbox" :value="v" v-model="slectshop">
                商品名称：{{v.name}}产地：{{v.addres}}价格：{{v.price}}
                <input v-model="e.size"/>
            </li>
        </ul>
        <div>
            已加入购物车商品：{{slectshop}}
            <span v-for="v in slectshop" :key="v">
                {{v.name}}
            </span>
            <div>商品总价：{{shopSum}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shopData:[
                {name:'北京烤鸭',price:10,addres:'重庆'},
                {name:'羊肉',price:110,addres:'重庆'},
                {name:'麻辣小吃',price:20,addres:'湖南'},
                {name:'麻花',price:10,addres:'天津'},
                {name:'小馒头',price:5,addres:'黑龙江'}
            ],
            slectshop:[],//存储选中的商品

        }
    },
    computed:{
        shopSum:function(){
            var sum=0;
           this.slectshop.array.forEach(element => {
               if(e.size>0){
            sum+=price*parseInt(e.size)
               }else{
                   sum+=e.price
               }
               
            });
            return sum;
        }
    }
}
</script>

