import { FaReact, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiJavascript, SiMongodb, SiExpress, SiFastapi, SiGooglegemini } from 'react-icons/si';
import type { IconType } from 'react-icons';

export const TechIconMap: Record<string, IconType> = {
    React: FaReact,
    NodeJS: FaNodeJs,
    Python: FaPython,
    Typescript: SiTypescript,
    Javascript: SiJavascript,    
    TailwindCSS: SiTailwindcss,
    MongoDB: SiMongodb,
    Express: SiExpress,
    FastAPI: SiFastapi,
    PostgreSQL: SiPostgresql,
    Github: FaGithub,
    Gemini: SiGooglegemini
};

export const getTechIcon = (tech: string) => {
    const IconComponent = TechIconMap[tech];
    if (!IconComponent) return null;
    return <IconComponent size={25} className="text-gray-700"/>;
}

export default { TechIconMap, getTechIcon };