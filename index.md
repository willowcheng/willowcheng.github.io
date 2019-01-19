---
layout: page
lang: en
title: Willow Cheng
description: |-
  Observing by visual, sound and code, imaging on top of my head to craft creation.
  This is the space that hosts my blog and portfolio, which are made by love.
landing-title: I’m Willow Cheng, into visual, sound and brain
landing-subtitle: The space that hosts my blog and portfolio, which are made by
---

<section id="banner" class="index major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p>{{ page.landing-subtitle }} :heart:</p>
			<a href="about" class="button next scrolly">About me</a>
		</div>
	</div>
</section>

<div class="main">

    <div class="inner">
        <div class="major">
            <h2 class="relative-position">Recent Work</h2>
        </div>
    </div>
    {% assign projects = site.projects | where: 'lang', 'en' | where: 'recent', true %}
    {% include projects.html projects=projects limit=nil %}

    <section>
        <div class="inner">
            <header class="major">
                <h2>Freelance Designer/Developer</h2>
            </header>
            <p>My full-time job at Shopify is UX Developer. I work at spare time as freelancer serving person or coorperation
            of coding and designing, creativity appreciated :wink:. Services include：</p>
            <ul>
                <li>Shopify store consulting and theme development :computer:</li>
                <li>Website SEO optimization 🔧</li>
                <li>Mobile App design :art:</li>
            </ul>
            <a href="portfolio" class="button next">More of my work</a>
        </div>
    </section>

    <section class="spotlights">
        <div class="inner">
        <div class="major">
            <h2>Latest Posts</h2>
        </div>
        </div>
        {% assign posts = site.posts | where: 'lang', 'en' %}
        {% include posts.html posts=posts limit=2 %}
    </section>

    <section>
        <div class="inner">
            <div class="major">
                <h2>Blog</h2>
            </div>
            <p>Came from a person who don't like writing diary, and actually don't like reading at all.
            At some point, I found my initial motivation of writing is to share what I know, and I value for, as the giveback to what I learned from others.
            Every post makes me feel rewarding, and I think it's a long term win to keep my life enthusiastic.
            My interest sometimes shifts around, currently I'm interested in code :computer:, design :art:, music :headphones:, and mobile photography :camera:.</p>
            <a href="blog" class="button next">Read all</a>
        </div>
    </section>

</div>

