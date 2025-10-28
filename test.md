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
  <section id="about" class="card about-section">
    <div class="split-container">
      <!-- Left side - Image -->
      <div class="split-image">
        <img
          src="{{ '/assets/Full_Illustration.png' | relative_url }}"
          alt="Illustration celebrating quantum ideas and pioneers"
          loading="eager"
          decoding="async"
        >
      </div>
      
      <!-- Right side - Text content -->
      <div class="split-content">
        <div class="intro-text">
          <p>
            <strong>Qiskit Fall Fest 2025</strong> is a student-run celebration of learning,
            making, and community building. This year, we're marking 
            <strong>100 years of quantum science</strong> by bringing together curious beginners,
            builders, and mentors for hands-on labs, workshops and a friendly hackathon powered 
            by <strong>IBM Quantum</strong> and the <strong>uOttawa</strong> community.
          </p>
        </div>
      </div>
    </div>
  
    <!-- Tabbed Navigation below the split section -->
    <div class="info-tabs">
      <div class="tab-nav">
        <button class="tab-btn active" data-tab="tab1">
          <span class="tab-icon">🚀</span>
          <span class="tab-label">What you'll do</span>
        </button>
        <button class="tab-btn" data-tab="tab2">
          <span class="tab-icon">👥</span>
          <span class="tab-label">Who should attend</span>
        </button>
        <button class="tab-btn" data-tab="tab3">
          <span class="tab-icon">📚</span>
          <span class="tab-label">What you'll learn</span>
        </button>
        <button class="tab-btn" data-tab="tab4">
          <span class="tab-icon">🛠️</span>
          <span class="tab-label">Tools we'll use</span>
        </button>
      </div>
  
      <div class="tab-content-wrapper">
        <div id="tab1" class="tab-content active">
          <ul class="keypoints">
            <li><strong>Day 1 · Workshops:</strong> learn qubits, circuits, and Qiskit by building small programs and visualizing results.</li>
            <li><strong>Day 2 · Workshop & Hackathon:</strong> team up to prototype something useful or delightful—QML demos, optimization ideas, or open-ended experiments on a real quantum device from IBM.</li>
          </ul>
        </div>
  
        <div id="tab2" class="tab-content">
          <ul class="keypoints">
            <li>Curious newcomers with no prior quantum knowledge. Basic Python skills are a plus!</li>
            <li>Students in CS/Maths/Physics/Engineering.</li>
            <li>Researchers, educators, hobbyists, and industry friends.</li>
          </ul>
        </div>
  
        <div id="tab3" class="tab-content">
          <ul class="keypoints">
            <li>How qubits, gates, and measurements fit into quantum circuits.</li>
            <li>Running code with <em>Qiskit</em> in notebooks; when to use simulators vs. real backends.</li>
            <li>Quantum Computing, Quantum ML, variational algorithms and optimization.</li>
            <li>Broader quantum science: Photonics based quantum computing, sensing & devices, quantum-safe crypto, history & milestones.</li>
          </ul>
        </div>
  
        <div id="tab4" class="tab-content">
          <ul class="keypoints">
            <li>Qiskit (Python), Jupyter/Colab.</li>
            <li>GitHub for projects and submissions.</li>
            <li>Discord for announcements, team-finding, and support.</li>
          </ul>
        </div>
      </div>
    </div>
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
<script src="{{ '/assets/about.js' | relative_url }}"></script>
