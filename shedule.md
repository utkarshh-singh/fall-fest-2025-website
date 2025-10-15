---
layout: default
title: Schedule
permalink: /schedule/
---

<section class="card">
  <h2>Schedule</h2>

  {% assign days = site.data.schedule.days %}
  {% if days and days.size > 0 %}
    {% for day in days %}
      <h3 class="day-heading">{{ day.title }}</h3>
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {% for s in day.slots %}
            <tr>
              <td data-label="Time">{{ s.time }}</td>
              <td data-label="Session">{{ s.title }}</td>
              <td data-label="Details">{{ s.desc }}</td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    {% endfor %}
  {% else %}
    <p>To be announced soon.</p>
    <p class="note">Follow updates on our <a href="{{ site.discord_url }}">Discord</a>.</p>
  {% endif %}
</section>
