---
layout: page
title: Home
landing-title: Hi, my name is Willow Cheng
---

<section id="banner" class="major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p style="text-transform: uppercase;">{{ site.description }}</p>
			<ul class="actions">
				<li><a href="about" class="button next scrolly">About me</a></li>
			</ul>
		</div>
	</div>
</section>

<div id="main">

{% include tiles.html %}

<section id="two">
	<div class="inner">
		<header class="major">
			<h2>Blog</h2>
		</header>
		<p>I came from a person who don't like writing diary, and actually don't like reading at all.
		At some point, I found my initial motivation of writing to share what I know, and I value for, as the giveback to what I learned from others.
		Every post makes me feel rewarding, so I think it's a long term win to keep my life enthusiastic.
		By the way, my interest always shift around, currently interested in music, code, design, mobile photography, etc.</p>
		<ul class="actions">
			<li><a href="blog" class="button next">Read</a></li>
		</ul>
	</div>
</section>

</div>

