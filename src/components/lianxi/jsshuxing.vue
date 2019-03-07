<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h2>{{ first}}</h2>
    <h2>{{ last}}</h2>
    <h2>{{ fullName}}</h2>
    <button @click="butn">点击</button>
    <input v-model="input" >
    <h2>{{msg}}</h2>
    <div>
      <div class="box1 lf">
            <ul>
              <li @click="btnImg('qq.jpg')"><img src="@/assets/img/qq.jpg"></li>
              <li @click="btnImg('2.jpg')"><img src="@/assets/img/2.jpg"></li>
              <li @click="btnImg('3.jpg')"><img src="@/assets/img/3.jpg"></li>
              <li @click="btnImg('4.jpg')"><img src="@/assets/img/4.jpg"></li>
            </ul>
      </div>
      <div class="box2 rf">
        <img :src="imgurl">
      </div>
    </div>
    <h1 :class="{hide}" :style="{color:activea,fontSize:fzs}">LOVE</h1>
    <h2 :style="spone">LOVEyou</h2>
    <TOPNAV>jjjjjjjj</TOPNAV>
    <ZDM></ZDM>
  </div>

</template>

<style>
.hide{
  color: red;
}
</style>

<script>
//import tiop from './header/top_nav'
import { readlink } from 'fs';
export default {
  name: 'jsshuxing', //定义组件名称

  data () {
    return {
        msg: '这是我构建的一个vue组件',
        i:200,
        first:'foo',
        last:'be',
        input:'',
        imgurl:'@/assets/img/1.jpg',
        url:'',
        hide:true,
        activea:'yellow',
        fzs:'40px',
        spone:{color:red}
        //full:'q11'
    }
  },
//   components:{
//     TOPNAV:tiop,//引入组件名称，注册多个组件用逗号隔开
//     ZDM:{
//     template:'<p class="foo bar">hi</p>'
//     }
//  },
  watch:{//监听属性值发生变化执行相应的函数
      input:function(oldData,newData){
          this.msg=this.input+'选择了那些商品'
      },
      url:function(newData,oldData){
       // console.log(newData)
        this.imgurl='@/assets/img/'+newData
      }


  },
  computed:{//自动计算
    // full:function(){
    //   return this.first+' '+this.last
    // },


     fullName: {
    // getter 获取值执行get
    get: function () {
      return this.first + ' ' + this.last
    },
    // setter 给fullname 属性设置值就会执行set方法 把值传给newValue
    set: function (newValue) {
      var names = newValue.split(' ')  
      this.first = names[0]
      this.last = names[names.length - 1]
    }
  },


  },
   methods:{//写自定义函数
    butn:function(){
      
      this.fullName='张 三丰'
      
    },
    btnImg:function(val){
      console.log(val)
      this.url=val
    }
  },
  created(){

      
  },
  // watch: {
  //   firstName: function (val) {
  //     this.full = val + ' ' + this.last
  //   },
  //   lastName: function (val) {
  //     this.full = this.first + ' ' + val
  //   }
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lf{ float: left;}
.rf{float:right;}
.box1{width: 200px;height: 400px}
.box2{width: 400px;height: 400px}
    .hello{ color: #000;}
</style>
