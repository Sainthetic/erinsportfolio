const assetPaths = {
    audio: {
        background: "assets/music/BACKGROUND SFX.mp3",
        loading: "assets/music/LOADING SFX.mp3",
        project: "assets/music/PROJECT DEX SFX.mp3",
        trainer: "assets/music/TRAINER SFX.mp3"
    },
    trainer: "assets/trainer/ASH KETCHUM.webp",
    backgrounds: {
        day: [
            "assets/backgrounds/DAY MODE/00_background.png",
            "assets/backgrounds/DAY MODE/01_back clouds.png",
            "assets/backgrounds/DAY MODE/02_cloud1.png",
            "assets/backgrounds/DAY MODE/03_cloud2.png",
            "assets/backgrounds/DAY MODE/04_cloud3.png",
            "assets/backgrounds/DAY MODE/05_cloud4.png",
            "assets/backgrounds/DAY MODE/06_back_mountains.png",
            "assets/backgrounds/DAY MODE/07_mid_hills.png",
            "assets/backgrounds/DAY MODE/08_mid_forest.png",
            "assets/backgrounds/DAY MODE/09_front_grass.png",
            "assets/backgrounds/DAY MODE/10_front_leafs.png",
            "assets/backgrounds/DAY MODE/11_front_trees1.png",
            "assets/backgrounds/DAY MODE/12_front_trees2.png",
            "assets/backgrounds/DAY MODE/13_front_rocks.png"
        ],
        night: [
            "assets/backgrounds/NIGHT MODE/BackGround_001.png",
            "assets/backgrounds/NIGHT MODE/BackGround_002.png",
            "assets/backgrounds/NIGHT MODE/BackGround_003.png",
            "assets/backgrounds/NIGHT MODE/BackGround_004.png",
            "assets/backgrounds/NIGHT MODE/BackGround_005.png",
            "assets/backgrounds/NIGHT MODE/BackGround_006.png",
            "assets/backgrounds/NIGHT MODE/BackGround_007.png"
        ]
    },
    pokedex: {
        charmander: "assets/pokemon/for the pokedex/charmander.png",
        squirtle: "assets/pokemon/for the pokedex/squirtle.png",
        bulbasaur: "assets/pokemon/for the pokedex/bulbasaur.png"
    },
    pokemon: {
        day: {
            snorlax: "assets/pokemon/DAY/snorlax.png",
            oshawott: "assets/pokemon/DAY/oshawott.png",
            pikachu: "assets/pokemon/DAY/pikachu.png",
            eevee: "assets/pokemon/DAY/eevee.png",
            charmanderPixel: "assets/pokemon/DAY/charmander pixel.png",
            mew: "assets/pokemon/DAY/mew.png",
            charizard: "assets/pokemon/DAY/charizard.png"
        },
        night: {
            chandelure: "assets/pokemon/DARK/chandelure.png",
            zubat: "assets/pokemon/DARK/zubat.png",
            espeon: "assets/pokemon/DARK/espeon.png",
            gengar: "assets/pokemon/DARK/gengar.png"
        }
    }
};

