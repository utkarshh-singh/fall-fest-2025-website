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

<script>
  // ------------- tiny inline renderer (no external JS file needed) -------------
  const SCHEDULE_URL = "{{ '/data/schedule.json' | relative_url }}";

  const root = document.getElementById('schedule-root');

  function el(tag, opts = {}) {
    const n = document.createElement(tag);
    if (opts.class) n.className = opts.class;
    if (opts.text != null) n.textContent = opts.text;
    return n;
  }

  function renderSchedule(data) {
    if (!data || !Array.isArray(data.days)) {
      root.textContent = "Couldn’t load schedule. Please refresh.";
      return;
    }

    root.innerHTML = ""; // clear

    data.days.forEach(day => {
      const h = el('h3', { class: 'day-heading', text: day.title || 'Day' });
      root.appendChild(h);

      const table = el('table', { class: 'schedule-table' });
      const thead = el('thead');
      const trh = el('tr');
      ['Time', 'Session', 'Details'].forEach(hd => {
        const th = el('th', { text: hd });
        trh.appendChild(th);
      });
      thead.appendChild(trh);
      table.appendChild(thead);

      const tbody = el('tbody');
      (day.slots || []).forEach(slot => {
        const tr = el('tr');
        const tdTime = el('td', { text: slot.time || '' });  tdTime.setAttribute('data-label','Time');
        const tdTitle = el('td', { text: slot.title || '' }); tdTitle.setAttribute('data-label','Session');
        const tdDesc = el('td', { text: slot.desc || '' });   tdDesc.setAttribute('data-label','Details');
        tr.appendChild(tdTime); tr.appendChild(tdTitle); tr.appendChild(tdDesc);
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      root.appendChild(table);
    });
  }

  fetch(SCHEDULE_URL, { cache: 'no-store' })
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(renderSchedule)
    .catch(err => {
      console.error(err);
      root.textContent = "Couldn’t load schedule. Please refresh.";
    });
</script>
{% else %}
<section class="card center">
  <h2>Schedule</h2>
  <p>To be announced soon.</p>
  <p class="note">Follow updates on our <a href="{{ site.discord_url }}">Discord</a>.</p>
</section>
{% endif %}





