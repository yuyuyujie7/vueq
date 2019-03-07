<template>
<div>
        <input class="input" v-model="current">
        <div>
            <ul>
                <li>
        <button class="button" @click="press">1</button>
        <button class="button" @click="press">2</button>
        <button class="button" @click="press">3</button>
        <button class="button" @click="press">+</button>
        </li>
        <li>
        <button class="button" @click="press">4</button>
        <button class="button" @click="press">5</button>
        <button class="button" @click="press">6</button>
        <button class="button" @click="press">-</button>
        </li>
        <li>
        <button class="button" @click="press">7</button>
        <button class="button" @click="press">8</button>
        <button class="button" @click="press">9</button>
        <button class="button" @click="press">*</button>
        </li>
        <li>
        <button class="button" @click="press">0</button>
        <button class="button" @click="press">NUM</button>
        <button class="button" @click="press">/</button>
        <button class="button" @click="press">=</button>
        </li>
        </ul>
        </div>
      
    </div>
</template>

<script>
export default {
    name:'jsq',
    data(){
        return{
          current:'',
          changMode:true
        }
    },
methods:{
    press:function(event){
    let me=this
    let key=event.target.textContent
    if(
        key !='='&&
        key !='-'&&
        key !='+'&&
        key !='*'&&
        key !='/'&&
        key !='NUM'
    ){
        me.current+=key
    }else if(key ==='='){
        if((me.current).indexOf("^")>-1){
            let base=(me.current).slice(0,(me.current).indexOf('^'))
            let exponent=(me.current).slice((me.current).indexOf('^')+1)
            me.current=eval('Math.pow('+base+','+exponent+')')
        }else{
            me.current=eval(me.current)
        }
    }else if(key==='NUM'){
        me.current=' '
    }else if(key==='*'){
        me.current+='*'
    }else if(key==='/'){
        me.current+='/'
    }else if(key==='+'){
        me.current+='+'
    }else if(key==='-'){
        me.current+='-'
    }
    },
    changModeEvent:function(){
        let me=this
        me.changMode=!me.changMode
    }
}
}
</script>
<style>
li{
    list-style: none;
}
button{
    width: 40px;
}
</style>


