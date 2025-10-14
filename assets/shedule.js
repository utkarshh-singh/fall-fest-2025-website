(function () {
  const url = window.SCHEDULE_URL || '/data/schedule.json';
  fetch(url, { cache: 'no-store' })
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(renderSchedule)
    .catch(err => {
      console.error(err);
      const el = document.getElementById('schedule-root');
      if (el) el.textContent = "Couldn’t load schedule. Please refresh.";
    });
})();
