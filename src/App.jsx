import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
    return (
        <div>
            <Hero /> 
            <AboutMe />
            <Experience />
            <Skills />
            {/* <Projects /> */}
        </div>
    );
}

export default App;
