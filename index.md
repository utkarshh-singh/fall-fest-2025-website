---
layout: default
title: Home
---

<section class="hero">
  <div class="container hero-inner">
    <h1>Learn. Build. Quantum.</h1>
    <p>Join us for a two-day festival of beginner-friendly workshops and a high-energy hackathon — powered by IBM Quantum and the uOttawa community.</p>
    <div class="cta">
<!--       <a class="btn primary" href="{{ site.register_url }}" target="_blank" rel="noopener">Register</a> -->
      <a class="btn ghost" href="#schedule">See schedule</a>
    </div>
    <div class="meta">
      <span class="pill">Nov 1–2, 2025</span>
      <span class="pill">University of Ottawa</span>
      <span class="pill">Free • Open to all students</span>
    </div>
  </div>
</section>

<main class="container">
  <section id="about" class="card">
  <!-- Keep or remove the banner image as you like -->
  <img
    src="{{ '/assets/Full_Illustration.png' | relative_url }}"
    alt="Illustration celebrating quantum ideas and pioneers"
    class="about-banner"
    loading="eager"
    decoding="async"
  >

  <p>
    <strong>Qiskit Fall Fest — University of Ottawa</strong> is a student-run celebration of learning,
    making, and community in quantum computing. Over one weekend, we bring together curious beginners,
    builders, and mentors for hands-on workshops and a friendly hackathon powered by IBM Quantum tools
    and the uOttawa community.
  </p>

  <h3>What you’ll do</h3>
  <ul class="keypoints">
    <li><strong>Day 1 · Workshops:</strong> learn qubits, circuits, and Qiskit by building small programs and visualizing results.</li>
    <li><strong>Day 2 · Hackathon:</strong> team up to prototype something useful or delightful—QML demos, optimization ideas, or open-ended experiments.</li>
    <li><strong>Mentor hours:</strong> get guidance on scoping, debugging, and demo storytelling.</li>
  </ul>

  <h3>Who should attend</h3>
  <ul class="keypoints">
    <li><strong>New to quantum?</strong> Perfect—no prior experience required. If you can follow Python basics, you’re ready.</li>
    <li><strong>CS/Math/Physics/Engineering students</strong> looking to explore quantum concepts with practical code.</li>
    <li><strong>Designers, product thinkers, and data folks</strong> who want to help teams craft clear use-cases and demos.</li>
  </ul>

  <h3>What you’ll learn</h3>
  <ul class="keypoints">
    <li>How qubits, gates, and measurement fit into quantum circuits.</li>
    <li>Running code with <em>Qiskit</em> in notebooks and IBM Quantum Lab; when to use simulators vs. real backends.</li>
    <li>Intro to Quantum Machine Learning and optimization problem framing.</li>
    <li>Collaboration skills: scoping an idea, version control, and presenting a demo.</li>
  </ul>

  <h3>Tools we’ll use</h3>
  <ul class="keypoints">
    <li>Qiskit (Python), Jupyter/Colab/IBM Quantum Lab.</li>
    <li>GitHub for projects and submissions.</li>
    <li>Discord for announcements, team-finding, and #helpdesk support.</li>
  </ul>

  <h3>Inclusion & accessibility</h3>
  <p>
    We strive to make Fall Fest welcoming for everyone. Venues are accessible; dietary options will be available
    during the hackathon. If you need accommodations, let us know in advance or message <strong>#helpdesk</strong> on Discord.
    All participants agree to follow our <a href="{{ '/CODE_OF_CONDUCT.md' | relative_url }}" target="_blank" rel="noopener">Code of Conduct</a>.
  </p>

  <h3>Stay in the loop</h3>
  <p>
    Event updates, team-formation, and mentor Q&A happen on our Discord:
    <a href="{{ site.discord_url }}" target="_blank" rel="noopener">{{ site.discord_url }}</a>.
    Check the <a href="#schedule">schedule</a> for the latest timing.
  </p>
