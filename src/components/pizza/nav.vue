<template>
    <div>
        <div class="nav">
            <ul class="nav_ul">
                <li class="nav_li">
                    <a class="logo"><img src="@/assets/logo.png"></a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">品牌介绍</a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">美味菜单</a>
                    <div style="display:none" class="yincang">111</div>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">热门活动</a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">餐厅查询</a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">礼品卡</a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">会员中心</a>
                </li>
                <li class="nav_li">
                    <a class="nav_zi">特许经营</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    created:{
        
    }
}
</script>

<style scoped>
    li{list-style-type: none}
    .nav{width: 100%;}
    .nav_ul{width: 1000px;margin: 0 auto;}
    .nav_li{float: left;text-align: center;border-right: 1px solid #ede7d8;height: 45px;}
    .logo{width: 278px;display: inline-block;}
    .nav_zi{width: 100px;display: inline-block;height: 45px;font: 13px/45px 'Microsoft Yahei',STHeiti,"sans-serif";color: #6d6458;cursor: pointer;}
    .nav_li:hover{background-color: #c40e1a;}
    .nav_li:hover .nav_zi{color: white}
    .yincang{width: 100%;position: absolute;top: 45px;left: 0;z-index: 9;background: url(../../assets/tm_80.png);}














</style>
