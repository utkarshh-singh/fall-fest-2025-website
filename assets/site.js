async function loadSchedule(){
  try{
    // Use absolute path injected by a page, or fall back to relative
    const src = window.QFF_SCHEDULE_SRC || 'data/schedule.json';
    const res = await fetch(src);
    const data = await res.json();
    const root = document.getElementById('schedule-root');
    if(!root) return;
    root.innerHTML = '';
    data.days.forEach(day=>{
      const h3 = document.createElement('h3');
      h3.textContent = day.title;
      root.appendChild(h3);
      day.slots.forEach(s=>{
        const el = document.createElement('div');
        el.className = 'slot';
        el.innerHTML = `<div class="time">${s.time}</div>
                        <div class="info">
                          <div class="title"><strong>${s.title}</strong></div>
                          <div class="desc">${s.desc||''}</div>
                        </div>`;
        root.appendChild(el);
      });
    });
  }catch(e){
    console.error(e);
  }
}
document.addEventListener('DOMContentLoaded', loadSchedule);
// Theme toggle (persists in localStorage)
(function(){
  const key='qff-theme';
  const root=document.documentElement;
  const stored=localStorage.getItem(key);
  root.dataset.theme = stored || 'light';
  const btn=document.getElementById('theme-toggle');
  if(btn){
    btn.addEventListener('click',()=>{
      const next = root.dataset.theme==='light' ? 'dark' : 'light';
      root.dataset.theme=next; localStorage.setItem(key,next);
    });
  }
})();

