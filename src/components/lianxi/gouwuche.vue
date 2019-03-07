<template>
    <div>
        <ul>
            <li v-for="v in shopData" :key="v.key">
                 <input type="checkbox"  :value="v" v-model="slectShop">
                商品名称:{{v.name}}产地:{{v.addres}}价格：{{v.price}}元
            </li>
        </ul>
        <div>
            已加入购物车商品：<br/>
                <span v-for="(v,index) in slectShop" :key="v.key">
                    {{v.name}}￥{{v.price}}<span class="s_m m_l" @click="count(index)">+</span>
                    <input :value="v.size" style="width:20px" /><span class="s_m" @click="dw(index)">-</span><br/>
                </span>
                <div>商品总数：{{slectShop.length}}商品总价:{{shopSum}}</div>

        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            shopData:[//商品数据
                {name:'牛板筋',price:10,addres:'重庆',size:0},
                {name:'酸辣粉',price:12,addres:'重庆',size:0},
                {name:'北京烤鸭',price:30,addres:'北京',size:0},
                {name:'牛肉面',price:120,addres:'香港',size:0},
                {name:'麻花',price:10,addres:'天津',size:0},
            ],
            slectShop:[],//存储选中的商品
           
        }

    },
    computed:{
        shopSum:function(){ //商品总价自动计算，把已选择商品数组遍历，价格乘以数量，累加
          //var let const const声明的常量，也与let一样不可重复声明。
         let sum=0 //局部变量 在定义的语句块里面有效
         // sum+=10
          //遍历数据  数组名.forEach(定义接收遍历出来的每一项的值e=>{语句块})
          this.slectShop.forEach(e => {
              if(e.size>0){
                  sum+=e.price*parseInt(e.size)
              }
              
          });
          return sum
        }
    },
    watch:{
        //监听选择商品数组，新加入了商品，把商品的数量size变为1
       slectShop:function(newData,oldData){
          this.slectShop[newData.length-1].size=1
       }
    },
    methods:{
        count:function(index){
            this.slectShop[index].size++
        },
        dw:function(index){
            if(this.slectShop[index].size>0){
                this.slectShop[index].size--
            }
            
            
        }
    },
    components:{
        INP:{
            props:["size"],
            template:"<input :value=\"size\" style=\"width:20px\">"
        }
    }

}
</script>
<style scoped>
.m_l{margin-left: 20px;}
.s_m{display: inline-block;width: 20px;height: 20px; background-color: blue;cursor: pointer}
</style>
