async function loadSchedule(){
  try{
    const res = await fetch('data/schedule.json');
    const data = await res.json();
    const root = document.getElementById('schedule-root');
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
