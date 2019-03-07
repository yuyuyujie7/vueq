<template>
    <div>
        <base-input v-model="username"
        class="username-input"
        placeholder="ni de name"
        lable='确认密码：'
        values='请输入用户名'
        >
        </base-input>
    </div>
</template>
<script>
export default {
    name:'prop',
    components:{
        baseinput:{
            inheritAttrs:false,
            props:['label','values'],
            template:'<label>{{label}'+'input v-bind:"values":placeholder=values'+
            '</label>'   
            
        }
    }
}
</script>

