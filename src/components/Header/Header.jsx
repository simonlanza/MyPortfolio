import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const introSection = document.getElementById('home');
            const introSectionBottom = introSection.offsetTop + introSection.clientHeight;
            const scrollY = window.scrollY;

            setIsSticky(scrollY > introSectionBottom);
        };

        const setHeight = () => {
            setHeaderHeight(headerRef.current.offsetHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', setHeight);

        // Initial height calculation
        setHeight();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setHeight);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='z-10'>
            <nav
                ref={headerRef}
                style={{
                    zIndex: 100
                }}
                className={`bg-slate-900 border-b-2 border-pink-500 text-white p-3 w-full h-12 duration-200 ${isSticky ? 'top-0 fixed' : ''}`}
            >
                <div className="flex items-center max-w-3xl mx-auto">
                    <ul className="flex items-center mx-auto space-x-6">
                        <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('home')}>Home</button></li>
                        <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('about')}>About</button></li>
                        <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('experience')}>Experience</button></li>
                        <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('education')}>Education</button></li>
                        <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('contact')}>Contact</button></li>
                    </ul>
                </div>
            </nav>
            {isSticky && <div className='bg-slate-800' style={{ height: `${headerHeight}px`,  }}></div>}
        </div>
    );
};

export default Header;








