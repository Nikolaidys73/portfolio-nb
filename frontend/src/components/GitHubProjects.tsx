import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    language: string;
    stargazers_count: number;
    updated_at: string;
}

const GitHubProjects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Nikolaidys73/repos?sort=updated&direction=desc');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                // Filter out forks if desired, or just take the top 6
                const filteredRepos = data
                    .filter((repo: any) => !repo.fork)
                    .slice(0, 6);
                setRepos(filteredRepos);
            } catch (err) {
                console.error("Error fetching GitHub repos:", err);
                setError('Could not load projects at this time.');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    if (loading) {
        return <div className="text-center text-slate-500 py-20">Cargando proyectos...</div>;
    }

    if (error) {
        return <div className="text-center text-red-400 py-20">{error}</div>; // Translating basic error
    }

    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-12 text-center"
            >
                ÚLTIMOS PROYECTOS <span className="text-slate-600 text-2xl block mt-2 font-normal">DESDE GITHUB</span>
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {repos.map((repo) => (
                    <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className="group block bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-pink-500/50 transition-colors h-full flex flex-col"
                        onClick={() => toast(`Abriendo ${repo.name} en GitHub...`)}
                    >
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold group-hover:text-pink-400 transition-colors break-words">
                                    {repo.name}
                                </h3>
                                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                                    {new Date(repo.updated_at).getFullYear()}
                                </span>
                            </div>

                            <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                                {repo.description || "Sin descripción disponible."}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {repo.language && (
                                    <span className="text-xs font-medium text-purple-300 bg-purple-900/30 px-2 py-1 rounded">
                                        {repo.language}
                                    </span>
                                )}
                                {repo.topics && repo.topics.slice(0, 3).map(topic => (
                                    <span key={topic} className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            <div className="text-center mt-12">
                <a
                    href="https://github.com/Nikolaidys73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-slate-600 rounded-full hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
                >
                    VER TODO EN GITHUB
                </a>
            </div>
        </section>
    );
};

export default GitHubProjects;
