function render() {
    const main = document.getElementById("app");
    main.innerHTML = "";

    const container = document.createElement("section");
    container.classList.add("projects-container", "fade-in");

    const title = document.createElement("h2");
    title.textContent = "Projects";
    container.appendChild(title);

    const projects = [
        {
            name: "404 Teacher Not Found – Keyboard-Based Shooter",
            description:
                "Fast-paced arcade game built in 11 nights with a 3-person team. Shoot enemies, avoid friends, with responsive controls and score tracking.",
            tech: ["Java", "SimpleGraphics", "Apache Ant"],
            image: "/assets/projects/gamejam-shooter.png",
            github: "https://github.com/BugFreeGustavo/404-teacher-not-found",
            demo: null,
        },
        {
            name: "Laço – Social Work Communication SPA",
            description:
                "Secure SPA to streamline communication between social workers and patient support groups. Developed in 3 days with Spring MVC and AWS.",
            tech: ["Java", "Spring MVC", "PostgreSQL", "AWS", "HTML", "CSS", "JavaScript"],
            image: "/assets/projects/laco-spa.png",
            github: "https://github.com/yourusername/final-project-front-end",
            demo: null,
        },
        {
            name: "Snake Game – Classic Arcade Recreation",
            description:
                "Classic Snake game built in Java using Java.AWT. Features smooth controls, score tracking, and increasing difficulty levels.",
            tech: ["Java", "Java.AWT"],
            image: "/assets/projects/snake-game.png",
            github: "https://github.com/BugFreeGustavo/snake-game-remake",
            demo: null,
        },
        {
            name: "Brick Breaker – Retro Arcade Game",
            description:
                "Retro Brick Breaker game developed in Java with Simple Graphics. Includes high score tracking. Still a work in progress but using a MVC architecture so it can be scalable.",
            tech: ["Java", "SimpleGraphics"],
            image: "/assets/projects/brick-breaker.png",
            github: "https://github.com/BugFreeGustavo/brick-breaker-remake",
            demo: null,
        },
        {
            name: "Flappy Bird Clone – Side-Scrolling Game",
            description:
                "A Flappy Bird clone built in Java using Java.AWT. Features simple controls, score tracking, and obstacle generation. Uses a lot of OOP principles and Design Patterns.",
            tech: ["Java", "SimpleGraphics"],
            image: "/assets/projects/flappy-bird.png",
            github: "https://github.com/BugFreeGustavo/flappy-bird-clone",
            demo: null,
        },
        {
            name: "Concurrent Chat Server – CodeForAll_ bootcamp exercise",
            description:
                "A multi-threaded chat server built in Java using Sockets and Threads. Supports multiple clients, message broadcasting, and private messaging.",
            tech: ["Java", "Sockets", "Threads"],
            image: "/assets/projects/chat-server.png",
            github: "https://github.com/BugFreeGustavo/concurrent-server",
            demo: null,
        },
        {
            name: "Map Editor - CodeForAll_ bootcamp exercise",
            description:
                "A simple map editor inpired in Paint built in Java using SimpleGraphics. Allows users to create, edit, and save drawings.",
            tech: ["Java", "SimpleGraphics", "Streams"],
            image: "/assets/projects/map-editor.png",
            github: "https://github.com/BugFreeGustavo/map-editor",
            demo: null,
        },
    ];

    const grid = document.createElement("div");
    grid.classList.add("projects-grid");

    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.setAttribute("data-title", project.name);

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.name;
        card.appendChild(img);

        card.addEventListener("click", () => {
            renderProjectDetail(project);
        });

        grid.appendChild(card);
    });

    container.appendChild(grid);
    main.appendChild(container);

    requestAnimationFrame(() => {
        container.classList.add("visible");
        document.querySelectorAll(".project-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), i * 100);
        });
    });
}

function renderProjectDetail(project) {
    const main = document.getElementById("app");
    main.innerHTML = "";

    const detail = document.createElement("div");
    detail.classList.add("project-detail", "fade-in");

    const backBtn = document.createElement("button");
    backBtn.classList.add("back-btn");
    backBtn.textContent = "← Back to Projects";
    backBtn.addEventListener("click", render);
    detail.appendChild(backBtn);

    const title = document.createElement("h2");
    title.textContent = project.name;
    detail.appendChild(title);

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.name;
    detail.appendChild(img);

    const desc = document.createElement("p");
    desc.textContent = project.description;
    detail.appendChild(desc);

    const techList = document.createElement("div");
    techList.classList.add("tech-list");
    project.tech.forEach((t) => {
        const badge = document.createElement("span");
        badge.textContent = t;
        techList.appendChild(badge);
    });
    detail.appendChild(techList);

    const links = document.createElement("div");
    links.classList.add("project-links");

    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub";
    links.appendChild(githubLink);

    if (project.demo) {
        const demoLink = document.createElement("a");
        demoLink.href = project.demo;
        demoLink.target = "_blank";
        demoLink.textContent = "Live Demo";
        links.appendChild(demoLink);
    }

    detail.appendChild(links);
    main.appendChild(detail);

    requestAnimationFrame(() => detail.classList.add("visible"));
}

export default { render };