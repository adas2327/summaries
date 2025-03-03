---
layout: default
title: "Just Summaries – No Filler"
---

## 📚 Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}

[View all posts →](/)

---
## About
Minimal words, maximum understanding.
