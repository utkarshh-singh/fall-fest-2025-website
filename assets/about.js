document.addEventListener('DOMContentLoaded', function() {
  const cardTabBtns = document.querySelectorAll('.card-tab-btn');
  const contentCards = document.querySelectorAll('.content-card');
  
  // Check if elements exist
  if (cardTabBtns.length === 0) {
    console.error('No card tab buttons found');
    return;
  }

  cardTabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetCard = this.getAttribute('data-card');
      console.log('Clicked card tab:', targetCard);
      
      // Remove active class from all buttons and cards
      cardTabBtns.forEach(b => b.classList.remove('active'));
      contentCards.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button and corresponding card
      this.classList.add('active');
      const targetContent = document.getElementById(targetCard);
      if (targetContent) {
        targetContent.classList.add('active');
      } else {
        console.error('Target card not found:', targetCard);
      }
    });
  });
  
  // Optional: Add keyboard navigation
  cardTabBtns.forEach((btn, index) => {
    btn.addEventListener('keydown', function(e) {
      let targetBtn = null;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetBtn = cardTabBtns[index + 1] || cardTabBtns[0];
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetBtn = cardTabBtns[index - 1] || cardTabBtns[cardTabBtns.length - 1];
      }
      
      if (targetBtn) {
        targetBtn.focus();
        targetBtn.click();
      }
    });
  });
});
