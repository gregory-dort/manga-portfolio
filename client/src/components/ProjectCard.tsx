import {motion} from 'framer-motion';

type ProjectCardProps = {
    title: string;
    description: string;

    imageUrl: string;
    altText: string;
    colorAccent: string;

    projectUrl: string;
    repoUrl: string;

    techStack: string[];
    onSelect: () => void;
};

const ProjectCard = ({
    title, description, imageUrl, altText, colorAccent, projectUrl, repoUrl, techStack, onSelect
}: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-200 p-6 cursor-pointer relative overflow-hidden bg-white group"
            onClick={onSelect}
        >
            <div className = "mb-4">
                <img
                    src={imageUrl}
                    alt={altText}
                    className = "w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <h3 className={`text-xl font-bold mb-1 ${colorAccent}`}>
                {title}
            </h3>

            <p className="text-gray-600 mb-4 text-sm">{description}</p>

            <div className="flex flex-wrap gap-2 text-xs">
                {techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

export default ProjectCard;