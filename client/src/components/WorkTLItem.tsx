import { motion } from 'framer-motion';

interface TimeLineItemProps {
    title: string | null;
    company: string | null;
    date: string | null;
    description: string[];
};

const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, x: 0, 
        transition: { 
            duration: 0.6,
            staggerChildren: 0.7 
        } 
    }
};

const WorkTLItem = ({ title, company, date, description}: TimeLineItemProps) => {
    return (
        <motion.li
            className="mb-8 relative pl-8 border-l-2 border-gray-300"
            variants={itemVariants}
        >
            <span className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -left-[7px] border-4 border-white"></span>

            <h3 className="text-xl font-bold mt-1">{title}</h3>
            <p className="text-lg italic text-gray-600">{company}</p>
            <p className="text-sm font-semibold uppercase text-gray-500 mb-2">{date}</p>

            <ul className="list-disc ml-5 mt-2 space-y-1">
                {description.map((description, index) => (
                    <li 
                    key={index}
                    className = "text-gray-600 text-md"
                    >
                        {description}
                    </li>
                ))}
            </ul>
        </motion.li>
    );
}

export default WorkTLItem;