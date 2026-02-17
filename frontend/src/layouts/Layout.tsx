import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import Background from '../components/Background';
import CustomCursor from '../components/CustomCursor';

const Layout = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500/30 overflow-x-hidden md:cursor-none"> {/* Hide default cursor only on desktop */}
            <CustomCursor />
            <Background />

            <Toaster
                position="top-center"
                theme="dark"
                toastOptions={{
                    style: {
                        background: 'rgba(30, 41, 59, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        borderRadius: '16px',
                        fontSize: '14px',
                    },
                    className: 'my-toast-class',
                }}
            />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-slate-900/50"
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 group z-50 cursor-none"
                    onClick={() => toast("Volviendo al inicio")}
                >
                    <img src="/nb_logo.svg" alt="NB Logo" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-bold tracking-tighter group-hover:text-pink-500 transition-colors">
                        PORTFOLIO<span className="text-pink-500">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide z-50">
                    <Link
                        to="/"
                        className="hover:text-pink-500 transition-colors cursor-none relative group"
                        onClick={() => toast("Explorando Trabajos")}
                    >
                        INICIO
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-pink-500 transition-colors cursor-none relative group"
                        onClick={() => toast("Conociendo más sobre mí")}
                    >
                        SOBRE MÍ
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-pink-500 transition-colors cursor-none relative group"
                        onClick={() => toast("Vamos a contactar")}
                    >
                        CONTACTO
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button  */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-sm font-bold tracking-widest cursor-none hover:text-pink-500 transition-colors"
                    >
                        MENÚ
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-[60] bg-slate-950 flex flex-col justify-center items-center"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-sm font-bold tracking-widest cursor-none hover:text-pink-500 transition-colors"
                        >
                            CERRAR
                        </button>

                        <div className="flex flex-col gap-8 text-center">
                            <motion.div variants={linkVariants}>
                                <Link
                                    to="/"
                                    className="text-4xl font-bold tracking-tighter hover:text-pink-500 transition-colors cursor-none block"
                                    onClick={() => toast("Explorando Trabajos")}
                                >
                                    INICIO
                                </Link>
                            </motion.div>
                            <motion.div variants={linkVariants}>
                                <Link
                                    to="/about"
                                    className="text-4xl font-bold tracking-tighter hover:text-pink-500 transition-colors cursor-none block"
                                    onClick={() => toast("Conociendo más sobre mí")}
                                >
                                    SOBRE MÍ
                                </Link>
                            </motion.div>
                            <motion.div variants={linkVariants}>
                                <Link
                                    to="/contact"
                                    className="text-4xl font-bold tracking-tighter hover:text-pink-500 transition-colors cursor-none block"
                                    onClick={() => toast("Vamos a contactar")}
                                >
                                    CONTACTO
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={linkVariants}
                            className="absolute bottom-12 text-slate-500 text-sm"
                        >
                            &copy; 2024 Nicolas Basilico
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content with Page Transitions */}
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 pt-28 px-4 md:px-8 max-w-7xl mx-auto min-h-[calc(100vh-100px)]"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Creado por Nicolas Basilico. Construido con React y .NET.
            </footer>
        </div>
    );
};

export default Layout;