const projects = [
    {
        id: 1,
        key: "hospital",
        name: "Hospital Triage Management System",
        shortName: "Hospital Triage",
        pokemon: "Charmander",
        image: assetPaths.pokedex.charmander,
        status: "Caught",
        completionYear: "2026",
        role: "Backend Engineer",
        technologies: ["Python"],
        description:
            "A management system designed to help organize patient triage information and support faster prioritization in a hospital workflow.",
        features: [
            "Organizes patient triage records",
            "Supports priority-based patient handling",
            "Stores structured hospital workflow data"
        ],
        lessons:
            "I practiced designing a system around real workflow needs, data organization, and clearer user flow for urgent information.",
        github: "https://github.com/Sainthetic/COEPRO4-PROJECT.git"
    },
    {
        id: 2,
        key: "cpu",
        name: "CPU Scheduling Simulator",
        shortName: "CPU Scheduler",
        pokemon: "Squirtle",
        image: assetPaths.pokedex.squirtle,
        status: "Caught",
        completionYear: "2026",
        role: "Logic Programmer",
        technologies: ["Python"],
        description:
            "A simulator for studying how CPU scheduling algorithms handle processes, waiting time, turnaround time, and execution order.",
        features: [
            "Simulates process scheduling behavior",
            "Tracks waiting and turnaround times",
            "Helps compare algorithm performance"
        ],
        lessons:
            "I strengthened my understanding of operating system scheduling, algorithm flow, and visualizing technical output clearly.",
        github: "https://github.com/Sainthetic/COEPRO-5-PROJECT.git"
    },
    {
        id: 3,
        key: "forest",
        name: "Forest Adventures / Jungle Escape",
        shortName: "Forest Adventures",
        pokemon: "Bulbasaur",
        image: assetPaths.pokedex.bulbasaur,
        status: "Caught",
        completionYear: "2026",
        role: "Game Developer",
        technologies: ["Python"],
        description:
            "A 2D platformer game project focused on level navigation, player movement, obstacles, and a forest adventure experience.",
        features: [
            "Player movement and platforming",
            "Forest-themed level design",
            "Obstacle and navigation mechanics"
        ],
        lessons:
            "I learned how interaction, animation, and game rules work together to make a simple experience feel responsive.",
        github: "https://github.com/Sainthetic/COEPRO3-PROJECT.git"
    },
    {
        id: 4,
        key: "training",
        name: "Technical Vocational Training Center System",
        shortName: "Unknown",
        pokemon: "Unknown",
        image: "",
        status: "Uncaught",
        completionYear: "",
        role: "",
        technologies: [],
        description: "",
        features: [],
        lessons: "",
        github: "",
        comingSoon: true
    }
];

const trainerSkills = [
    {
        name: "Java",
        level: 50,
        stars: "5/10"
    },
    {
        name: "Python",
        level: 80,
        stars: "8/10"
    },
    {
        name: "HTML",
        level: 50,
        stars: "5/10"
    },
    {
        name: "CSS",
        level: 60,
        stars: "6/10"
    },
    {
        name: "JavaScript",
        level: 70,
        stars: "7/10"
    }
];

const ambientPokemon = {
    day: [
        // Snorlax positioned lower-left and a bit larger
        { name: "Snorlax", src: assetPaths.pokemon.day.snorlax, movement: "idle", size: 220, left: "4%", bottom: "6%" },
        { name: "Mew", src: assetPaths.pokemon.day.mew, movement: "fly", size: 86, top: "18%", speed: "29s", delay: "-9s", direction: "left-to-right", flip: true },
        { name: "Charizard", src: assetPaths.pokemon.day.charizard, movement: "fly", size: 150, top: "12%", speed: "34s", delay: "-18s", direction: "right-to-left" }
    ],
    night: [
        { name: "Chandelure", src: assetPaths.pokemon.night.chandelure, movement: "fly", size: 95, top: "20%", speed: "30s", delay: "-6s", direction: "right-to-left" },
        { name: "Zubat", src: assetPaths.pokemon.night.zubat, movement: "fly", size: 78, top: "15%", speed: "23s", delay: "-13s", direction: "left-to-right" },
        { name: "Espeon", src: assetPaths.pokemon.night.espeon, movement: "walk", size: 95, bottom: "9%", speed: "28s", delay: "-11s", direction: "right-to-left" },
        { name: "Gengar", src: assetPaths.pokemon.night.gengar, movement: "walk", size: 104, bottom: "8%", speed: "32s", delay: "-21s", direction: "left-to-right", flip: true }
    ]
};

const dayWalkingPokemon = [
    { name: "Oshawott", src: assetPaths.pokemon.day.oshawott, size: 104, defaultFacing: "right" },
    { name: "Pikachu", src: assetPaths.pokemon.day.pikachu, size: 98, defaultFacing: "left" },
    { name: "Eevee", src: assetPaths.pokemon.day.eevee, size: 104, defaultFacing: "right" },
    { name: "Charmander", src: assetPaths.pokemon.day.charmanderPixel, size: 96, defaultFacing: "left" }
];

