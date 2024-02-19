// Introduction.js
import React, { useEffect, useRef, useState } from 'react';
import { initBackgroundAnimation } from './backgroundAnimation';

const Introduction = () => {
    const canvasRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleButton = () => {
        const about = document.getElementById('about');
        if (about) {
            window.scrollTo({
                top: about.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    useEffect(() => {
        const image = new Image();
        image.src = 'https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg';
        image.onload = () => setImageLoaded(true);
    }, []);

    useEffect(() => {
        if (imageLoaded) {
            initBackgroundAnimation('large-header', 'demo-canvas');
        }
    }, [imageLoaded]);

    return (
        <div id='home' className='h-screen w-screen flex flex-col items-center justify-center relative max-h-screen overflow-hidden'>
                <div className='z-1 w-screen h-screen large-header absolute inset-0 bg-cover bg-center' id='large-header' style={{ backgroundImage: 'url("https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg")' }}>
                    <div className='z-20 main-title text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <h1 className='text-white text-wrap text-4xl lg:text-5xl mb-4 '>Hello, I'm <span className='text-indigo-500 whitespace-nowrap'>Simon Lanza Fiorito</span></h1>
                        <p className='text-white text-3xl mb-2'>I'm a full-stack developer,</p>
                        <p className='text-white text-3xl mb-2'>heavily focused on the front end.</p>
                        <button onClick={() => handleButton()} className='border border-indigo-600 bg-transparent text-white py-2 px-4 rounded transition duration-200 hover:bg-indigo-600'>Get to know me</button>
                    </div>
                </div>
            <canvas className='z-10' id='demo-canvas' ref={canvasRef} ></canvas>
        </div>
    );
};

export default Introduction;












