<template>
    <div>
       姓名：<input type="text" v-model="name"/>
       分数：<input type="text" v-model="score"/>
         <div>{{msg}}</div>
         <div>

         </div>
         <SHOPPING></SHOPPING>
    </div>
</template>
<script>
import shopping from './shopping'
export default {
    data(){
        return{

         name:'',
         score:0,
         msg:'',

        }
        
    },
    components:{
        SHOPPING:shopping

    }
    // methods:{
    //     bthclick:function(){
    //         this.result=Math.round(Math.random()*100);
    //     }
    // },
    
     }
    

</script>
