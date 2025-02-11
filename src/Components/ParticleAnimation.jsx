import React, { useRef, useEffect } from 'react';

const ParticleAnimation = () => {
    const canvasRef = useRef(null);
    const ParticleArray = useRef([]);
    const mouse = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);

        canvas.addEventListener('click', (event) => {
            mouse.current.x = event.x;
            mouse.current.y = event.y;
            for (let i = 0; i < 1; i++) {
                ParticleArray.current.push(new Particle());
            }
        });

        canvas.addEventListener('mousemove', (event) => {
            mouse.current.x = event.x;
            mouse.current.y = event.y;
            for (let i = 0; i < 2; i++) {
                ParticleArray.current.push(new Particle());
            }
        });

        class Particle {
            constructor() {
                this.x = mouse.current.x;
                this.y = mouse.current.y;
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
                ctx.strokeStyle = "red";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.fill();
            }
        }

        const handleParticles = () => {
            for (let i = 0; i < ParticleArray.current.length; i++) {
                ParticleArray.current[i].update();
                ParticleArray.current[i].draw();

                for (let j = i; j < ParticleArray.current.length; j++) {
                    const dx = ParticleArray.current[i].x - ParticleArray.current[j].x;
                    const dy = ParticleArray.current[i].y - ParticleArray.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = "red";
                        ctx.lineWidth = 0.05;
                        ctx.moveTo(ParticleArray.current[i].x, ParticleArray.current[i].y);
                        ctx.lineTo(ParticleArray.current[j].x, ParticleArray.current[j].y);
                        ctx.stroke();
                    }
                }

                if (ParticleArray.current[i].size <= 0.3) {
                    ParticleArray.current.splice(i, 1);
                    i--;
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = "rgba(0,0,0,.5)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ display: 'block' }} className="absolute top-0 left-0 bottom-0 right-0 z-10" />;
};

export default ParticleAnimation;
