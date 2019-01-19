---
layout: page
lang: en
description: Occasion inspiration from life journey and hopefully got engaged
title: Blog
---

{% include banner.html %}

<div class="main">

<section id="two" class="spotlights">
	{% assign posts = site.posts | where: 'lang', 'en' %}
    {% include posts.html posts=posts limit=site.tiles-count %}
</section>

</div>
