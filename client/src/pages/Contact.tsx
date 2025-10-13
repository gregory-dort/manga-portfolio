import { motion } from 'framer-motion';
import { SectionCard, ContactForm } from '../components';

const Contact = () => {
    return (
        <section id = "contact" className = "py-24 container mx-auto px-4">
            <SectionCard className = "text-center items-center">
                 <motion.h1 
                    className="text-6xl font-serif mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get In Touch
                </motion.h1>
                <div className="flex space-x-6 justify-center">
                    <ContactForm />
                </div>
            </SectionCard>            
        </section>
    )
}

export default Contact;