// Lanes to place walking day Pokémon — four lanes to avoid overlap
const dayWalkingLanes = [
    { bottom: "12%", speed: "28s", delay: "-3s" },
    { bottom: "18%", speed: "30s", delay: "-10s" },
    { bottom: "24%", speed: "26s", delay: "-17s" },
    { bottom: "30%", speed: "34s", delay: "-22s" }
];

const elements = {
    startupScreen: document.getElementById("startupScreen"),
    startupDayBackground: document.getElementById("startupDayBackground"),
    loadingBar: document.getElementById("loadingBar"),
    loadingText: document.getElementById("loadingText"),
    startButton: document.getElementById("startButton"),
    menuToggle: document.querySelector(".menu-toggle"),
    navLinks: document.querySelector(".nav-links"),
    dayBackground: document.getElementById("dayBackground"),
    nightBackground: document.getElementById("nightBackground"),
    pokemonField: document.getElementById("pokemonField"),
    projectGrid: document.getElementById("projectGrid"),
    trainerModal: document.getElementById("trainerModal"),
    trainerSkills: document.getElementById("trainerSkills"),
    projectModal: document.getElementById("projectModal"),
    modalNumber: document.getElementById("modalNumber"),
    modalImage: document.getElementById("modalImage"),
    modalTitle: document.getElementById("modalTitle"),
    modalFacts: document.getElementById("modalFacts"),
    modalDescription: document.getElementById("modalDescription"),
    modalFeatures: document.getElementById("modalFeatures"),
    modalLessons: document.getElementById("modalLessons"),
    githubButton: document.getElementById("githubButton"),
    copyLinkButton: document.getElementById("copyLinkButton"),
    modeToggle: document.getElementById("modeToggle"),
    musicToggle: document.getElementById("musicToggle"),
    openTrainerProfile: document.getElementById("openTrainerProfile"),
    trainerNavLink: document.getElementById("trainerNavLink")
};

const audio = {
    background: new Audio(assetPaths.audio.background),
    loading: new Audio(assetPaths.audio.loading),
    project: new Audio(assetPaths.audio.project),
    trainer: new Audio(assetPaths.audio.trainer)
};

let currentMode = "day";
let loadingSoundPlayed = false;
let musicEnabled = false;

audio.background.loop = true;
audio.background.volume = 0.38;
audio.loading.volume = 0.7;
audio.project.volume = 0.55;
audio.trainer.volume = 0.55;

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(function () {
        // Browsers may block sound until a user interacts with the page.
    });
}

function toggleBackgroundMusic(forcePlay) {
    musicEnabled = typeof forcePlay === "boolean" ? forcePlay : !musicEnabled;

    if (musicEnabled) {
        audio.background.play().catch(function () {
            musicEnabled = false;
        });
    } else {
        audio.background.pause();
    }

    updateMusicButton();
}

function updateMusicButton() {
    elements.musicToggle.textContent = musicEnabled ? "MUSIC ON" : "MUSIC OFF";
}

function renderBackgroundLayers() {
    renderLayerSet(elements.startupDayBackground, assetPaths.backgrounds.day);
    renderLayerSet(elements.dayBackground, assetPaths.backgrounds.day);
    renderLayerSet(elements.nightBackground, assetPaths.backgrounds.night);
}

function renderLayerSet(container, layers) {
    container.innerHTML = "";

    layers.forEach(function (src, index) {
        const image = document.createElement("img");
        image.className = "bg-layer";
        image.src = src;
        image.alt = "";
        image.style.zIndex = index + 1;
        image.dataset.depth = (index + 1) / layers.length;
        container.appendChild(image);
    });
}

function renderAmbientPokemon() {
    elements.pokemonField.innerHTML = "";

    getAmbientPokemonForCurrentMode().forEach(function (pokemon) {
        const wrapper = document.createElement("div");
        const direction = pokemon.direction || "left-to-right";

        wrapper.className = `ambient-pokemon pokemon-${pokemon.movement} pokemon-${direction}`;
        wrapper.classList.toggle("pokemon-flipped", Boolean(pokemon.flip));
        wrapper.style.setProperty("--pokemon-size", pokemon.size + "px");
        wrapper.style.setProperty("--pokemon-speed", pokemon.speed || "20s");
        wrapper.style.setProperty("--pokemon-delay", pokemon.delay || "0s");

        if (pokemon.left) {
            wrapper.style.setProperty("--pokemon-left", pokemon.left);
        }

        if (pokemon.bottom) {
            wrapper.style.setProperty("--pokemon-bottom", pokemon.bottom);
        }

        if (pokemon.top) {
            wrapper.style.setProperty("--pokemon-top", pokemon.top);
        }

        // Ensure Snorlax is visible over background elements
        if (pokemon.name === "Snorlax") {
            wrapper.style.zIndex = 30;
        }

        const image = document.createElement("img");
        image.src = pokemon.src;
        image.alt = "";
        wrapper.appendChild(image);
        elements.pokemonField.appendChild(wrapper);
    });
}

