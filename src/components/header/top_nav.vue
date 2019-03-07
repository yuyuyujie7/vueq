
兰兰 2018/11/11 13:43:59
<template>
    <div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav nav-header-menu navbar-nav-style">
						<li class="dropdown">
				          <a href="#" style="background-color: #ffd100;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{homeStr}}<span class="caret"></span></a>
				          <ul class="dropdown-menu" style="background-color: #000000; opacity: .8;">
				            <li style="text-align: center; "><a href="xy.html">心“意”代 新起航</a></li>
				            <li><a href="jx.html">尽享饕餮好时光</a></li>
				            <li><a href="jz.html">极致娱乐好时光</a></li>
				            <li><a href="ms.html">免税嗨购好时光</a></li>
				            <li><a href="dj.html">独家体验好时光</a></li>
				            <li><a href="wz.html">玩转童趣好时光</a></li>
				          </ul>
				        </li>
				        <li class="dropdown">
				          <a href="#" style="background-color: #ffd100;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{hxss}}<span class="caret"></span></a>
				          <ul class="dropdown-menu" style="background-color: #000000; opacity: .8;">
				            <li><a href="hangxiansousuo.html">航线搜索</a></li>
				            <li><a href="faxianmudidi.html">发现目的地</a></li>
				            <li><a href="youlunbaike.html">邮轮百科</a></li>
				          </ul>
				        </li>
				        <li class="dropdown">
				          <a href="#" style="background-color: #ffd100;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">邮轮船队<span class="caret"></span></a>
				          <ul class="dropdown-menu" style="background-color: #000000; opacity: .8;">
				            <li><a href="cd.html">所有船只</a></li>
				            <li><a href="#">歌诗达邮轮赛琳娜号</a></li>
				            <li><a href="#">歌诗达邮轮大西洋号</a></li>
				            <li><a href="#">歌诗达邮轮幸运号</a></li>
				            <li><a href="#">歌诗达邮轮威尼斯号</a></li>
				          </ul>
				        </li>
				        <li class="dropdown">
				          <a href="#" style="background-color: #ffd100;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于歌诗达邮轮<span class="caret"></span></a>
				          <ul class="dropdown-menu" style="background-color: #000000; opacity: .8;">
				            <li><a href="company.html">公司介绍</a></li>
				            <li><a href="news.html">新闻中心</a></li>
				          </ul>
				        </li>
			      </ul>
			    </div>
    </div>
</template>
<script>
export default {
  name: 'top_nav',
  data () {
    return {
     homeStr:'意式体验',
     hxss:'航线搜索'
    }
  }
}
</script>
