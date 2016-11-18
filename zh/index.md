---
layout: home
title: 主页
landing-title: 嗨, 我叫程柳
lang: zh
---

<!-- Banner -->
<section id="banner" class="major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p>{{ site.zh.description }}</p>
			<ul class="actions">
				<li><a href="about" class="button next scrolly">关于我</a></li>
			</ul>
		</div>
	</div>
</section>

<!-- Main -->
<div id="main">

<!-- One -->
{% include tiles.html %}

<!-- Two -->
<section id="two">
	<div class="inner">
		<header class="major">
			<h2>博客</h2>
		</header>
		<p>从我小学到现在就一直没有养成写日记的好习惯，而我在追求完美的路上也往往比较懒。在我接触了开源社区之后，常常会对一些界面的库非常兴奋，即使问了最简单的问问题我也能在 Github 上看到贡献，哈哈。曾经有人问分享不是把自己的竞争优势给磨灭吗？要明白的是技术永远都可以学，而分享带来的声誉是无法学到的。个人现在的主要爱好是音乐，代码与用户界面。</p>
		<ul class="actions">
			<li><a href="blog" class="button next">阅读</a></li>
		</ul>
	</div>
</section>

</div>