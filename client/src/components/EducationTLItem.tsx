import { motion } from 'framer-motion';

interface TimeLineItemProps {
    school: string | null;
    major: string | null;
    minor: string | null;
    date: string | null;
    involvement: string | null;
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

const WorkTLItem = ({ school, major, minor, date, involvement}: TimeLineItemProps) => {
    return (
        <motion.li
            className="mb-8 relative pl-8 border-l-2 border-gray-300"
            variants={itemVariants}
        >
            <span className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -left-[7px] border-4 border-white"></span>

            <h3 className="text-xl font-bold mt-1">{school}</h3>
            <p className="text-lg italic text-gray-600">{major}</p>
            <p className="text-lg italic text-gray-600">{minor}</p>
            <p className="text-sm font-semibold uppercase text-gray-500 mb-2">{date}</p>
            <p className="text-gray-600 text-md">{involvement}</p>
        </motion.li>
    );
}

export default WorkTLItem;