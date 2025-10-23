import { useState, useActionState } from 'react';
const ContactForm = () => {
    
    const [formData, setFormData] = useState({ name: null, email: null, message: null });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    
    const handleChange = (e: React.ChangeEvent <HTMLInputElement |  HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
    };

    return (
        <div>

        </div>
    );
}

export default ContactForm;