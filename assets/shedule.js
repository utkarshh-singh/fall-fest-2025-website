---
---

// Tiny, resilient schedule renderer (no dependencies)
(function () {
  // Prefer the URL injected by the page; fall back to Liquid expansion.
  const SCHEDULE_URL = (window.SCHEDULE_URL && String(window.SCHEDULE_URL))
    || "{{ '/data/schedule.json' | relative_url }}";

  const root = document.getElementById('schedule-root');
  if (!root) return;

  // helpers
  const el = (tag, props = {}) => {
    const n = document.createElement(tag);
    if (props.class) n.className = props.class;
    if (props.text != null) n.textContent = props.text;
    if (props.html != null) n.innerHTML = props.html;
    return n;
  };

  const showError = (msg) => {
    root.textContent = msg || "Couldn’t load schedule. Please refresh.";
  };

  const render = (data) => {
    if (!data || !Array.isArray(data.days)) { showError(); return; }

    root.innerHTML = ""; // clear

    data.days.forEach((day) => {
      // Day heading
      root.appendChild(el('h3', { class: 'day-heading', text: day.title || 'Schedule' }));

      // Table
      const table = el('table', { class: 'schedule-table' });

      const thead = el('thead');
      const trh = el('tr');
      ['Time', 'Session', 'Details'].forEach((t) => trh.appendChild(el('th', { text: t })));
      thead.appendChild(trh);
      table.appendChild(thead);

      const tbody = el('tbody');
      (day.slots || []).forEach((s) => {
        const tr = el('tr');

        const td1 = el('td', { text: s.time || '' });
        td1.setAttribute('data-label', 'Time');

        const td2 = el('td', { text: s.title || '' });
        td2.setAttribute('data-label', 'Session');

        const td3 = el('td', { text: (s.desc || '') });
        td3.setAttribute('data-label', 'Details');

        tr.append(td1, td2, td3);
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      root.appendChild(table);
    });
  };

  // loading state
  root.innerHTML = '<p class="note">Loading schedule…</p>';

  fetch(SCHEDULE_URL, { cache: 'no-store' })
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(render)
    .catch((err) => {
      console.error('Schedule load failed:', err);
      showError("Couldn’t load schedule (/data/schedule.json). Please refresh.");
    });
})();
