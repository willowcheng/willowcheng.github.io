---
layout: page
description: Occasion inspiration from life journey and hopefully got engaged
title: Blog
---

<!-- Main -->
<div id="main">

<section id="two" class="spotlights">
	{% for post in site.posts limit:site.tiles-count %}
        {% if page.lang != "zh" %}
            {% if post.lang != "zh" %}
                <section>
            		<a href="{{ site.baseurl }}{{ post.url }}" class="image">
            			<img src="{{ site.baseurl }}{{ post.image }}" alt="" data-position="center center" />
            		</a>
            		<div class="content">
            			<div class="inner">
            				<header class="major">
            					<h3>{{ post.title }}</h3>
            				</header>
            				<p>{{ post.description }}</p>
            				<ul class="actions">
            					<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read</a></li>
            				</ul>
            			</div>
            		</div>
            	</section>
            {% endif %}
        {% endif %}
	{% endfor %}
</section>

</div>
