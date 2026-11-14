// 1. Crear estrellas aleatorias en el fondo.
const starLayer = document.querySelector('.stars');

for (let i = 0; i < 150; i++) {
  const star = document.createElement('span');
  star.className = 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 4}s`;
  star.style.animationDuration = `${2 + Math.random() * 4}s`;
  starLayer.appendChild(star);
}

// 2. Abrir y cerrar la carta.
const letterButton = document.querySelector('#letterButton');
const letterText = document.querySelector('#letterText');
const letterButtonText = document.querySelector('#letterButtonText');

letterButton.addEventListener('click', () => {
  const isHidden = letterText.classList.toggle('hidden');
  letterButton.setAttribute('aria-expanded', String(!isHidden));
  letterButtonText.textContent = isHidden ? 'Abrir mi carta' : 'Cerrar mi carta';
});

// 3. Mostrar los mensajes secretos de las estrellas.
const secretMessage = document.querySelector('#secretMessage');
document.querySelectorAll('.secret-star').forEach((star) => {
  star.addEventListener('click', () => {
    secretMessage.textContent = star.dataset.message;
  });
});
// REPRODUCTOR DE YOUTUBE
const YOUTUBE_URL = "https://youtu.be/izToCCeLnNA?si=Bg385jh_6yEhBsqG";

const playMusic = document.querySelector("#playMusic");
const youtubePlayer = document.querySelector("#youtubePlayer");

if (playMusic && youtubePlayer) {
    playMusic.addEventListener("click", () => {
        const url = new URL(YOUTUBE_URL);
        const videoId = url.hostname.includes("youtu.be")
            ? url.pathname.slice(1)
            : url.searchParams.get("v");

        if (!videoId) {
            alert("No se pudo encontrar la canción.");
            return;
        }

        youtubePlayer.innerHTML = `
       <iframe
        width="100%"
        height="220"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        title="Nuestra canción"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
       </iframe>
        `;

        playMusic.textContent = "Nuestra canción está sonando ♡";
    });
}
// DECORACIONES FLOTANTES
const decorations = ["💜", "⭐", "🌙", "🩷", "❤️", "✨", "🎵", "💜"];

decorations.forEach((emoji, index) => {
    const element = document.createElement("div");

    element.className = "floating-decoration";
    element.textContent = emoji;

    element.style.left = index % 2 === 0 ? "3%" : "93%";
    element.style.top = `${10 + index * 11}%`;
    element.style.animationDelay = `${index * -0.8}s`;
    element.style.animationDuration = `${5 + Math.random() * 4}s`;

    document.body.appendChild(element);
});