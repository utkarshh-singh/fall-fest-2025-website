
---
layout: default
title: Schedule
permalink: /schedule/
---

{% if site.schedule_mode == "live" %}
  <section class="card">
    <h2>Schedule</h2>
    <div id="schedule-root" class="schedule"></div>
  </section>

  <!-- Only load your schedule code when live -->
  <script>window.SCHEDULE_URL = "{{ '/data/schedule.json' | relative_url }}";</script>
  <script src="{{ '/assets/schedule.js' | relative_url }}"></script>
{% else %}
  <section class="card center">
    <h2>Schedule</h2>
    <p>To be announced soon.</p>
    <p class="note">Follow updates on our <a href="{{ site.discord_url }}">Discord</a>.</p>
  </section>
{% endif %}





