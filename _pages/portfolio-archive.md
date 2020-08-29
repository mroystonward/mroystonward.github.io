---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<div class="grid__wrapper">
{% assign items = site.portfolio | sort: 'date' %}
  {% for post in items reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
