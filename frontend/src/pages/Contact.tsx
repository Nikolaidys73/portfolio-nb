import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section className="min-h-[80vh] pt-20 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500">
                        ME GUSTARÍA<br />CONOCERTE MÁS
                    </h1>
                    <p className="text-slate-400 text-lg">
                        ¿Tienes un proyecto en mente? ¿Buscas un socio? <br />
                        Envíame un mensaje y creemos algo increíble.
                    </p>
                </div>
                <ContactForm />
            </motion.div>
        </section>
    );
};

export default Contact;
