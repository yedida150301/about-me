import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

const LandingPage = () => {
    const username = "Yedida Farel";
    return (
        <div>
            <Navbar username={username} />
            <Home />
            <About id="about" />
            <Portfolio id="portfolio" />
            <Resume id="resume" />
            <Contact id="contact" />
        </div>
    );
};

export default LandingPage;
