import {motion} from 'framer-motion';
import { ProjectCard } from '../components';

const Projects = [
    {
        title: 'PraxAssist',
        description: '',
        imageUrl: '',
        altText: 'PraxAssist Logo',
        colorAccent: '',
        projectUrl: '',
        repoUrl: 'https://github.com/gregory-dort/prax-assist',
        techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'TailwindCSS', 'Javascript']
    },
    {
        title: 'Prep Time Scheduler',
        description: '',
        imageUrl: '',
        altText: 'Prep Time Logo',
        colorAccent: '',
        projectUrl: '',
        repoUrl: 'https://github.com/gregory-dort/prep-time',
        techStack: ['React', 'Express', 'NodeJS', 'PostgreSQL', 'TailwindCSS', 'Typescript']
    },
    {
        title: 'Financial Planner',
        description: '',
        imageUrl: '',
        altText: 'Financial Planner Logo',
        colorAccent: '',
        projectUrl: '',
        repoUrl: 'https://github.com/gregory-dort/fin-app',
        techStack: ['React', 'FastAPI', 'NodeJS', 'PostgreSQL', 'TailwindCSS', 'Javascript', 'Python']
    }
]

const Project = () => {
    const handleProjectSelect = (title: string) => {
        console.log(`Selected project: ${title}`);
    };

    return (
        <div id = "project" className = "min-h-[100vh]">
            <h1 className = "text-6xl font-serif mb-16 text-center">The Project Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for cool effect
                    >
                        <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        altText={project.altText}
                        colorAccent={project.colorAccent}
                        projectUrl={project.projectUrl}
                        repoUrl={project.repoUrl}
                        techStack={project.techStack}
                        onSelect={() => handleProjectSelect(project.title)}
                    />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;