import React, { useState, useEffect } from 'react';
import Introduction from '../components/Introduction/Introduction.jsx';
import About from '../components/About/About.jsx';
import Header from '../components/Header/Header.jsx';
import MobileHeader from '../components/Header/MobileHeader.jsx'; // Make sure to import your MobileHeader component

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
            <About />
        </div>
    );
};

export default Home;