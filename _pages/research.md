---
layout: page
permalink: /research/
title: Research
nav: true
nav_order: 2
---

<div class="research-group">Current Research</div>

## Drilling in micro-gravity environment

Upcoming ...

## Advanced computational methods for granular flow modeling

This research develops advanced computational methods for complex granular flow, with applications spanning biomass handling, debris flows, and other large-deformation processes in geomaterials. The current focus is AI-agent development for particle-based simulation, which aims to automate and accelerate SPH modeling workflows. This work builds on earlier biomass flow modeling using a GPU-accelerated Smoothed Particle Hydrodynamics (SPH) solver. The biomass studies adapted a hypoplastic constitutive model to SPH, developed a predictor-corrector treatment for frictional boundaries, and validated the solver against experiments of flow through hoppers and augers. The solver is available as open-source: [DualSPHysics-INL]({{ '/software/' | relative_url }}). See relevant papers [here]({{ '/publications/?category=computational-granular-flow' | relative_url }}).

{% include figure.liquid path="assets/img/BiomassFlow.png" class="img-fluid rounded z-depth-1" %}

## Impact of motile bacteria on porous media flow

The swimming behavior of active bacteria can significantly alter fluid properties, sometimes in counterintuitive ways—such as the reduction of fluid viscosity by motile E. coli at low shear rates. This project investigates how motile E. coli influence fluid interfacial tension and droplet drying patterns through a series of controlled experiments. The bacteria were observed to preferentially attach to fluid interfaces, altering both interfacial tension and interfacial rheological behavior. Distinct crystallization patterns emerged in dried droplets depending on the presence of E. coli. These observations contribute to a deeper understanding of bacteria-fluid interactions, which are critical in biological flows through porous media and may inform future strategies for manipulating subsurface flows using active bacteria. See relevant papers [here]({{ '/publications/?category=active-porous-media' | relative_url }}).

{% include figure.liquid path="assets/img/MotileBacteria.png" class="img-fluid rounded z-depth-1" %}

<div class="research-group research-group-archived">Archived Research</div>

## Hazards mitigation strategies for earthquake surface fault rupture

Earthquake surface fault rupture poses a significant natural hazard to infrastructure safety. Predicting and mitigating this hazard has long been a central challenge in engineering. In this project, Discrete Element Modeling (DEM) is employed to simulate the influence of various embedded weak zones on the diversion of earthquake surface fault ruptures, including reverse, normal dip-slip, and strike-slip ruptures. DEM offers grain-scale insights that are often difficult to capture using continuum-based approaches. The spatial configurations of the weak zones were systematically analyzed, and the effectiveness of different arrangements in diverting fault ruptures was quantitatively assessed. The study also provides physical interpretations to explain the observed diversion mechanisms. The findings is a step forward to inform and guide industry practices in infrastructure retrofitting to enhance resilience against fault rupture hazards.

{% include figure.liquid path="assets/img/FaultRupture.png" class="img-fluid rounded z-depth-1" %}

## Rock-boring clam inspired drilling

Drilling is essential for subsurface construction and accessing underground energy resources, ranging from conventional oil and gas to renewable geothermal energy. However, compared to the efficiency of natural drilling mechanisms found in organisms, human-made technologies still face challenges such as low penetration rates, rapid drill bit wear, and high operational costs. This project investigates Cyrtopleura costata, a unique bivalve clam capable of boring into rock. Through tomographic imaging, analytical modeling, and prototype testing, the morphological advantages of its shell—particularly the arrangement of surface denticles—were found to contribute to efficient rock cutting. Nano-mechanical testing and micro-imaging revealed that the shell’s microstructure offers protection against damage. Discrete Element Modeling (DEM) further demonstrated that the collective cutting action of the denticles reduces the overall cutting effort. These findings underscore the potential of biomimicry to inspire and advance next-generation drilling technologies. See relevant papers [here]({{ '/publications/?category=bioinspired-drilling' | relative_url }}).

{% include figure.liquid path="assets/img/RockBoring.png" class="img-fluid rounded z-depth-1" %}

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 2.5rem;">
	<div style="display: flex; align-items: center; justify-content: center; padding: 0.85rem; border: 1px solid #e3e3e3; border-radius: 10px; background: #fff;">
		<img src="{{ '/assets/img/sponsors/unl.jpg' | relative_url }}" alt="University of Nebraska-Lincoln" style="max-height: 90px; width: auto; max-width: 100%; object-fit: contain;" />
	</div>
	<div style="display: flex; align-items: center; justify-content: center; padding: 0.85rem; border: 1px solid #e3e3e3; border-radius: 10px; background: #fff;">
		<img src="{{ '/assets/img/sponsors/nasa.png' | relative_url }}" alt="NASA" style="max-height: 90px; width: auto; max-width: 100%; object-fit: contain;" />
	</div>
	<div style="display: flex; align-items: center; justify-content: center; padding: 0.85rem; border: 1px solid #e3e3e3; border-radius: 10px; background: #fff;">
		<img src="{{ '/assets/img/sponsors/nasa-nebraska.png' | relative_url }}" alt="NASA Nebraska" style="max-height: 90px; width: auto; max-width: 100%; object-fit: contain;" />
	</div>
</div>
