document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // HERO TEXT ROTATION ANIMATION
  // ============================================
  
  const textBlocks = document.querySelectorAll('.hero-text-block');
  const heroDots = document.querySelectorAll('.hero-dot');
  let currentBlock = 0;
  const rotationInterval = 6000; // 6 seconds per text block
  let rotationTimer;
  
  function rotateText() {
    // Remove active class from current block and dot
    textBlocks[currentBlock].classList.remove('active');
    heroDots[currentBlock].classList.remove('active');
    
    // Move to next block
    currentBlock = (currentBlock + 1) % textBlocks.length;
    
    // Add active class to next block and dot
    textBlocks[currentBlock].classList.add('active');
    heroDots[currentBlock].classList.add('active');
  }
  
  function goToSlide(index) {
    // Remove active from all
    textBlocks.forEach(block => block.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    
    // Set current to clicked index
    currentBlock = index;
    
    // Add active to selected
    textBlocks[currentBlock].classList.add('active');
    heroDots[currentBlock].classList.add('active');
    
    // Reset timer
    clearInterval(rotationTimer);
    rotationTimer = setInterval(rotateText, rotationInterval);
  }
  
  // Start automatic rotation if text blocks exist
  if (textBlocks.length > 1) {
    rotationTimer = setInterval(rotateText, rotationInterval);
  }
  
  // Add click handlers to dots
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      goToSlide(index);
    });
  });
  
  // ============================================
  // CONTENT CARDS NAVIGATION
  // ============================================
  
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
  
  // Optional: Add keyboard navigation for cards
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
