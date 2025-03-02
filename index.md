---
layout: default
title: "Course Summaries Blog"
---

# 📚 Course Summaries
This is a collection of my course summaries.

## Recent Posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
