---
layout: default
title: Contact & Venue
permalink: /contact/
---

<!--  <main class="container">
   <section id="contact" class="card center"> 
    <h2>Contact</h2>
    <p>All questions and updates happen on our Discord.</p>
    <a class="btn primary" href="{{ site.discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
    <p class="note">During the event, use <strong>#helpdesk</strong> for quick support.</p>
  </section>
</main>  -->


<main class="container">

  <!-- Venue + Map -->
  <section class="card">
    <h2>Venue & Map</h2>

    <div class="grid two contact-grid">
      <!-- Address block -->
      <div class="card contact-address">
        <h3>Address</h3>
        <address>
          <strong>Marion Hall — Room 150</strong><br>
          140 Louis-Pasteur Private <span aria-hidden="true">#</span>6N5<br>
          Ottawa, ON K1N 9B4<br>
          Canada
        </address>

        <div class="btn-row map-actions">
           <a class="btn map-btn"
              href="https://www.google.com/maps/dir/?api=1&destination=Marion%20Hall%20Room%20150%2C%20140%20Louis-Pasteur%20Private%2C%20Ottawa%2C%20ON%20K1N%209B4"
              target="_blank" rel="noopener">
             <!-- arrow icon -->
             <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 5l7 7l-7 7v-4H4v-6h9V5z"/></svg>
             <span>Directions</span>
           </a>
         
           <a class="btn ghost map-btn"
              href="https://www.google.com/maps/search/?api=1&query=Marion%20Hall%20Room%20150%2C%20140%20Louis-Pasteur%20Private%2C%20Ottawa%2C%20ON%20K1N%209B4"
              target="_blank" rel="noopener">
             <!-- pin icon -->
             <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/></svg>
             <span>Open in Maps</span>
           </a>
         </div>


        <ul class="keypoints">
          <li><strong>Transit:</strong> Bus routes serve the uOttawa campus; short walk to Marion Hall.</li>
          <li><strong>Parking:</strong> Visitor parking available on/near campus; follow posted signage.</li>
        </ul>
      </div>

      <!-- Map block -->
      <div class="card contact-map">
        <div class="map-embed">
          <iframe
            title="Map — Marion Hall, Room 150 (uOttawa)"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Marion+Hall+Room+150,+140+Louis-Pasteur+Private,+Ottawa,+ON+K1N+9B4&output=embed">
          </iframe>
        </div>
        <p class="note center">
          <a href="https://www.google.com/maps/search/?api=1&query=Marion%20Hall%20Room%20150%2C%20140%20Louis-Pasteur%20Private%2C%20Ottawa%2C%20ON%20K1N%209B4"
             target="_blank" rel="noopener"></a>
        </p>
      </div>
    </div>
  </section>

   <!-- Contact CTA -->
  <section class="card center">
    <h2>Contact</h2>
    <p>Questions, announcements, and team-forming happen on our Discord.</p>
    <a class="btn" href="{{ site.discord_url }}" target="_blank" rel="noopener">Join the Discord</a>
    <p class="note">During the event, use <strong>#helpdesk</strong> for quick support.</p>
  </section>
</main>
