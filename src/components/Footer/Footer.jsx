import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div id='footer' className='bg-gray-800 text-white text-center w-screen bottom-0 releative '>
            <div className="mt-auto">
                <button onClick={() => scrollToSection('home')} className="bg-slate-600 rounded py-1 px-2 text-pink-500 hover:text-pink-600 cursor-pointer">
                    <ArrowUpwardIcon />
                </button>
            </div>

            <div className="flex justify-center p-7 gap-5">
                <a href="https://www.linkedin.com/in/simon-lanza-fiorito-4ab8351aa/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-pink-600 hover:text-slate-900">
                        <LinkedInIcon />
                    </button>
                </a>
                <a href="https://www.instagram.com/simonlanza/?hl=es" target="_blank" rel="noopener noreferrer">
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-pink-600 hover:text-slate-900">
                        <InstagramIcon />
                    </button>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009364040280&locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-md mx-2 hover:bg-pink-600 hover:text-slate-900">
                        <FacebookIcon />
                    </button>
                </a>
            </div>
            <p className='text-pink-500 font-extralight'>SIMON LANZA FIORITO @2024</p>
        </div>
    );
};

export default Footer;
