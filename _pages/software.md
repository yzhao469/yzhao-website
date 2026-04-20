---
layout: page
permalink: /software/
title: Software
nav: true
nav_order: 5
---

## [DualSPHysics-INL](https://github.com/IdahoLabResearch/DualSPHysics-INL)

GPU accelerated SPH package for granular flow modeling

DualSPHysics-INL is an extended adaptation of the [DualSPHysics](https://dual.sphysics.org/) open-source Smoothed Particle Hydrodynamics (SPH) software. Our solver has the following highlights:

- Implemented the G-B (Gudehus & Bauer) hypoplastic model for granular flow simulation

- Adopted a momentum-based boundary condition for accurate free-slip, no-slip and frictional slip boundary conditions; also avoiding wall penetration in impact loading

- GPU-accelerated

- Open source, check our GitHub page! [Link](https://github.com/IdahoLabResearch/DualSPHysics-INL)

<div class="row mt-3">
  <div class="col-sm-4.5">
    <img src="{{ '/assets/img/CPT.gif' | relative_url }}" alt="CPT simulation" class="img-fluid rounded" />
  </div>
  <div class="col-sm-7.5">
    <img src="{{ '/assets/img/Screw.gif' | relative_url }}" alt="Screw simulation" class="img-fluid rounded" />
  </div>
</div>
<div class="row mt-3">
  <div class="col-12">
    <img src="{{ '/assets/img/hopper.gif' | relative_url }}" alt="Hopper simulation" class="img-fluid rounded" style="width: 100%;" />
  </div>
</div>
