function render() {
    const container = document.getElementById('app');
    container.innerHTML = `
        <section class="home">
            <img class="profile-pic" src="/assets/profile.jpg" alt="Gustavo's Picture" />
            <div class="intro-text">
                <h1>Hey there!</h1>
                <p>I'm <span class="highlight">Gustavo Marques</span> — a creative developer with a background in audio post production for cinema and television.</p>
                <p>I blend my technical and artistic skills to bring interactive experiences to life. From <code><strong>Java</strong></code> to <code><strong>JavaScript</strong></code>, I love building projects that connect code, sound, and design.</p>
                <p>Explore my CV to see how I can contribute to your next project!</p>

                <a href="/assets/cv/cv-gustavo-dev-2025.pdf" download="Gustavo_Marques_CV.pdf" class="cta-btn" target="_blank">Download CV</a>
            </div>
        </section>
    `;
}
export default { render };