---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Journal Articles</h2>

{% bibliography --group_by year --group_order descending --query @article* %}

<h2>Conference Proceedings</h2>

{% bibliography --group_by year --group_order descending --query @inproceedings* %}

<h2>Reports</h2>

{% bibliography --group_by year --group_order descending --query @techreport* %}

</div>
