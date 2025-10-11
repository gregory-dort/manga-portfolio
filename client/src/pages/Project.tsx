import { ProjectCard } from '../components';

const Projects = [
    {
        title: '',
        description: '',
        imageUrl: '',
        altText: '',
        colorAccent: '',
        projectUrl: '',
        repoUrl: '',
        techStack: []
    },
    {
        title: '',
        description: '',
        imageUrl: '',
        altText: '',
        colorAccent: '',
        projectUrl: '',
        repoUrl: '',
        techStack: []
    },
    {
        title: '',
        description: '',
        imageUrl: '',
        altText: '',
        colorAccent: '',
        projectUrl: '',
        repoUrl: '',
        techStack: []
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
                ))}
            </div>
        </div>
    );
}

export default Project;