<template>
    <div class="shang">
        <div class="zl">
            <ul class="zl_zhong">
                <li class="shuxian">
                    <a class="track">
                        <div class="box">
                            <img class="box_logo" src="@/assets/taiyang.png">
                            <div class="info">
                                <h3>休闲早餐</h3>
                                <p>供应时间：7:30-10:30</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="shuxian">
                    <a class="track">
                        <div class="box">
                            <img class="box_logo" src="@/assets/chabei.png">
                            <div class="info">
                                <h3>必胜客下午茶</h3>
                                <p>供应时间：14:00-17:00</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="shuxian">
                    <a class="track">
                        <div class="box">
                            <img class="box_logo" src="@/assets/xiang.png">
                            <div class="info">
                                <h3>会员福利</h3>
                                <p>多款尝新特惠抢购</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .shang{margin-top: -4px}
    .zl{width: 100%;height: 109px;background: #302722;}
    .zl_zhong{width: 1000px;margin: 0 auto;}
    li{list-style-type: none}
    .shuxian{background: url(../../assets/meal_bg.gif) no-repeat top right;;float: left;height: 109px;}
    .track:hover{background: linear-gradient(to top,#302722,#6A6058)}
    .track{display: inline-block;width: 99.4%;height: 109px;margin-right: 2px}
    .box{overflow: hidden;padding-top: 33px;padding-right: 70px}
    .box_logo{padding: 0 8px;float: left;}
    .info{float: left;}
    .info h3{color: white;font: 15px/22px 'Microsoft Yahei',STHeiti,"sans-serif";}
    .info p{color: #aca9a7;font: 11px/20px 'Microsoft Yahei',STHeiti,"sans-serif";}
    







</style>
