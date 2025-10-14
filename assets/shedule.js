---
---

(function () {
  const SCHEDULE_URL = "{{ '/data/schedule.json' | relative_url }}";
  const root = document.getElementById('schedule-root');
  function el(t,o={}){const n=document.createElement(t); if(o.class) n.className=o.class; if(o.text!=null) n.textContent=o.text; return n;}
  function render(data){
    if(!data || !Array.isArray(data.days)){ root.textContent="Couldn’t load schedule. Please refresh."; return; }
    root.innerHTML="";
    data.days.forEach(day=>{
      root.appendChild(el('h3',{class:'day-heading',text:day.title||'Day'}));
      const tbl=el('table',{class:'schedule-table'}), thead=el('thead'), trh=el('tr');
      ['Time','Session','Details'].forEach(h=>trh.appendChild(el('th',{text:h})));
      thead.appendChild(trh); tbl.appendChild(thead);
      const tb=el('tbody');
      (day.slots||[]).forEach(s=>{
        const tr=el('tr');
        const td1=el('td',{text:s.time||''});  td1.setAttribute('data-label','Time');
        const td2=el('td',{text:s.title||''}); td2.setAttribute('data-label','Session');
        const td3=el('td',{text:s.desc||''});  td3.setAttribute('data-label','Details');
        tr.append(td1,td2,td3); tb.appendChild(tr);
      });
      tbl.appendChild(tb); root.appendChild(tbl);
    });
  }
  fetch(SCHEDULE_URL,{cache:'no-store'})
    .then(r=>{if(!r.ok) throw new Error('HTTP '+r.status); return r.json();})
    .then(render)
    .catch(e=>{console.error(e); root.textContent="Couldn’t load schedule. Please refresh.";});
})();