function getAmbientPokemonForCurrentMode() {
    if (currentMode !== "day") {
        return ambientPokemon.night;
    }

    return ambientPokemon.day.concat(getRandomDayWalkers());
}

function getRandomDayWalkers() {
    // Place the four requested Day-mode Pokémon (no overlap) by assigning each a distinct lane
    // Use a deterministic order so the same Pokémon appear but with shuffled visual variety
    const walkers = dayWalkingPokemon.slice();
    // Optionally shuffle their lane assignment while keeping them all present
    const laneOrder = shuffleList([0, 1, 2, 3]);

    return walkers.map(function (pokemon, index) {
        const lane = dayWalkingLanes[laneOrder[index]];
        // force Oshawott and Eevee to walk right and face right; otherwise alternate directions
        let direction;
        if (pokemon.name === "Oshawott" || pokemon.name === "Eevee") {
            direction = "left-to-right";
        } else {
            direction = index % 2 === 0 ? "left-to-right" : "right-to-left";
        }
        const facing = direction === "left-to-right" ? "right" : "left";

        return {
            name: pokemon.name,
            src: pokemon.src,
            movement: "walk",
            size: pokemon.size,
            bottom: lane.bottom,
            speed: lane.speed,
            // spread them out using the lane delay and an additional offset
            delay: `calc(${lane.delay} + ${index * -4}s)`,
            direction,
            flip: pokemon.defaultFacing !== facing
        };
    });
}

function shuffleList(list) {
    return list.slice().sort(function () {
        return Math.random() - 0.5;
    });
}

function switchMode() {
    currentMode = currentMode === "day" ? "night" : "day";
    document.body.classList.toggle("day-mode", currentMode === "day");
    document.body.classList.toggle("night-mode", currentMode === "night");
    elements.dayBackground.classList.toggle("is-active", currentMode === "day");
    elements.nightBackground.classList.toggle("is-active", currentMode === "night");
    elements.modeToggle.textContent = currentMode === "day" ? "DAY MODE" : "NIGHT MODE";
    renderAmbientPokemon();
}

function createFireflies() {
    const field = document.querySelector(".firefly-field");
    const fireflyCount = 22;

    field.innerHTML = "";

    for (let index = 0; index < fireflyCount; index++) {
        const firefly = document.createElement("span");
        firefly.className = "firefly";
        firefly.style.left = Math.random() * 100 + "%";
        firefly.style.top = Math.random() * 100 + "%";
        firefly.style.animationDelay = Math.random() * 5 + "s";
        firefly.style.animationDuration = 4 + Math.random() * 5 + "s";
        field.appendChild(firefly);
    }
}

function renderProjects() {
    elements.projectGrid.innerHTML = "";

    projects.forEach(function (project) {
        const card = document.createElement("article");
        card.className = project.comingSoon ? "project-card uncaught-card" : "project-card";
        card.tabIndex = 0;
        card.dataset.project = project.key;

        const imageMarkup = project.comingSoon
            ? '<div class="unknown-silhouette" aria-hidden="true"></div>'
            : `<img src="${project.image}" alt="${project.name} project image">`;

        const yearMarkup = project.comingSoon
            ? "<p>COMING SOON</p>"
            : `<p class="completed-year">COMPLETED: ${project.completionYear}</p>`;

        const techMarkup = project.comingSoon
            ? ""
            : `<p class="developed-with">DEVELOPED WITH: ${project.technologies.join(", ")}</p>`;

        card.innerHTML = `
            <div class="project-number">#${String(project.id).padStart(3, "0")}</div>
            <div class="pokedex-mini-screen">${imageMarkup}</div>
            <div class="project-divider" aria-hidden="true"></div>
            <div class="project-card-content">
                <h3>${project.comingSoon ? "UNKNOWN" : project.name}</h3>
                <span class="badge ${project.comingSoon ? "coming" : "completed"}">${project.status}</span>
                ${yearMarkup}
                ${techMarkup}
            </div>
            <span class="open-dex">OPEN DEX</span>
        `;

        card.addEventListener("click", function () {
            selectProject(card, project.key);
        });

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectProject(card, project.key);
            }
        });

        elements.projectGrid.appendChild(card);
    });
}

