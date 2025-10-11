//import { useState, useEffect } from 'react';
import { Navbar, Footer } from '../components';
import type { SectionIDs } from '../components/Navbar';
import { About, Contact, Experience, Project } from './index';

const sectionID: SectionIDs = {
    about: 'about',
    experience: 'experience',
    contact: 'contact',
    project: 'project'
};

const Home = () => {
    return (
        <div className = "bg-slate-600 min-h-screen text-gray-800">
            <Navbar sectionIds = {sectionID} />

            <main className = "container mx-auto px-4">
                <section id = {sectionID.about} className = "py-24">
                    <About />
                </section>
                <section id = {sectionID.experience} className = "py-24">
                    <Experience />
                </section>
                <section id = {sectionID.project} className = "py-24">
                    <Project />
                </section>
                <section id = {sectionID.contact} className = "py-24">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;