import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section className="min-h-[80vh] pt-28 pb-20 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Creative Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl px-4 relative z-10"
            >
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-400 drop-shadow-sm"
                    >
                        CONECTEMOS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        ¿Tienes una idea innovadora o buscas colaborar? <br className="hidden md:block" />
                        Estoy listo para escuchar tu propuesta.
                    </motion.p>
                </div>

                {/* Social Cards Section - Now Above Form */}
                <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
                    <motion.a
                        href="https://www.linkedin.com/in/nicolasbasilico"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 p-6 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/30 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/60 transition-all cursor-pointer group backdrop-blur-sm"
                    >
                        <div className="p-3 bg-[#0077b5] rounded-xl shadow-lg shadow-[#0077b5]/20 group-hover:shadow-[#0077b5]/40 transition-shadow">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">LinkedIn</span>
                            <span className="text-white font-medium group-hover:text-[#0077b5] transition-colors">/in/nicolasbasilico</span>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#0077b5]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </motion.a>

                    <motion.a
                        href="mailto:nicolasbasilico@gmail.com"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/60 transition-all cursor-pointer group backdrop-blur-sm"
                    >
                        <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-bold tracking-wider uppercase">Email</span>
                            <span className="text-white font-medium group-hover:text-red-400 transition-colors">nicolasbasilico@...</span>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-red-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </motion.a>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-700/50"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-[#0f172a] text-sm text-slate-500 font-medium">O escríbeme directamente aquí</span>
                    </div>
                </div>

                <div className="mt-12">
                    <ContactForm />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
