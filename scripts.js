const animalImages = [
    "animals/cappybara1.jpeg", "animals/cat1.png", "animals/cat2.jpeg",
    "animals/cat3.jpeg", "animals/dog1.jpeg", "animals/dog2.jpg",
    "animals/dog3.jpeg", "animals/racoon1.jpeg"
];

let hoverCount = parseInt(localStorage.getItem('hoverCount')) || 0;

function playBackgroundMusic() {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.play().catch(error => console.log("Audio play blocked:", error));
    }
}

function renderWelcomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div id="welcome-content" style="text-align: center; padding: 50px;">
            <h1 style="font-size: 2.5rem; color: #ff4081; font-family: Arial, sans-serif;">
                Welcome to the Ultimate Valentine’s Day Question! What the fuck! 💖
            </h1>

            <button id="enter-button" class="btn enter" style="margin-top: 30px;">
                Enter Page
            </button>
        </div>
    `;

    document.getElementById('enter-button').addEventListener('click', () => {
        renderMainPage();
        playBackgroundMusic();
    });
}

function renderMainPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div id="main-content">
            <h1 class="container">I see that you didn't post on Valentines... wanna change that ❤️</h1>
            <div class="sub-container">
                <button class="btn yes" onclick="renderYesPage()">Yes</button>
                <button class="btn no" onmouseover="moveNoButton()">No</button>
            </div>
        </div>
        <img id="random-animal" src="" class="hidden" alt="Random Animal">
    `;
}

function renderYesPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
            <img src="https://media1.tenor.com/m/CNI1fSM1XSoAAAAd/shocked-surprised.gif" alt="Celebration GIF" style="width: 300px; margin-top: 20px;">
            <h1 style="font-size: 3rem; color: #ff4081; font-family: Arial, sans-serif;">Hooray! 🎉</h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeh-v9wkMX5CcgHe26NhjVhDLtXhFNVc94KllbRbdNTngcCZg/viewform?usp=header"
               target="_blank"
               style="display: block; margin-top: 20px; font-size: 1.5rem; color: #007BFF; text-decoration: none; font-weight: bold;">
                Please Submit A Post Game Survey Review Form
            </a>
        </div>
    `;

    const bgMusic = document.getElementById('bg-music');
    const yesSound = document.getElementById('yes-sound');

    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    if (yesSound) {
        yesSound.loop = true;
        yesSound.currentTime = 0;
        yesSound.play().catch(error => console.log("Audio play blocked:", error));
    }
}

function moveNoButton() {
    const noSound = document.getElementById('no-sound');
    if (noSound) {
        noSound.currentTime = 0;
        noSound.play().catch(error => console.log("Audio play blocked:", error));
    }

    const noButton = document.querySelector('.no');
    if (noButton) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    if (hoverCount === 0) {
        playBackgroundMusic();
    }

    hoverCount++;
    localStorage.setItem('hoverCount', hoverCount);

    if (hoverCount % 3 === 1) {
        showRandomAnimal();
    }
}

function showRandomAnimal() {
    const img = document.getElementById('random-animal');
    if (img) {
        const randomIndex = Math.floor(Math.random() * animalImages.length);
        img.src = animalImages[randomIndex];
        img.classList.remove('hidden');

        setTimeout(() => {
            img.style.opacity = '0';
            setTimeout(() => {
                img.classList.add('hidden');
                img.style.opacity = '1';
            }, 500);
        }, 500);
    }
}

window.onload = () => {
    renderWelcomePage();
};
