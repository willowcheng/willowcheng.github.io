---
layout: page
lang: zh
title: 博客
description: 一些突然的灵感，偶尔的感悟，激励自己的东西
lang: zh
---

{% include banner.html %}

<div id="main">

<section id="two" class="spotlights">
    {% assign posts = site.posts | where: 'lang', 'zh' %}
    {% include posts.html posts=posts limit=site.tiles-count %}
</section>

</div>
