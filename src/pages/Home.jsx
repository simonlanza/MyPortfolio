import React, { useState, useEffect } from 'react';
import Introduction from '../components/Introduction/Introduction.jsx';
import About from '../components/About/About.jsx';
import Header from '../components/Header/Header.jsx';
import MobileHeader from '../components/Header/MobileHeader.jsx';
import Experience from '../components/Experience/Experience.jsx';
import BgBlue from '../images/white-gray-bg.jpg'
import Education from '../components/Education/Education.jsx';
import Contact from '../components/Contact/Contact.jsx';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 575);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 575);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Introduction />
            {isMobile ? <MobileHeader /> : <Header />}
            <div 
            style={{
                backgroundImage: `url(${BgBlue})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
                <About />
                <Experience />
                <Education />
            </div>
            <Contact />
        </div>
    );
};

export default Home;