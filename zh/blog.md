---
layout: page
title: 博客
description: 一些突然的灵感，偶尔的感悟，激励自己的东西
lang: zh
---

<!-- Main -->
<div id="main">

<section id="two" class="spotlights">
	{% for post in site.posts limit:site.tiles-count %}
        {% if post.lang == "zh" %}
            <section>
                <a href="{{ site.baseurl }}{{ post.url }}" class="image">
                    <img src="{{ site.baseurl }}{{ post.image }}" alt="{{ post.title }}" data-position="center center" />
                </a>
                <div class="content">
                    <div class="inner">
                        <header class="major">
                            <h3>{{ post.title }}</h3>
                        </header>
                        <p>{{ post.date | date: "%Y年%m月%d日"}}</p>
                        <p>{{ post.description}}</p>
                        <ul class="actions">
                            <li><a href="{{ site.baseurl }}{{ post.url }}" class="button">阅读</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        {% endif %}
	{% endfor %}
</section>

</div>
