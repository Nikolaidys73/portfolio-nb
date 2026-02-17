import { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const particles: Particle[] = [];
        const properties = {
            bgColor: 'rgba(15, 23, 42, 1)', // match slate-900
            particleColor: 'rgba(236, 72, 153, 0.5)', // pink-500
            particleRadius: 3,
            particleCount: 60,
            lineLength: 150,
            particleLife: 6,
        };

        class Particle {
            x: number;
            y: number;
            velocityX: number;
            velocityY: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX = (Math.random() - 0.5) * 0.5;
                this.velocityY = (Math.random() - 0.5) * 0.5;
            }

            position() {
                this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
                this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
                this.x += this.velocityX;
                this.y += this.velocityY;
            }

            reDraw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;
                ctx.fill();
            }
        }

        const reDrawBackground = () => {
            ctx.fillStyle = properties.bgColor;
            ctx.fillRect(0, 0, w, h);
        }

        const reDrawParticles = () => {
            for (const i in particles) {
                particles[i].position();
                particles[i].reDraw();
            }
        }

        const drawLines = () => {
            let x1, y1, x2, y2, length, opacity;
            for (const i in particles) {
                for (const j in particles) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = particles[j].x;
                    y2 = particles[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    if (length < properties.lineLength) {
                        opacity = 1 - length / properties.lineLength;
                        ctx.lineWidth = 0.5;
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // purple-500
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < properties.particleCount; i++) {
                particles.push(new Particle());
            }
            loop();
        }

        const loop = () => {
            reDrawBackground();
            reDrawParticles();
            drawLines();
            requestAnimationFrame(loop);
        }

        init();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default Background;
