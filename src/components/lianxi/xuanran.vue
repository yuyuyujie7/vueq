<template>
    <div>
        
        <h1 v-if="ok">显示</h1><!--ok是属性变量，为真就显示，为假就执行 v-else 页面显示隐藏-->
        <h1 v-else>隐藏</h1>
        <button @click="butn">{{ok?'隐藏':'显示'}}</button>

        <template v-if="ok">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <!-- template 只能嵌套使用也要放到div里面，不能平级使用-->
        <tp></tp><!--自己创建的子组件-->

        <div v-if="type === 'A'">
            A
            </div>
            <div v-else-if="type === 'B'">
            B
            </div>
            <div v-else-if="type === 'C'">
            C
            </div>
            <div v-else>
            Not A/B/C
        </div>

        <div v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="请输入用户名" key="username-input">
        </div>
        <div v-else>
        <label>Email</label>
        <input placeholder="请输入邮件地址" key="email-input">
        </div>
        <button @click="swt">切换</button>

        <h1 v-show="ok">Hello!</h1> <!-- v-show只是把dom元素设置隐藏，是渲染出来的，而if是不会渲染出dom元素-->

        <ur>
            <li  v-for="lv in liData" :key="lv.id" @click="del(lv.id)">

                {{lv.name}}
            </li>
        </ur>


        <button @click="add">添加</button>
        <!-- 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。不推荐同时使用 v-if 和 v-for -->
    
    <input v-model="input1"/><input v-model="input2"/><span>{{inp}}</span>
    <div>站名：<input v-model="address"/></div>
    <div>
        <input v-model="dog.sid"/>
        <input v-model="dog.name"/>
        <input v-model="dog.sex"/>
        <input v-model="dog.classname"/>
         <input v-model="dog.war"/>
    </div>
    <div>{{msg}}</div>
  
    <div>
        <ul>
            <li v-for="v in evenNumbers" :key="v">{{v}}</li>
        </ul>
    </div>
<span>{{sexf}}</span>

    <button v-on:click="stop">stop</button>
    <input @keydown.left="move('left')" @keydown.right="move('right')" @keydown.up="move('up')" @keydown.down="move('down')"/> <!--keydown按下 keyup起来-->
    <div v-bind:style="styleObject" ><img src="@/assets/img/3.jpg"></div>
    <img src="@/assets/img/2.jpg" />

    <ZYJ :tps="cont"></ZYJ>
     </div>   
</template> 

<script>
import zyj from './zyj.vue'
export default {
    name:'xuanran',
    data(){
        return{
            address:'',
            msg:'',
            input1:0,
            input2:0,
            inp:0,
            ok:false,
            type:"B",
            loginType:'',
            liData:[{
                id:1,
                name:'张三'},
                {
                id:2,
                name:'李四'},
                {
                id:3,
                name:'王五'},
                {
                id:4,
                name:'王五1'},
                {
                id:5,
                name:'王五2'}
                ],
            dog:{
                sid:'',
                name:'',
                sex:'',
                classname:'',
                war:''
            },
            numbers: [ 1, 2, 3, 4, 5,6,7,8,9 ],
            sex1:0,
            mv:0,
            l:0,
            r:0,
            u:0,
            d:0,
            mbox:{
                // position:'absolute',
                // left:l,
                // right:r,
                // top:u,
                // buttom:d
            },
            styleObject: {
                position: 'relative',
                left:'0px',
                top: '0px'
            },
            cont:'我是父组件的'
            

        }
    },
    computed:{
        evenNumbers: function () {
            //过滤器 filter()是一个方法，方法里面是一个匿名函数(形参)
           
            return this.numbers.filter(
                function (number) {
                 return number % 2 === 0
                }
            )
        },
        sexf:function(){
           
                return this.sex1==0?'男':'女'
           
        },
      
    },
    watch:{
        input1:function(){
           this.inp=parseInt(this.input1)+parseInt(this.input2)
        },
        input2:function(){
           this.inp=parseInt(this.input1)+parseInt(this.input2)
         },
         address:function(newData,oldData){
             this.msg="去"+newData+"可以做126路公交车和乘坐地铁3号线"
         },
         r:function(newData,oldData){
             this.styleObject.left=newData+'px'
             this.l=this.r
         },
         l:function(newData,oldData){
             this.styleObject.left=newData+'px'
             this.r=this.l
         },
         u:function(newData,oldData){
             this.styleObject.top=newData+'px'
         },
         d:function(newData,oldData){
             this.styleObject.top=newData+'px'
         }

    },
    methods:{
        butn:function(){
            if(this.ok){
                this.ok=false
            }else{
                this.ok=true
            }
            
        },
        swt:function(){
            if(this.loginType==''){
                this.loginType='username'
            }else{
                this.loginType=''
            }
            
        },
        add:function(){
            var size=this.liData.length
            var id=this.liData[size-1].id+1;
            this.liData.push({id:id,name:this.address})
        },
        del:function(id){
            if(id-1==0){
                this.liData.pop()
            }else{
                this.liData.splice(id-1)
            }
            
           // this.liData.splice(id,this.liData.length-id) 删除 第一个参数id是元素开始下标,第二个参数是要删除元素的个数
            //this.liData.splice(id-1,1,{id:id,name:'我替换的内容'}) //替换 第一个参数id是元素开始下标 第二个参数替换元素的个数，第三个是替换的内容
       },
       stop:function(){
            return this.sex1==0?'男':'女'
        },
        submit:function(){
            alert('点击了回车')
        },
        move:function(m){
            switch (m) { 
                case 'left':
                    this.l-=1
                    console.log(this.styleObject.left)
                    break;
                case 'right':
                    
                     this.r+=1;
                     console.log(this.styleObject.left)
                    break;
                case 'up':
                    this.u-=1;
                    console.log(this.styleObject.top)
                    break;
                case 'down':
                    this.u+=1;
                    console.log(this.styleObject.top)
                    break;
            }
        }

    },
    components:{
        tp:{template:'<p>qwqwqw</p>'}
    },
components:{
    ZYJ:zyj,
    BTN:{
        props:['zcont'],
        data(){
            return{
            }
        },
        components:{

            DNF:{
                template:'<div>注册得组件</div>'
            }
        },
        template:'<div><button v-on:click="cont++">you click me {{zcont}}times.</button>'
    }
}
}
</script>
<style scoped>
.cc{position: relative;left: 10px;}
</style>

