import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-[80vh] pt-20 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto px-6 relative z-10"
            >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left Column: Title and Image */}
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold tracking-tighter"
                        >
                            SOBRE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">MÍ.</span>
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-2xl rotate-6 opacity-50 blur-sm"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                                <img
                                    src="/profile.jpg"
                                    alt="Nicolas Basilico"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://ui-avatars.com/api/?name=Nicolas+Basilico&background=0D8ABC&color=fff";
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-2/3 space-y-8 pt-4">
                        <motion.div variants={itemVariants} className="prose prose-invert prose-lg text-slate-300 leading-relaxed">
                            <p>
                                <span className="text-white font-semibold text-xl">Hola, soy Nicolas.</span> Un apasionado por la tecnología de 42 años que nunca deja de aprender.
                            </p>
                            <p>
                                Mi viaje en el mundo digital es poco convencional. No me quedo solo en el desarrollo web; mi curiosidad me ha llevado a explorar profundamente la
                                <span className="text-pink-400"> administración de sistemas</span> y la <span className="text-purple-400">ciberseguridad</span>.
                            </p>
                            <p>
                                Creo firmemente que un buen desarrollador debe entender dónde corre su código. Esta visión integral me permite construir aplicaciones en
                                <span className="text-white"> .NET y React</span> que no solo son bonitas, sino robustas, seguras y eficientes.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-pink-500/20 transition-colors shadow-xl">
                            <h3 className="text-sm font-bold tracking-widest text-slate-500 mb-6 uppercase">Arsenal Tecnológico</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Vite', '.NET 9', 'C#', 'SQL Server', 'Docker', 'Linux', 'Security+', 'Azure'].map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-200 border border-slate-700 hover:border-pink-500/50 hover:bg-slate-800 transition-all cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
