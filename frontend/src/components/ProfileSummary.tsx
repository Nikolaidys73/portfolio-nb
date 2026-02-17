import { motion } from 'framer-motion';

const ProfileSummary = () => {
    return (
        <section className="py-20 px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-slate-800/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden"
            >
                {/* Decorative background element */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-xl shadow-pink-500/10">
                                <img
                                    src="/profile.jpg"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = "src/assets/profile_placeholder.svg";
                                    }}
                                    alt="Nicolas Andres Basilico"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                NICOLAS ANDRES BASILICO
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">42 Años</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">Argentina</span>
                        </div>

                        <p className="text-slate-300 leading-relaxed text-lg">
                            Soy un apasionado total de la tecnología. Más allá del desarrollo web,
                            tengo formación y curiosidad constante en <span className="text-white font-medium">Sysadmin</span>, <span className="text-white font-medium">Ciberseguridad</span> y
                            muchas otras ramas por puro placer y curiosidad técnica.
                        </p>

                        <p className="text-slate-400">
                            Me defino no solo por el código que escribo, sino por la profundidad con la que entiendo
                            los sistemas en los que se ejecuta. Busco crear soluciones que sean seguras,
                            eficientes y, sobre todo, impactantes.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col gap-4">
                        <h3 className="text-sm font-bold tracking-widest text-slate-500 mb-2">ÁREAS DE INTERÉS</h3>
                        {['Full Stack Development', 'SysAdmin & DevOps', 'Ciberseguridad', 'Arquitectura de Software'].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-pink-500/30 transition-colors"
                            >
                                <span className="font-medium text-slate-200">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProfileSummary;
