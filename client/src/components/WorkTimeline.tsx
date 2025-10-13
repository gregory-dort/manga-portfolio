import { motion } from 'framer-motion';
import WorkTLItem from './WorkTLItem';

const workData = [
    {
        title: "Geek Squad Consultation Agent",
        company: "Best Buy (Trumbull, CT)",
        date: "June 2024 - Present",
        description: [
            "Managed and resolved technical support requests for consumers and small business clients by utilizing Nova and Workbench for accurate documentation and tracking.",
            "Diagnosed hardware/software issues including system failures, connectivity issues & application errors.",
            "Collaborated with advanced repair agents to improve diagnostic accuracy and reduce service order turnaround time by 30%." 
        ]
    },
    {
        title: "Level 1 Service Technician",
        company: "Sacred Heart University (Fairfield, CT)",
        date: "August 2023 - June 2025",
        description: [
            "Provided comprehensive technical support for over 5,000  students and faculty through in-person and remote channels, resolving a wide range of hardware, software & AV issues.",
            "Troubleshot and resolved secure login and access issues using Okta Verify and Active Directory to ensure a seamless user experience.",
            "Collaborated with various IT departments to escalate & resolve tickets using the TeamDynamix ticketing system." 
        ]
    }
];

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const WorkTimeline = () => {
    return (
       <motion.ul 
            variants={listVariants}
            initial="hidden"
            animate="visible"
        >
            {workData.map((item, index) => (
                <WorkTLItem key={index}
                {...item} />
            ))}
        </motion.ul>
    );
}

export default WorkTimeline;