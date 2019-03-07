<template>
    <div class="main">
        <div class="header">
            <div class="top">
                <img class="top_l" src="@/assets/img/map-logo.png" alt="">
                <span class="top_r">
                    <router-link :to="reg"><span>注册</span></router-link>
                    <span></span>
                    <router-link :to="login"><span>登录</span></router-link>
                     <router-link :to="reg"><span>网银开店</span></router-link>
                </span>
            </div>
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>

<script>
export default {
    name:'main',
    data(){
        return{
            mas
        }
    }
}
</script>

<style scoped>
    .mian{width: 100%;}
    .mian .header{height: 500px;background-color: #008dec;padding-top:25px ;}
    .mian .top img{width: 220px;}
    .mian .top .top_l{float: left;}
    .mian .top .top_r{float: right;}
    .mian .top{margin-left: 100px;margin-right: 100px;}
</style>
