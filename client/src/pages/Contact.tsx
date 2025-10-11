import { SectionCard, ContactForm } from '../components';

const Contact = () => {
    return (
        <section id = "contact" className = "py-24 container mx-auto px-4">
            <SectionCard className = "text-center">
                <h1 className="text-6xl font-serif mb-8">Get In Touch</h1>
                <div className="flex space-x-6 justify-center">
                    <ContactForm />
                </div>
            </SectionCard>            
        </section>
    )
}

export default Contact;