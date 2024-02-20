import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MobileHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        setHeight();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setHeight);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const scrollToSection = (sectionId) => {
        toggleMobileMenu()
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
            <nav className={`bg-slate-900 text-white w-full h-12 duration-200 ${isSticky ? 'top-0 fixed max-w-screen' : ''}`} ref={headerRef} style={{ zIndex: 100 }}>
                <div className="flex justify-end max-w-3xl mx-auto">
                    <div className="relative">
                        <button className='pt-3 pr-3' onClick={toggleMobileMenu}>
                            <MenuIcon sx={{ fontSize: 27 }} />
                        </button>
                        {isMobileMenuOpen && (
                            <div className='bg-slate-900 transition p-4 border-pink-500 rounded z-10 absolute right-0'>
                                <ul className='flex flex-col items-end space-y-4'>
                                    <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('home')}>Home</button></li>
                                    <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('about')}>About</button></li>
                                    <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('experience')}>Experience</button></li>
                                    <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('education')}>Education</button></li>
                                    <li><button className="hover:text-pink-500 hover:scale-110 transition-transform" onClick={() => scrollToSection('contact')}>Contact</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {isSticky && <div className='bg-slate-800' style={{ height: `${headerHeight}px`, }}></div>}
        </div>
    )
}

export default MobileHeader;