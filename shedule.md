---
layout: default
title: Schedule
permalink: /schedule/
---

<!-- <main class="container"> -->
<!--   <section class="card"> -->
<!--     <h2>Schedule</h2> -->
<!--     <p>Times are in Eastern Time (ET). Subject to change—join Discord for updates.</p> -->

    <!-- Schedule will render here from data/schedule.json -->
    <div id="schedule-root" class="schedule"></div>

    <!-- Tell site.js where to fetch the JSON (works from any page) -->
    <script>window.QFF_SCHEDULE_SRC="{{ '/data/schedule.json' | relative_url }}";</script>

    <details class="note" style="margin-top:10px">
      <summary>How we schedule</summary>
      <p>We publish updates here and on Discord as speakers confirm.</p>
    </details>

    <!-- Bottom CTA -->
    <div class="center" style="margin-top:18px">
      <h3>Questions about the agenda?</h3>
      <a class="btn" href="{{ '/contact/' | relative_url }}">Go to Contact</a>
    </div>
 <!-- </section> -->
<!-- </main> -->

{% if site.schedule_mode == "live" %}
  <section class="card">
    <h2>Schedule</h2>
    <div id="schedule-root" class="schedule"></div>
  </section>

  <!-- Only load your schedule code when live -->
  <script src="{{ '/assets/schedule.js' | relative_url }}"></script>
{% else %}
  <section class="card center">
    <h2>Schedule</h2>
    <p>To be announced soon.</p>
    <p class="note">Follow updates on our <a href="{{ '/contact/' | relative_url }}">Discord</a>.</p>
  </section>
{% endif %}
