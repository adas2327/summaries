---
layout: default
title: "Just Summaries – No Filler"
---

## 📚 Recent Posts

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}

[View all posts →]({{ site.baseurl }}/)

---
## About
Minimal words, maximum understanding.
