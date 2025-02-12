
let hoverCount = 0;
const animalImages = ["animals/cappybara1.jpeg", "animals/cat1.png", "animals/cat2.jpeg", "animals/cat3.jpeg", "animals/dog1.jpeg", "animals/dog2.jpg", "animals/dog3.jpeg","animals/racoon1.jpeg"];
document.addEventListener("DOMContentLoaded", () => {
    hoverCount = parseInt(localStorage.getItem('hoverCount')) || 0;
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.loop = true;
        bgMusic.play().catch(error => console.log("Audio play blocked:", error));
    }
});




function showLove() {
    const yesSound = document.getElementById('yes-sound');
    const bgMusic = document.getElementById('bg-music');

    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    if (yesSound) {
        yesSound.loop = true; 
        yesSound.currentTime = 0;
        yesSound.play().catch(error => console.log("Audio play blocked:", error));
    }

    document.getElementById("main-content").classList.add("hidden-hidden");
    
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.textAlign = 'center';

    const gif = document.createElement('img');
    gif.src = "https://media1.tenor.com/m/CNI1fSM1XSoAAAAd/shocked-surprised.gif"
    gif.alt = 'Celebration GIF';
    gif.style.width = '300px';
    gif.style.marginTop = '20px';

    const message = document.createElement('h1');
    message.textContent = 'Hooray! 🎉';
    message.style.fontSize = '3rem';
    message.style.color = '#ff4081';
    message.style.fontFamily = 'Arial, sans-serif';

    const link = document.createElement('a');
    link.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeh-v9wkMX5CcgHe26NhjVhDLtXhFNVc94KllbRbdNTngcCZg/viewform?usp=header'; // Change this to your actual Google Docs link
    link.textContent = 'Please Submit A Post Game Survey Review Form';
    link.target = '_blank';
    link.style.display = 'block';
    link.style.marginTop = '20px';
    link.style.fontSize = '1.5rem';
    link.style.color = '#007BFF';
    link.style.textDecoration = 'none';
    link.style.fontWeight = 'bold';

    
    container.appendChild(gif);
    container.appendChild(message);
    container.appendChild(link);

    document.body.appendChild(container);

}

function moveNoButton() {

    const noSound = document.getElementById('no-sound');

    if (noSound) {
        noSound.currentTime = 0;
        noSound.play().catch(error => console.log("Audio play blocked:", error));
    }

    const noButton = document.querySelector('.no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    

    
    hoverCount++;
    localStorage.setItem('hoverCount', hoverCount);
    if (hoverCount % 3 == 1) {
        showRandomAnimal();
    }
}

function showRandomAnimal() {
    const img = document.getElementById('random-animal');
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

window.onload = () => {
    hoverCount = parseInt(localStorage.getItem('hoverCount')) || 0;
};
