---
layout: default
title: Home
---

<section class="hero">
  <div class="container hero-inner">
    <h1>Learn. Build. Quantum.</h1>
    <p>Join us for a two-day festival of beginner-friendly workshops and a high-energy hackathon — powered by IBM Quantum and the uOttawa community.</p>
    <div class="cta">
      <a class="btn primary" href="{{ site.register_url }}" target="_blank" rel="noopener">Register</a>
      <a class="btn ghost" href="#schedule">See schedule</a>
    </div>
    <div class="meta">
      <span class="pill">Nov 8–9, 2025</span>
      <span class="pill">University of Ottawa</span>
      <span class="pill">Free • Open to all students</span>
    </div>
  </div>
</section>

<main class="container">
  <section id="about" class="card">
    <img src="{{ '/assets/Full_Illustration.png' | relative_url }}" alt="100 years of quantum computing — illustrated motifs" class="about-banner" loading="eager" decoding="async">
    <h2>About</h2>
    <p>Qiskit Fall Fest is a global, student-led series of quantum events. Our uOttawa edition features hands-on workshops, mentor hours, and a hackathon with industry-relevant challenges.</p>
    <ul class="keypoints">
      <li>Beginner-friendly onboarding to quantum &amp; Qiskit</li>
      <li>Team-based hackathon with prizes</li>
      <li>Mentorship from researchers &amp; engineers</li>
    </ul>
  </section>

  <section id="schedule" class="card">
    <h2>Schedule</h2>
    <p>Times are shown in ET. Subject to change.</p>
    <div id="schedule-root" class="schedule"></div>
  </section>

  <section id="faq" class="card">
    <h2>FAQ</h2>
    <!-- keep your expanded FAQ block here if you already added it -->
    <details open><summary>Who can register?</summary><p>Students from any university/college; workshops are beginner-friendly.</p></details>
    <details><summary>How do I get updates?</summary><p>Join our Discord: <a href="{{ site.discord_url }}" target="_blank" rel="noopener">{{ site.discord_url }}</a>.</p></details>
  </section>
</main>
