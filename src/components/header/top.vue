<template>
    <div>
        <div v-if="hi" class="logo" v-bind:title="message">
            <a href="#">
                <img src="@/assets/img/1.jpg"/>
            </a>
        </div>
        <button v-on:click="bmessage">逆转消息</button>
        <div>{{parseInt(input1)+parseInt(input2)}}</div>
        <input type="text" value="123" v-model="input1">
         <input type="text" value="123" v-model="input2">
        <TOPNAV></TOPNAV>
       
    </div>
</template>

<script>
import TOPNAV from './top_nav.vue';
export default {
  name: 'top',
  components:{TOPNAV},
  data () {
    return {
        input1:0,
        input2:0,
        homeStr:'首页',
        hxss:'航线搜索',
        message:'页面加载于' + new Date().toLocaleString(),
        hi:true,
        grocerylist:[]
     }
  },
  beforeCreate(){
    console.log('组件创建之前')
    
  },
  created:function(){//当前组件被创建后执行 created
   this.grocerylist-[
            {id:0,text:'蔬菜'},
              {id:1,text:'蔬菜'},
                {id:2,text:'蔬菜'},
                  {id:3,text:'蔬菜'}
    ]
  this.input='赋值给input'
    console.log('组件被创建执行')
    console.log(this.grocerylist)
  },
  methods:{
      bmessage:function(){
          this.message="点击了它"
      },
    //   computed:{
    //       resv:function(){
    //           return this.message.split(''.reverse().join(''))
    //       }
    //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    color: red;
}
</style>
