document.querySelector('.button[href="#more"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#more').scrollIntoView({ behavior: 'smooth' });
});

const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2, // Ukuran bintang acak
        speedX: (Math.random() - 0.5) * 0.5, // Gerakan horizontal
        speedY: (Math.random() - 0.5) * 0.5, // Gerakan vertikal
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update posisi bintang
        star.x += star.speedX;
        star.y += star.speedY;

        // Jika keluar dari layar, pindahkan ke sisi yang lain
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
    });

    requestAnimationFrame(drawStars);
}

// Jalankan animasi
drawStars();

// Pastikan canvas menyesuaikan ukuran saat jendela diubah
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

