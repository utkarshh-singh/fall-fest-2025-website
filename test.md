---
layout: default
title: Home
permalink: /test/
---

<!-- <section class="hero">
  <div class="container hero-inner">
    <h1>Learn. Build. Celebrate Quantum.</h1>
    <p>Join a two-day festival of beginner-friendly workshops and a collaborative hackathon celebrating 100 years of quantum science — powered by IBM Quantum and the uOttawa community.</p>
    <div class="meta">
      <span class="pill">Nov 1–2, 2025</span>
      <span class="pill">University of Ottawa</span>
      <span class="pill">Free • Open to all</span>
    </div>
  </div>
</section> -->

<main class="container">
  <!-- SECTION 1: Hero Banner with Image and Text Overlay -->
  <section class="hero-banner-section">
    <div class="hero-banner-container">
      <img
        src="{{ '/assets/Full_Illustration.png' | relative_url }}"
        alt="Illustration celebrating quantum ideas and pioneers"
        class="hero-background-image"
        loading="eager"
        decoding="async"
      >
      
      <!-- Gradient overlay for better text readability -->
      <div class="hero-overlay"></div>
      
      <!-- Text content on the image -->
      <div class="hero-content">
        <div class="hero-primary-text">
          <h1>Learn. Build. Celebrate Quantum.</h1>
          <p class="hero-description">
            Join a two-day festival of beginner-friendly workshops and a collaborative hackathon celebrating 100 years of quantum science — powered by IBM Quantum and the uOttawa community.
          </p>
          <div class="hero-meta">
            <span class="meta-pill">Nov 1–2, 2025</span>
            <span class="meta-pill">University of Ottawa</span>
            <span class="meta-pill">Free • Open to all</span>
          </div>
        </div>
        
        <div class="hero-secondary-text">
          <p>
            <strong>Qiskit Fall Fest 2025</strong> is a student-run celebration of learning, making, and community building. This year, we're marking <strong>100 years of quantum science</strong> by bringing together curious beginners, builders, and mentors for hands-on labs, workshops and a friendly hackathon powered by <strong>IBM Quantum</strong> and the <strong>uOttawa</strong> community.
          </p>
          <div class="hero-meta">
            <span class="meta-pill">Nov 1–2, 2025</span>
            <span class="meta-pill">University of Ottawa</span>
            <span class="meta-pill">Free • Open to all</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- SECTION 2: Interactive Content Cards -->
  <section id="about" class="content-cards-section">
    <div class="container">
      
      <!-- Tab Navigation -->
      <div class="card-tabs">
        <button class="card-tab-btn active" data-card="card1">
          <span class="tab-icon">🚀</span>
          <span class="tab-text">What you'll do</span>
        </button>
        <button class="card-tab-btn" data-card="card2">
          <span class="tab-icon">👥</span>
          <span class="tab-text">Who should attend</span>
        </button>
        <button class="card-tab-btn" data-card="card3">
          <span class="tab-icon">📚</span>
          <span class="tab-text">What you'll learn</span>
        </button>
        <button class="card-tab-btn" data-card="card4">
          <span class="tab-icon">🛠️</span>
          <span class="tab-text">Tools we'll use</span>
        </button>
      </div>
  
      <!-- Card Content Areas -->
      <div class="cards-content">
        
        <!-- Card 1: What you'll do -->
        <div id="card1" class="content-card active">
          <div class="card-inner">
            <ul class="styled-list">
              <li>
                <span class="list-marker">Day 1 · Workshops</span>
                <p>Learn qubits, circuits, and Qiskit by building small programs and visualizing results.</p>
              </li>
              <li>
                <span class="list-marker">Day 2 · Workshop & Hackathon</span>
                <p>Team up to prototype something useful or delightful—QML demos, optimization ideas, or open-ended experiments on a real quantum device from IBM.</p>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Card 2: Who should attend -->
        <div id="card2" class="content-card">
          <div class="card-inner">
            <ul class="styled-list">
              <li>
                <span class="list-marker">Curious newcomers</span>
                <p>No prior quantum knowledge needed. Basic Python skills are a plus!</p>
              </li>
              <li>
                <span class="list-marker">Students</span>
                <p>In CS, Maths, Physics, Engineering, or related fields.</p>
              </li>
              <li>
                <span class="list-marker">Professionals & Enthusiasts</span>
                <p>Researchers, educators, hobbyists, and industry friends welcome.</p>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Card 3: What you'll learn -->
        <div id="card3" class="content-card">
          <div class="card-inner">
            <ul class="styled-list">
              <li>
                <span class="list-marker">Quantum Fundamentals</span>
                <p>How qubits, gates, and measurements fit into quantum circuits.</p>
              </li>
              <li>
                <span class="list-marker">Qiskit Programming</span>
                <p>Running code in notebooks; when to use simulators vs. real backends.</p>
              </li>
              <li>
                <span class="list-marker">Advanced Topics</span>
                <p>Quantum Computing, Quantum ML, variational algorithms and optimization.</p>
              </li>
              <li>
                <span class="list-marker">Broader Quantum Science</span>
                <p>Photonics-based quantum computing, sensing & devices, quantum-safe crypto, history & milestones.</p>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Card 4: Tools we'll use -->
        <div id="card4" class="content-card">
          <div class="card-inner">
            <ul class="styled-list">
              <li>
                <span class="list-marker">Qiskit</span>
                <p>Python-based quantum computing framework with Jupyter/Colab support.</p>
              </li>
              <li>
                <span class="list-marker">GitHub</span>
                <p>For project collaboration, version control, and final submissions.</p>
              </li>
              <li>
                <span class="list-marker">Discord</span>
                <p>Real-time announcements, team formation, mentor support, and community chat.</p>
              </li>
            </ul>
          </div>
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
