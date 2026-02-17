import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import Background from '../components/Background';
import CustomCursor from '../components/CustomCursor';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-pink-500/30 overflow-x-hidden cursor-none"> {/* Hide default cursor */}
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
                <div className="flex gap-8 text-sm font-medium tracking-wide z-50 hidden md:flex">
                    <Link
                        to="/"
                        className="hover:text-pink-500 transition-colors cursor-none"
                        onClick={() => toast("Explorando Trabajos")}
                    >
                        TRABAJOS
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-pink-500 transition-colors cursor-none"
                        onClick={() => toast("Conociendo más sobre mí")}
                    >
                        SOBRE MÍ
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-pink-500 transition-colors cursor-none"
                        onClick={() => toast("Vamos a contactar")}
                    >
                        CONTACTO
                    </Link>
                </div>
                {/* Mobile Menu Button  */}
                <div className="md:hidden z-50">
                    <Link to="/contact" className="text-sm cursor-none">MENÚ</Link>
                </div>
            </motion.nav>

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
