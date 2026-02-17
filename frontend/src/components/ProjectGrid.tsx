import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import { getProjects } from '../api/client';

const ProjectGrid = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <section className="py-20 mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                SELECTED WORK <span className="text-sm font-normal text-slate-500 px-3 py-1 border border-slate-700 rounded-full">2024 - 2026</span>
            </h2>

            {loading ? (
                <div className="text-center py-20 text-slate-500">Loading projects...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectGrid;
