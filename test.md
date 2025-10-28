---
layout: default
title: Home
permalink: /test/
---

<section class="hero">
  <div class="container hero-inner">
    <h1>Learn. Build. Celebrate Quantum.</h1>
    <p>Join a two-day festival of beginner-friendly workshops and a collaborative hackathon celebrating 100 years of quantum science — powered by IBM Quantum and the uOttawa community.</p>
    <div class="meta">
      <span class="pill">Nov 1–2, 2025</span>
      <span class="pill">University of Ottawa</span>
      <span class="pill">Free • Open to all</span>
    </div>
  </div>
</section>

<main class="container">
  <section id="about" class="card">
    <img
      src="{{ '/assets/Full_Illustration.png' | relative_url }}"
      alt="Illustration celebrating quantum ideas and pioneers"
      class="about-banner"
      loading="eager"
      decoding="async"
    >

    <p>
      <strong>Qiskit Fall Fest 2025</strong> is a student-run celebration of learning,
      making, and community building. This year marks 
      <strong>100 years of quantum science</strong>—and we're bringing together curious beginners,
      builders, and mentors for hands-on labs, workshops, and a friendly hackathon powered 
      by <strong>IBM Quantum</strong> and the <strong>uOttawa</strong> community.
    </p>

    <h3>What you'll do</h3>
    <ul class="keypoints">
      <li><strong>Day 1 — Workshops:</strong> Learn qubits, circuits, and Qiskit by building small programs and visualizing results.</li>
      <li><strong>Day 2 — Workshop & Hackathon:</strong> Team up to prototype something useful or delightful—QML demos, optimization challenges, or open-ended experiments on real IBM quantum hardware.</li>
      <li><strong>Mentor support:</strong> Get guidance on project scoping, debugging, and demo storytelling throughout the event.</li>
    </ul>

    <h3>Who should attend</h3>
    <ul class="keypoints">
      <li><strong>Curious newcomers</strong> with no prior quantum knowledge—basic Python skills are helpful but not required.</li>
      <li><strong>Students</strong> in CS, Math, Physics, Engineering, or related fields.</li>
      <li><strong>Researchers, educators, hobbyists,</strong> and industry professionals interested in quantum computing.</li>
    </ul>

    <h3>What you'll learn</h3>
    <ul class="keypoints">
      <li>How qubits, gates, and measurements work together in quantum circuits.</li>
      <li>Running quantum code with <em>Qiskit</em> in notebooks and when to use simulators vs. real quantum backends.</li>
      <li>Quantum computing fundamentals, quantum machine learning, variational algorithms, and optimization techniques.</li>
      <li>Broader quantum science topics: photonics-based quantum computing, quantum sensing & devices, quantum-safe cryptography, and key historical milestones.</li>
    </ul>

    <h3>Tools & platforms</h3>
    <ul class="keypoints">
      <li><strong>Qiskit</strong> (Python) in Jupyter notebooks or Google Colab.</li>
      <li><strong>GitHub</strong> for project collaboration and submissions.</li>
      <li><strong>Discord</strong> for announcements, team formation, and real-time support.</li>
    </ul>
  </section>

  <section class="card">
    <h2>Inclusion & accessibility</h2>
    <p>
      We're committed to making Fall Fest welcoming for everyone. All venues are accessible, 
      and dietary accommodations will be available. All participants must agree to our
      <a href="{{ '/code-of-conduct/' | relative_url }}">Code of Conduct</a>.
    </p>
  </section>

  <section class="card" aria-labelledby="sponsor-heading">
    <h2 id="sponsor-heading">Sponsors & Partners</h2>

    <div class="sponsor-marquee" aria-label="Sponsor logos">
      <div class="marquee-track">
        {% for sp in site.data.sponsors %}
          <a class="sponsor-tile" href="{{ sp.url }}" target="_blank" rel="noopener">
            <img src="{{ sp.logo | relative_url }}" alt="{{ sp.name }}">
          </a>
        {% endfor %}
        {% for sp in site.data.sponsors %}
          <a class="sponsor-tile" href="{{ sp.url }}" target="_blank" rel="noopener">
            <img src="{{ sp.logo | relative_url }}" alt="{{ sp.name }}">
          </a>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="card center">
    <h2>Stay in the loop</h2>
    <p>Event updates, team formation, and mentor Q&A all happen on Discord.</p>
    <a class="btn" href="{{ '/contact/' | relative_url }}">Join the Discord</a>
  </section>
</main>
