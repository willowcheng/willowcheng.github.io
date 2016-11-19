---
layout: page
title: 个人作品
lang: zh
---

<!-- Main -->
<div id="main">

<section id="one" class="tiles">
	{% for post in site.projects limit:site.tiles-count %}
        {% if page.lang == "zh" %}
            {% if post.category == "zh" %}
                <article>
                    <span class="image">
                        <img src="{{ site.baseurl }}{{ post.image }}" alt="" />
                    </span>
                    <header class="major">
                        <h3><a href="{{ site.baseurl }}{{ post.url }}" class="link">{{ post.title }}</a></h3>
                        <p>{{ post.description }}</p>
                        {% if post.tag %}<h6 class="icon fa-tag"> {{ post.tag }}</h6>{% endif %}
                    </header>
                </article>
            {% endif %}
        {% endif %}
	{% endfor %}
</section>


</div>
