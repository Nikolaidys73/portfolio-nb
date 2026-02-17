import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800 cursor-pointer"
        >
            {/* Media Background */}
            {project.videoUrl ? (
                <video
                    src={project.videoUrl}
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
            ) : (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold px-2 py-1 bg-white/10 backdrop-blur-md rounded-full text-pink-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                </p>
                <motion.div
                    className="w-full h-1 bg-pink-500 mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
