<template>
    <div>
        <div style="width:100%">
        <div class="main_l">
            左
        </div>
        <div class="main_r">右
             <router-view></router-view><!--父路由对应的组件的子路由组件在这里渲染 -->
        </div>
        </div>
        <HEADER></HEADER>
    </div>
</template>

<script>
import header from './header/header_top'
import lefts from './header/left'
export default {
    components:{
        HEADER:header
    }
}
</script>

<style>
.main_l{
    width: 20%;background-color: rgb(184, 184, 236)
}
.main_r{
    width: 80%;background-color: rgb(228, 123, 123)
}
</style>
