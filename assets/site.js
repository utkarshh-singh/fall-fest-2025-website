// async function loadSchedule(){
//   try{
//     // Use absolute path injected by a page, or fall back to relative
//     const src = window.QFF_SCHEDULE_SRC || 'data/schedule.json';
//     const res = await fetch(src);
//     const data = await res.json();
//     const root = document.getElementById('schedule-root');
//     if(!root) return;
//     root.innerHTML = '';
//     data.days.forEach(day=>{
//       const h3 = document.createElement('h3');
//       h3.textContent = day.title;
//       root.appendChild(h3);
//       day.slots.forEach(s=>{
//         const el = document.createElement('div');
//         el.className = 'slot';
//         el.innerHTML = `<div class="time">${s.time}</div>
//                         <div class="info">
//                           <div class="title"><strong>${s.title}</strong></div>
//                           <div class="desc">${s.desc||''}</div>
//                         </div>`;
//         root.appendChild(el);
//       });
//     });
//   }catch(e){
//     console.error(e);
//   }
// }
// document.addEventListener('DOMContentLoaded', loadSchedule);
// // Theme toggle (persists in localStorage)
// (function(){
//   const key='qff-theme';
//   const root=document.documentElement;
//   const stored=localStorage.getItem(key);
//   root.dataset.theme = stored || 'light';
//   const btn=document.getElementById('theme-toggle');
//   if(btn){
//     btn.addEventListener('click',()=>{
//       const next = root.dataset.theme==='light' ? 'dark' : 'light';
//       root.dataset.theme=next; localStorage.setItem(key,next);
//     });
//   }
// })();

function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

async function loadSchedule(){
  const root = document.getElementById('schedule-root');
  if(!root) return; // no schedule on this page

  // Use page-provided path or fallback
  const src = window.QFF_SCHEDULE_SRC || 'data/schedule.json';

  try{
    const res = await fetch(src);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    root.innerHTML = '';

    (data.days || []).forEach(day => {
      // Day heading
      const heading = document.createElement('h3');
      heading.className = 'day-heading';
      heading.textContent = day.title || 'Schedule';
      root.appendChild(heading);

      // Table
      const table = document.createElement('table');
      table.className = 'schedule-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th style="width:110px">Time</th>
            <th>Session</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tbody = table.querySelector('tbody');

      (day.slots || []).forEach(s => {
        const tr  = document.createElement('tr');

        const tdTime = document.createElement('td');
        tdTime.textContent = s.time || '';
        tdTime.setAttribute('data-label','Time');

        const tdTitle = document.createElement('td');
        tdTitle.innerHTML = `<strong>${escapeHtml(s.title || '')}</strong>`;
        tdTitle.setAttribute('data-label','Session');

        const tdDesc = document.createElement('td');
        tdDesc.textContent = s.desc || '';
        tdDesc.setAttribute('data-label','Details');

        tr.append(tdTime, tdTitle, tdDesc);
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      root.appendChild(table);
    });

  }catch(err){
    console.error('Schedule load error:', err);
    root.innerHTML = `<p class="note">Couldn’t load schedule (<code>${src}</code>). Please refresh.</p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadSchedule);

