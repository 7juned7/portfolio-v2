const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ParticleArray = [];
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: null,
    y: null
}
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 2; i++) {

        ParticleArray.push(new Particle());
    }

})
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {

        ParticleArray.push(new Particle());
    }

})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {

        ctx.strokeStyle = "red"
        ctx.lineWidth = 1
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.stroke();
        ctx.fill();
    }
}


function handleParticles() {
    for (let i = 0; i < ParticleArray.length; i++) {
        ParticleArray[i].update();
        ParticleArray[i].draw();

        for (let j = i; j < ParticleArray.length; j++) {
            const dx = ParticleArray[i].x - ParticleArray[j].x;
            const dy = ParticleArray[i].y - ParticleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.lineWidth = .05
                ctx.moveTo(ParticleArray[i].x, ParticleArray[i].y);
                ctx.lineTo(ParticleArray[j].x, ParticleArray[j].y);
                ctx.stroke();
            }
        }
        if (ParticleArray[i].size <= 0.3) {
            ParticleArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate)
}
animate();
