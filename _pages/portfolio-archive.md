---
layout: archive
title: "Portfolio"
permalink: /portfolio/
header:
  image: /assets/images/gtr-tape.jpg
author_profile: false
---

<div class="grid__wrapper">
{% assign items = site.portfolio | sort: 'date' %}
  {% for post in items reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
