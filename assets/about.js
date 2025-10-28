document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  // Check if accordion elements exist
  if (accordionHeaders.length === 0) {
    console.error('No accordion headers found');
    return;
  }

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('data-accordion');
      const targetBody = document.getElementById(targetId);
      
      console.log('Clicked accordion:', targetId); // Debug log
      
      // Toggle active state for header
      this.classList.toggle('active');
      
      // Toggle active state for body
      if (targetBody) {
        targetBody.classList.toggle('active');
      }
      
      // Optional: Close other accordions (uncomment if you want only one open at a time)
      /*
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.classList.remove('active');
          const otherId = otherHeader.getAttribute('data-accordion');
          const otherBody = document.getElementById(otherId);
          if (otherBody) {
            otherBody.classList.remove('active');
          }
        }
      });
      */
    });
  });
  
  // Optional: Open first accordion by default
  // Uncomment these lines if you want the first section open on page load
  /*
  if (accordionHeaders.length > 0) {
    accordionHeaders[0].classList.add('active');
    const firstId = accordionHeaders[0].getAttribute('data-accordion');
    const firstBody = document.getElementById(firstId);
    if (firstBody) {
      firstBody.classList.add('active');
    }
  }
  */
});
