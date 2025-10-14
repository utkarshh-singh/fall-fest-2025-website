---
layout: default
title: Schedule
permalink: /schedule/
---

{% if site.schedule_mode == "live" %}
<section class="card">
  <h2>Schedule</h2>
  <div id="schedule-root" class="schedule"></div>
  <noscript><p class="note">Enable JavaScript to view the schedule.</p></noscript>
</section>

<!-- Loads the renderer and fetches /data/schedule.json -->
<script src="{{ '/assets/schedule.js' | relative_url }}"></script>
{% else %}
<section class="card center">
  <h2>Schedule</h2>
  <p>To be announced soon.</p>
  <p class="note">Follow updates on our <a href="{{ site.discord_url }}">Discord</a>.</p>
</section>
{% endif %}