function selectProject(card, projectKey) {
    document.querySelectorAll(".project-card").forEach(function (projectCard) {
        projectCard.classList.remove("selected");
    });

    card.classList.add("selected");
    playSound(audio.project);

    window.setTimeout(function () {
        card.classList.remove("selected");
        openProject(projectKey);
    }, 160);
}

function openProject(projectKey) {
    const project = projects.find(function (entry) {
        return entry.key === projectKey;
    });

    if (!project) {
        return;
    }

    elements.modalNumber.textContent = `POKEDEX ENTRY #${String(project.id).padStart(3, "0")}`;
    elements.githubButton.hidden = true;
    elements.copyLinkButton.hidden = true;
    elements.copyLinkButton.dataset.copyValue = "";
    elements.copyLinkButton.textContent = "COPY GITHUB LINK";

    if (project.comingSoon) {
        renderUnknownProject(project);
    } else {
        renderCompletedProject(project);
    }

    elements.projectModal.classList.add("show");
    elements.projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function renderCompletedProject(project) {
    elements.modalImage.innerHTML = `<img src="${project.image}" alt="${project.name} project image">`;
    elements.modalTitle.textContent = project.name;
    elements.modalFacts.innerHTML = `
        <div><strong>STATUS</strong>${project.status}</div>
        <div><strong>COMPLETED</strong>${project.completionYear}</div>
        <div><strong>ROLE</strong>${project.role}</div>
        <div><strong>DEVELOPED WITH</strong>${project.technologies.join(", ")}</div>
    `;
    elements.modalDescription.innerHTML = `<h3>DESCRIPTION</h3><p>${project.description}</p>`;
    elements.modalFeatures.innerHTML = `
        <h3>FEATURES</h3>
        <ul>${project.features.map(function (feature) {
            return `<li>${feature}</li>`;
        }).join("")}</ul>
    `;
    elements.modalLessons.innerHTML = `<h3>WHAT I LEARNED</h3><p>${project.lessons}</p>`;

    if (project.github) {
        elements.githubButton.href = project.github;
        elements.githubButton.hidden = false;
        elements.copyLinkButton.hidden = false;
        elements.copyLinkButton.dataset.copyValue = project.github;
    }
}

function renderUnknownProject(project) {
    elements.modalImage.innerHTML = '<div class="unknown-silhouette" aria-hidden="true"></div>';
    elements.modalTitle.textContent = "UNKNOWN";
    elements.modalFacts.innerHTML = `
        <div><strong>STATUS</strong>${project.status}</div>
        <div><strong>DATA</strong>Unavailable</div>
        <div><strong>ENTRY</strong>Coming Soon</div>
    `;
    elements.modalDescription.innerHTML = `
        <h3>DATA</h3>
        <p>This project entry has not been unlocked yet.</p>
    `;
    elements.modalFeatures.innerHTML = "<h3>COMING SOON</h3><p>Project data will unlock when development is ready.</p>";
    elements.modalLessons.innerHTML = "";
}

function closeProject() {
    elements.projectModal.classList.remove("show");
    elements.projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function renderTrainerSkills() {
    elements.trainerSkills.innerHTML = "";

    trainerSkills.forEach(function (skill) {
        const button = document.createElement("button");
        button.className = "skill-button";
        button.type = "button";
        button.style.setProperty("--skill-level", skill.level + "%");
        button.setAttribute("aria-label", `${skill.name} skill rating ${skill.stars}`);
        button.innerHTML = `
            <span class="skill-name">${skill.name}</span>
            <span class="skill-meter"><span></span></span>
            <span class="skill-rating">${skill.stars}</span>
        `;

        elements.trainerSkills.appendChild(button);
    });
}

function openTrainerProfile() {
    playSound(audio.trainer);
    elements.trainerModal.classList.add("show");
    elements.trainerModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeTrainerProfile() {
    elements.trainerModal.classList.remove("show");
    elements.trainerModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function enterDex() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function runStartupScreen() {
    let progress = 0;
    let pageReady = false;

    function updateProgress() {
        const target = pageReady ? 100 : 88;
        const step = pageReady ? 8 : 4;

        progress = Math.min(target, progress + Math.random() * step);
        elements.loadingBar.style.width = progress + "%";

        if (progress >= 100) {
            elements.loadingText.textContent = "READY";
            elements.startButton.textContent = "PRESS ENTER";
            elements.startButton.disabled = false;

            if (!loadingSoundPlayed) {
                loadingSoundPlayed = true;
                playSound(audio.loading);
            }

            return;
        }

        window.setTimeout(updateProgress, 120);
    }

    window.setTimeout(function () {
        pageReady = true;
    }, 900);

    if (document.readyState === "complete") {
        pageReady = true;
    } else {
        window.addEventListener("load", function () {
            pageReady = true;
        });
    }

    updateProgress();
}

function enterMainWebsite() {
    if (elements.startButton.disabled) {
        return;
    }

    elements.startupScreen.classList.add("hide");
    document.body.classList.remove("is-loading");
    toggleBackgroundMusic(true);

    window.setTimeout(function () {
        elements.startupScreen.setAttribute("aria-hidden", "true");
    }, 700);
}

function watchSections() {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll(".nav-links a");
    let currentSection = "home";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    links.forEach(function (link) {
        const matchesCurrent = link.getAttribute("href") === "#" + currentSection;
        link.classList.toggle("active", matchesCurrent);
    });
}

function moveEnvironment(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const layers = document.querySelectorAll(".background-set.is-active .bg-layer");
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    layers.forEach(function (layer) {
        const depth = Number(layer.dataset.depth);
        const amount = depth * 18;
        layer.style.transform = `translate3d(${x * amount}px, ${y * amount}px, 0)`;
    });
}

function closeMobileMenu() {
    elements.navLinks.classList.remove("open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
}

document.querySelectorAll("[data-close-project]").forEach(function (button) {
    button.addEventListener("click", closeProject);
});

document.querySelectorAll("[data-close-trainer]").forEach(function (button) {
    button.addEventListener("click", closeTrainerProfile);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProject();
        closeTrainerProfile();
    }

    if (event.key === "Enter" && !elements.startButton.disabled && document.body.classList.contains("is-loading")) {
        enterMainWebsite();
    }
});

elements.menuToggle.addEventListener("click", function () {
    const isOpen = elements.navLinks.classList.toggle("open");
    elements.menuToggle.setAttribute("aria-expanded", isOpen.toString());
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        closeMobileMenu();
    });
});

elements.trainerNavLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("trainer").scrollIntoView({
        behavior: "smooth"
    });
    window.setTimeout(openTrainerProfile, 250);
});

elements.openTrainerProfile.addEventListener("click", openTrainerProfile);
elements.modeToggle.addEventListener("click", switchMode);
elements.musicToggle.addEventListener("click", function () {
    toggleBackgroundMusic();
});
elements.startButton.addEventListener("click", enterMainWebsite);
elements.copyLinkButton.addEventListener("click", function () {
    const link = elements.copyLinkButton.dataset.copyValue;

    if (!link) {
        return;
    }

    navigator.clipboard.writeText(link).then(function () {
        elements.copyLinkButton.textContent = "COPIED";
    }).catch(function () {
        elements.copyLinkButton.textContent = link;
    });
});

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("mousemove", moveEnvironment);

renderBackgroundLayers();
renderAmbientPokemon();
createFireflies();
renderProjects();
renderTrainerSkills();
watchSections();
updateActiveNav();
updateMusicButton();
runStartupScreen();
