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
        <section className="min-h-[80vh] pt-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold mb-12"
                >
                    SOBRE <span className="text-slate-600">MÍ.</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={itemVariants} className="space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            Hola, soy Nicolas Andres Basilico, un desarrollador apasionado de 42 años.
                            Mi viaje en la tecnología no se limita solo al código; abarca desde la administración de sistemas (Sysadmin)
                            hasta la ciberseguridad, áreas en las que me he formado por puro gusto y curiosidad.
                        </p>
                        <p>
                            Combino esta visión técnica profunda con el desarrollo moderno en .NET y React para crear
                            soluciones que no solo funcionan, sino que son seguras y escalables desde su concepción.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold mb-6 text-white">TECNOLOGÍAS</h3>
                        <div className="flex flex-wrap gap-3">
                            {['React', '.NET 8', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Azure', 'SysAdmin', 'Ciberseguridad'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-pink-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
