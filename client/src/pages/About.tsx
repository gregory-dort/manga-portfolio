import { motion } from 'framer-motion';
import { SectionCard } from '../components';

const About = () => {
    return (
        <section id = "about" className = "py-24 container mx-auto px-4"> 
            <SectionCard>
                 <motion.h1 
                    className="text-6xl font-serif mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h1>

            </SectionCard>
        </section>
    )
}

export default About;