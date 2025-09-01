function render(service) {
    const container = document.getElementById("app");
    container.innerHTML = `
    <section class="about-section">
      <div class="about-text">
        <h2>Outside of Work</h2>
        <p>
          When I’m not coding, you’ll probably find me chasing waves, playing guitar, 
          or looking for new adventures. Sports, especially surfing, keep me grounded 
          and connected to nature.
        </p>
      </div>
      <div class="about-media">
        <img src="/assets/surfing.jpg" alt="Gustavo surfing">
      </div>
    </section>

    <section class="about-section">
      <div class="about-text">
        <h2>Audio Post Production</h2>
        <p>
          Before diving deep into development, I built a career in 
          <strong>audio post production for cinema and television</strong>. 
          From dialogue editing to sound design, I’ve worked on projects where 
          storytelling meets technology.
        </p>
      </div>
      <div class="about-media">
        <img src="/assets/studio.jpg" alt="In the studio mixing audio">
      </div>
    </section>

    <section class="about-section">
      <div class="about-text">
        <h2>Barbante</h2>
        <p>
          Music has always been a huge part of my life. With my band 
          <strong>Barbante</strong>, we’ve played live shows, including the 
          <em>NOS Summer Opening 2018</em>, and released songs on Spotify and videos on YouTube.
        </p>
        <div class="band-links">
          <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/artist/71IYsHOw418j6McIukWQ4i?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div class="about-media">
        <img src="/assets/barbante-madeira.jpg" alt="Barbante live at NOS Summer Opening 2018">
        <img src="/assets/patamar-videoclip.jpg" alt="Playing guitar">
      </div>
    </section>

    <section class="about-section">
  <div class="about-text">
    <h2 class="videoclips-title">Videoclips</h2>
    <p>
      Here are a couple of our official videoclips, capturing both the energy of the music 
      and our creative spirit.
    </p>
  </div>
  <div class="about-media videoclips-grid">
    <iframe src="https://www.youtube.com/embed/w4yg_Gwkk_k?si=wkoeHIlD4CF5iqzD" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
    <iframe src="https://www.youtube.com/embed/LnlFKqA3Guc?si=0KFZM0m7CvHphkwQ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
  </div>
</section>


    <section class="about-section">
      <div class="about-text">
        <h2>Adventure Spirit</h2>
        <p>
          I love to push boundaries — whether it’s through learning new 
          technologies or jumping out of a plane. Skydiving was one of those 
          experiences that remind me to embrace risk and growth.
        </p>
      </div>
      <div class="about-media">
        <img src="/assets/skydiving.jpg" alt="Skydiving experience">
      </div>
    </section>
  `;

    service.animateAboutSections();
}

export default { render };
