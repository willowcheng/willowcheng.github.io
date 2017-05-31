---
layout: page
title: 个人作品
description: 在设计和开发中游走，坚信混合能力带来的创造意志
lang: zh
---

{% include banner.html %}

<div id="main">

<section id="one" class="tiles">
	{% for project in site.projects limit:site.tiles-count %}
        {% if project.lang == "zh" %}
            <article>
                <span class="image">
                    <img src="{{ site.baseurl }}{{ project.image }}" alt="{{ project.title }}" />
                </span>
                <header class="major">
                    <h3><a href="{{ site.baseurl }}{{ project.url }}" class="link">{{ project.title }}</a></h3>
                    <p>{{ project.description }}</p>
                    {% if project.tag %}<h6 class="icon fa-tag"> {{ project.tag }}</h6>{% endif %}
                </header>
            </article>
        {% endif %}
	{% endfor %}
</section>


</div>
