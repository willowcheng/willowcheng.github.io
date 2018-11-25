---
layout: page
lang: en
title: Home
landing-title: Hi, I’m Willow, into visual, sound and brain
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

    <div class="inner">
        <div class="major">
            <h2>Recent Work</h2>
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
            <ul class="actions">
                <li><a href="portfolio" class="button next">More of my work</a></li>
            </ul>
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
            <ul class="actions">
                <li><a href="blog" class="button next">Read all</a></li>
            </ul>
        </div>
    </section>

</div>

