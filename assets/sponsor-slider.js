(function(){
  const viewport = document.getElementById('sponsorViewport');
  if(!viewport) return;
  const track = viewport.querySelector('.ss-track');
  const prevBtn = document.querySelector('.ss-prev');
  const nextBtn = document.querySelector('.ss-next');
  const pauseBtn = document.querySelector('.ss-pause');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let autoplay = !prefersReduced;
  let timer = null;
  const STEP = () => viewport.clientWidth; // page-by-page

  function next(){ 
    if(track.scrollLeft + viewport.clientWidth >= track.scrollWidth - 2){
      track.scrollTo({left:0, behavior:'smooth'});
    }else{
      track.scrollBy({left: STEP(), behavior:'smooth'});
    }
  }
  function prev(){
    if(track.scrollLeft <= 2){
      track.scrollTo({left: track.scrollWidth, behavior:'instant'});
    }
    track.scrollBy({left: -STEP(), behavior:'smooth'});
  }
  function start(){
    if(timer || !autoplay) return;
    timer = setInterval(next, 3000);
    pauseBtn?.setAttribute('aria-pressed','false');
    pauseBtn && (pauseBtn.textContent = 'Pause');
  }
  function stop(){
    clearInterval(timer); timer = null;
    pauseBtn?.setAttribute('aria-pressed','true');
    pauseBtn && (pauseBtn.textContent = 'Play');
  }

  // Buttons
  prevBtn?.addEventListener('click', ()=>{ stop(); prev(); });
  nextBtn?.addEventListener('click', ()=>{ stop(); next(); });
  pauseBtn?.addEventListener('click', ()=>{
    if(timer){ stop(); } else { autoplay = true; start(); }
  });

  // Pause on hover/focus; resume on leave
  viewport.addEventListener('mouseenter', stop);
  viewport.addEventListener('mouseleave', ()=>{ autoplay && start(); });
  viewport.addEventListener('focusin', stop);
  viewport.addEventListener('focusout', ()=>{ autoplay && start(); });

  // Start
  if(autoplay) start();
})();
