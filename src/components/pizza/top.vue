<template>
<div>
    <div class="nav">
        <ul>
            <li><a href="#"><img src="" alt="">LOGO</a></li>
            <li><a href="#">品牌介绍</a></li>
            <li><a href="#">美味菜单</a></li>
          
            <li><a href="#">热门活动</a></li>
            <li><a href="#">餐厅查询</a></li>
            <li><a href="#">礼品卡</a></li>
            <li><a href="#">会员中心</a></li>
            <li><a href="#">特许经营</a></li>
        </ul>
        </div>
          <div class="showNav">
                <a href="">早餐活动</a>
                 <a href="">新品推荐</a>
                  <a href="">必胜客下午茶</a>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav{width: 100%;}
    .nav ul{
        margin: 0px auto;
        width: 1000px;
    }
    .nav ul li{
        float: left;
        border-right: 1px solid darkgray;
        list-style: none;
    }
    .nav ul li:first-child{
       width:278px;
    }
    .nav ul li:first-child~li:hover{
        background-color: brown
    }
     .nav ul li:first-child~li:hover .showNav{
         display: block}
    .nav ul li:first-child~li:hover>a{
        color: white;font-size: 16px
    }
    .nav ul li>a{
        color:#6d6458;
        font-size: 14px;
        text-align: center
    }
    .nav ul li:first-child~li>a{
        width: 100px;
        height: 45px;
        display: inline-block;
        line-height: 45px;
    }
    .showNav{position: relative;width: 100%;left: 0px;top: 30px;
    background-color: red;height: 40px;
    }
    .showNav a{
        color: white;font-size: 12px;display: inline-block;
        width: 100px;text-align: center;line-height: 40px;
        border-right: 1px solid #ffff;margin-left: -340px
    }
</style>
