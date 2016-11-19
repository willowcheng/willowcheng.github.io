---
layout: page
title: Portfolio
---

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one" class="tiles">
	{% for project in site.projects limit:site.tiles-count %}
        {% if project.lang != "zh" %}
            <article>
                <span class="image">
                    <img src="{{ site.baseurl }}{{ project.image }}" alt="" />
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
