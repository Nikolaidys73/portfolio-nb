import { useState } from 'react';
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
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">NOMBRE</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">CORREO</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
        </form>
    );
};

export default ContactForm;
