import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactMessage } from '../api/client';
import { toast } from 'sonner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        const promise = sendContactMessage(formData);

        toast.promise(promise, {
            loading: 'Enviando mensaje...',
            success: (success) => {
                if (success) {
                    setStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                    return '¡Mensaje enviado con éxito! Te responderé pronto.';
                } else {
                    throw new Error("Failed");
                }
            },
            error: () => {
                setStatus('error');
                return 'Algo salió mal. Por favor intenta de nuevo.';
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto space-y-8 p-8 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 pointer-events-none" />

            <div className="relative space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-pink-500 tracking-widest ml-1">NOMBRE</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="¿Cómo te llamas?"
                    className="w-full bg-slate-950/50 border-b-2 border-slate-700 rounded-t-lg px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500 transition-all duration-300"
                />
            </div>

            <div className="relative space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-pink-500 tracking-widest ml-1">CORREO</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full bg-slate-950/50 border-b-2 border-slate-700 rounded-t-lg px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500 transition-all duration-300"
                />
            </div>

            <div className="relative space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-pink-500 tracking-widest ml-1">MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full bg-slate-950/50 border-b-2 border-slate-700 rounded-t-lg px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-pink-500 transition-all duration-300 resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-slate-100 text-slate-900 font-bold py-5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-white/5 relative overflow-hidden"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                        <>ENVIANDO <span className="animate-pulse">...</span></>
                    ) : (
                        <>ENVIAR MENSAJE <span className="text-xl">→</span></>
                    )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300" />
            </button>
        </motion.form>
    );
};

export default ContactForm;
