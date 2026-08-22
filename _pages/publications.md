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

<div class="publication-view-toggle" role="tablist" aria-label="Publication organization">
	<button type="button" role="tab" aria-selected="true" aria-controls="publications-by-year" data-publication-view="year">By year</button>
	<button type="button" role="tab" aria-selected="false" aria-controls="publications-by-area" data-publication-view="area">By research area</button>
</div>

<div id="publications-by-year" data-publication-panel="year">

{% bibliography --group_by year --group_order descending %}

</div>

<div id="publications-by-area" data-publication-panel="area" hidden>

<h2 id="computational-granular-flow">Computational Granular Flow</h2>

{% bibliography --group_by year --group_order descending --query @*[keywords=CompGran] %}

<h2 id="active-porous-media">Active Porous Media Flow</h2>

{% bibliography --group_by year --group_order descending --query @*[keywords=ActivePorousMedia] %}

<h2 id="bioinspired-drilling">Bio-inspired Rock-Drilling</h2>

{% bibliography --group_by year --group_order descending --query @*[keywords=bio-boring] %}

<h2 id="other-publications">Other Publications</h2>

{% bibliography --group_by year --group_order descending --query @*[keywords=other] %}

</div>

<script>
	(() => {
		const buttons = document.querySelectorAll('[data-publication-view]');
		const panels = document.querySelectorAll('[data-publication-panel]');
		const categoryIds = new Set([
			'computational-granular-flow',
			'active-porous-media',
			'bioinspired-drilling',
			'other-publications',
		]);

		const activateView = (view) => {
			buttons.forEach((button) => {
				const isActive = button.dataset.publicationView === view;
				button.setAttribute('aria-selected', isActive);
			});
			panels.forEach((panel) => {
				panel.hidden = panel.dataset.publicationPanel !== view;
			});
		};

		const categoryId = new URLSearchParams(window.location.search).get('category');
		if (categoryIds.has(categoryId)) {
			activateView('area');
			setTimeout(() => document.getElementById(categoryId)?.scrollIntoView(), 0);
		}

		buttons.forEach((button) => {
			button.addEventListener('click', () => activateView(button.dataset.publicationView));
		});
	})();
</script>

</div>
