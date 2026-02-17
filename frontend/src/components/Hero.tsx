import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import { toast } from 'sonner';
import profilePlaceholder from '../assets/profile_placeholder.svg';

const Hero = () => {
    const [imgSrc, setImgSrc] = useState('/profile.jpg');

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
            >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500/50 shadow-lg shadow-pink-500/20">
                    <img
                        src={imgSrc}
                        onError={() => setImgSrc(profilePlaceholder)}
                        alt="Nicolas Andres Basilico"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-pink-400 font-bold tracking-widest text-sm md:text-base">NICOLAS ANDRES BASILICO</h2>
                    <p className="text-slate-500 text-xs tracking-wider">FULL STACK DEVELOPER</p>
                </div>
            </motion.div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2"
                >
                    CREANDO
                </motion.h1>
            </div>
            <div className="overflow-hidden pt-6 -mt-4 relative z-10">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    EXPERIENCIAS DIGITALES
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="max-w-xl text-lg text-slate-400 mb-12"
            >
                Construyo experiencias web inmersivas utilizando tecnologías modernas como React y .NET.
                Enfocado en el rendimiento, la estética y la interacción del usuario.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="z-50"
            >
                <MagneticButton className="group relative">
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-transparent border border-slate-700 overflow-hidden rounded-full inline-block relative cursor-none"
                        onClick={() => toast.success("¡Excelente decisión! Hablemos.")}
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
                        <span className="relative font-bold tracking-wide group-hover:text-white transition-colors">INICIAR PROYECTO</span>
                    </Link>
                </MagneticButton>
            </motion.div>
        </section>
    );
};

export default Hero;
