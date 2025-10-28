// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Check if elements exist
  if (tabBtns.length === 0) {
    console.error('No tab buttons found');
    return;
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default button behavior
      
      const targetTab = this.getAttribute('data-tab');
      console.log('Clicked tab:', targetTab); // Debug log
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