</section>


  <section id="schedule" class="card">
    <h2>Schedule</h2>
    <p>Times are shown in ET. Subject to change.</p>
    <div id="schedule-root" class="schedule"></div>
  </section>

  <section id="faq" class="card">
    <h2>FAQ</h2>
  
    <!-- Registration & Eligibility -->
    <details open>
      <summary>Who can register?</summary>
      <p>Students (undergrad, master’s, PhD) from any university or college. Space permitting, recent grads and professionals may attend workshops; the hackathon is student-focused.</p>
    </details>
    <details>
      <summary>Does it cost anything?</summary>
      <p>No—registration is free.</p>
    </details>
    <details>
      <summary>Do I need prior quantum experience?</summary>
      <p>No. Day 1 workshops are beginner-friendly; mentors are available throughout.</p>
    </details>
    <details>
      <summary>What’s the date and location?</summary>
      <p><strong>[Event Dates, e.g., Nov 8–9, 2025]</strong> at <strong>[Building / Room, University of Ottawa]</strong>. Times are in Eastern Time (ET).</p>
    </details>
    <details>
      <summary>How do I register?</summary>
      <p>Click “Register” at the top—it opens the form in a new tab. Seats are limited; we may enable a waitlist once full.</p>
    </details>
    <details>
      <summary>I registered—how will I get updates?</summary>
      <p>All updates are posted in our Discord. Join here: <a href="[Discord-Invite-URL]" target="_blank" rel="noopener">[Discord-Invite-URL]</a>.</p>
    </details>
  
    <!-- Logistics -->
    <details>
      <summary>What should I bring?</summary>
      <p>Laptop, charger, student ID, and anything you need to be comfortable. Headphones recommended.</p>
    </details>
    <details>
      <summary>Do I need to install anything?</summary>
      <p>Nice to have: Python 3.11+, Git, and VS Code. We’ll also use browser tools (e.g., Colab/qBraid/IBM Quantum Lab) so you can participate without installs.</p>
    </details>
    <details>
      <summary>Will food be provided?</summary>
      <p>Yes—meals/snacks during the hackathon with vegetarian and other dietary options. You can note restrictions in the registration form.</p>
    </details>
    <details>
      <summary>Is the event accessible?</summary>
      <p>Yes. Venues are accessible. If you need accommodations, tell us in the form or ping <strong>#helpdesk</strong> on Discord.</p>
    </details>
    <details>
      <summary>Is there travel or lodging support?</summary>
      <p>We’re not providing travel stipends or lodging. If you’re coming from out of town, please arrange your own accommodations.</p>
    </details>
  
    <!-- Hackathon -->
    <details>
      <summary>How does the hackathon work?</summary>
      <p>Team-based project sprint with mentors and judges. Tracks include QML, optimization, and open innovation. Demos at the end.</p>
    </details>
    <details>
      <summary>Can I join without a team?</summary>
      <p>Yes. We host team-formation at kickoff and on Discord. Solo participants are welcome but encouraged to team up (2–5 people per team).</p>
    </details>
    <details>
      <summary>What are the judging criteria?</summary>
      <p>Impact, technical depth, learning, and presentation. We value clear problem framing, working demos, and thoughtful trade-offs.</p>
    </details>
    <details>
      <summary>How do we submit?</summary>
      <p>GitHub repo + short demo (live or recorded). Submission details and deadlines will be announced at kickoff and pinned on Discord.</p>
    </details>
    <details>
      <summary>Do we get access to quantum hardware?</summary>
      <p>We’ll use simulators and may queue jobs on available IBM Quantum backends. Real-device runs are subject to availability and queue times.</p>
    </details>
    <details>
      <summary>Who owns the IP of our project?</summary>
      <p>You and your team do. Use an open-source license if you want others to build on it.</p>
    </details>
    <details>
      <summary>Can we reuse prior work?</summary>
      <p>Yes, as long as you disclose what’s new. Judges will consider novelty and learning during the event.</p>
    </details>
    <details>
      <summary>Are there prizes or certificates?</summary>
      <p>Yes—prizes for top teams and participation certificates for attendees. Details announced at the event.</p>
    </details>
  
    <!-- Code of Conduct & Safety -->
    <details>
      <summary>Is there a Code of Conduct?</summary>
      <p>Yes. Be respectful, inclusive, and supportive. Harassment or discrimination will not be tolerated. See our <a href="CODE_OF_CONDUCT.md" target="_blank" rel="noopener">Code of Conduct</a>.</p>
    </details>
    <details>
      <summary>Photo & video policy</summary>
      <p>Photos/videos may be taken. You can opt out in the registration form; we’ll provide opt-out stickers at check-in.</p>
    </details>
    <details>
      <summary>How do I get help during the event?</summary>
      <p>Use <strong>#helpdesk</strong> on Discord for logistics and <strong>#ask-a-mentor</strong> for technical questions. Staff and volunteers will also be on site.</p>
    </details>
  
    <!-- Misc -->
    <details>
      <summary>Will sessions be recorded?</summary>
      <p>We plan to record selected workshops and share slides/links after the event (subject to speaker approval).</p>
    </details>
    <details>
      <summary>How do sponsors get involved?</summary>
      <p>We welcome sponsors for prizes, mentors, or talks. Reach out in Discord or via <em>[sponsor contact method]</em>.</p>
    </details>
    <details>
      <summary>I need to cancel my registration—what do I do?</summary>
      <p>Please un-RSVP using the link in your confirmation email or message <strong>#helpdesk</strong> so we can give your spot to someone on the waitlist.</p>
    </details>
  </section>
</main>
