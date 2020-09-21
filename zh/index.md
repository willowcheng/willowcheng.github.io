---
layout: page
lang: zh
title: 程柳
description: 视觉、听觉和代码的观察下，我经常在想象的催动下做喜欢的东西，这里寄宿着用心写的博客和过往的作品。
landing-title: 我叫程柳，喜欢看见的、听见的和所想的
landing-subtitle: 这里寄宿着我用心写的博客和过往的作品
---

<section id="banner" class="index major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p>{{ page.landing-subtitle }} :heart:</p>
			<a href="about" class="button next scrolly">关于我</a>
		</div>
	</div>
</section>

<div class="main">

    <div class="inner">
        <div class="major">
            <h2 class="relative-position">最近案例与作品</h2>
        </div>
    </div>
    {% assign projects = site.projects | where: 'lang', 'zh' | where: 'recent', true %}
    {% include projects.html projects=projects limit=nil %}

    <section>
        <div class="inner">
            <header class="major">
                <h2>自由开发设计师</h2>
            </header>
            <p>在Shopify担任UX开发的全职工作外，我在空闲时间以自由职业者的身份为个人与公司提供设计与代码相关服务，欢迎联系 :wink:，目前包括：</p>
            <ul>
                <li>Shopify商店咨询与主题修改 :computer:</li>
                <li>网站SEO优化 🔧</li>
                <li>网页与手机App设计 :art:</li>
            </ul>
            <a href="portfolio" class="button next">查看更多案例与作品</a>
        </div>
    </section>
    
    <section class="spotlights">
        <div class="inner">
            <header class="major">
                <h2>小卖部</h2>
            </header>
            <div id='product'></div>
            <script src="{{ site.baseurl }}/assets/js/shop-zh.js"></script>
        </div>
    </section>

    <section class="spotlights">
        <div class="inner">
        <div class="major">
            <h2>最新文章</h2>
        </div>
        </div>
        {% assign posts = site.posts | where: 'lang', 'zh' %}
        {% include posts.html posts=posts limit=2 %}
    </section>

    <section>
        <div class="inner">
            <header class="major">
                <h2>博客</h2>
            </header>
            <p>从小就一直没有养成写日记的习惯，而有时候在追求完美的路上也会很懒。我发现分享东西能够让我有更多的追求和热情，于是开始写些东西让自己发散想法。喜欢的东西有设计 :art:，代码 :computer:，音乐 :headphones: 与手机摄影 :camera:。</p>
            <a href="blog" class="button next">阅读更多</a>
        </div>
    </section>

</div>