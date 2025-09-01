function render() {
    const container = document.getElementById('app');
    container.innerHTML = `
    <!-- Work Experience -->
    <section class="work-experience animate-on-scroll">
      <h2>Work Experience</h2>
      <div class="experience-card">
        <h3>Freelancer Recording Engineer & Sound Supervisor</h3>
        <span>Portugal | 2018 - 2025</span>
        <ul class="highlights">
          <li>Led re-recording mixing, dialogue cleanup, and music integration for TV and streaming projects.</li>
          <li>Supervised and mentored small audio teams (2–3 people), optimizing workflow efficiency.</li>
          <li>Collaborated with directors, producers, and broadcasters for artistic and technical balance.</li>
        </ul>

        <div class="imdb-projects">
          <h4>Featured Projects</h4>
          <div class="imdb-card">
            <a href="https://www.imdb.com/title/tt11652658/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/imdb/o-atentado.jpg" alt="O Atentado">
              <span>O Atentado (HBO)</span>
            </a>
          </div>
          <div class="imdb-card">
            <a href="https://www.imdb.com/title/tt26491163/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/imdb/lucia.jpg" alt="Lúcia, a Guardiã do Segredo">
              <span>Lúcia (SIC)</span>
            </a>
          </div>
          <div class="imdb-card">
            <a href="https://www.imdb.com/title/tt29601168/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/imdb/sr-rui.jpg" alt="Sr. Rui">
              <span>Sr. Rui (Amazon Prime)</span>
            </a>
          </div>
          <div class="imdb-card">
            <a href="https://www.imdb.com/title/tt19732502/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/imdb/lua-de-mel.jpg" alt="Lua de Mel">
              <span>Lua de Mel (SIC)</span>
            </a>
          </div>
          <div class="imdb-card">
            <a href="https://www.imdb.com/title/tt15204970/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/imdb/a-lista.jpg" alt="A Lista">
              <span>A Lista (Amazon Prime)</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="education animate-on-scroll">
      <h2>Education</h2>
      <div class="edu-card">
        <h3>Code For All – Full Stack Programming Bootcamp</h3>
        <span>2025</span>
      </div>
      <div class="edu-card">
        <h3>Southampton Solent University – Popular Music Production (B.A.)</h3>
        <span>2015 - 2018</span>
      </div>
    </section>

    <!-- Skills -->
    <section class="skills animate-on-scroll">
      <h2>Skills</h2>
      <div class="skill-category">
        <h4>Programming Languages</h4>
        <span class="skill-badge">Java</span>
        <span class="skill-badge">HTML/CSS</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">SQL</span>
      </div>
      <div class="skill-category">
        <h4>Libraries & Frameworks</h4>
        <span class="skill-badge">Spring MVC</span>
        <span class="skill-badge">Spring AI</span>
        <span class="skill-badge">Hibernate</span>
      </div>
      <div class="skill-category">
        <h4>Tools & Platforms</h4>
        <span class="skill-badge">Ant</span>
        <span class="skill-badge">Tomcat</span>
        <span class="skill-badge">PostgreSQL</span>
        <span class="skill-badge">Git/GitHub</span>
        <span class="skill-badge">AWS</span>
      </div>
    </section>
    `;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';

                const imdbCards = entry.target.querySelectorAll('.imdb-card');
                imdbCards.forEach((card, index) => {
                    card.style.opacity = 0;
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease-out';
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });

                const badges = entry.target.querySelectorAll('.skill-badge');
                badges.forEach((badge, index) => {
                    badge.style.opacity = 0;
                    badge.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        badge.style.transition = 'all 0.4s ease-out';
                        badge.style.opacity = 1;
                        badge.style.transform = 'translateY(0)';
                    }, index * 80);
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(section => observer.observe(section));
}

export default { render };