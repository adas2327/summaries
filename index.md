---
layout: default
title: "Course Summaries"
---

# 📚 Course Summaries Blog  
Explore different sections:

- [Marketing Summaries]({{ site.baseurl }}/marketing/)
- [Finance Summaries]({{ site.baseurl }}/finance/)
- [Operations Summaries]({{ site.baseurl }}/operations/)

## 📖 Recent Posts:
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
