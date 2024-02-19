import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const [lJobRef, lJobInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const [rJobRef, rJobInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const headerProps = useSpring({
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? 'scale(1)' : 'scale(0.3)',
        config: { duration: 520 },
    })

    const lJobProps = useSpring({
        opacity: lJobInView ? 1 : 0,
        transform: lJobInView ? 'translateX(0)' : 'translateX(-200px)',
        config: { duration: 520 }
    })

    const rJobProps = useSpring({
        opacity: rJobInView ? 1 : 0,
        transform: rJobInView ? 'translateX(0)' : 'translateX(200px)',
        config: { duration: 520 }
    })

    return (
        <div id='experience'
            className="w-screen flex flex-col justify-start text-slate-900 pt-5 z-1"
        >
            <animated.div ref={headerRef} className="max-w-5xl mx-auto pt-14 mb-5" style={{ ...headerProps }}>
                <h2 className="text-4xl font-bold border-b border-pink-500">Experience</h2>
            </animated.div>
            <div className='flex flex-col md:flex-row p-6 justify-center'>
                <animated.div className='flex flex-col items-center text-center m-2 max-w-3xl'
                    ref={lJobRef} style={{ ...lJobProps }} >
                    <h4 className='text-pink-500'>2020-2022</h4>
                    <h2 className='text-2xl m-2'> Freelance Web Developer </h2>
                    <p>From 2020 to 2022, I served as a Freelance Web Developer, specializing in creating and enhancing websites. Focused on small to medium-sized enterprises and startups, I applied a meticulous approach to deliver seamless, professional online solutions. This experience honed my technical skills and deepened my understanding of crafting effective web solutions tailored to diverse client needs.</p>
                </animated.div>
                <animated.div className='flex flex-col items-center text-center border-dotted border-t border-pink-500 md:border-none m-2 max-w-3xl'
                    ref={rJobRef} style={{ ...rJobProps }} >
                    <h4 className='text-pink-500'>2023</h4>
                    <h2 className='text-2xl m-2'> Sr App Support Engineer at <a className='text-indigo-600 hover:scale-120 transition-transform' href='https://dxc.com/us/en' target="_blank" rel="noopener noreferrer"> DXC</a></h2>
                    <p> As a Senior App Support Engineer at DXC Technology, I played a pivotal role in overseeing and developing key projects and maintenance for our client, <a className='hover:text-indigo-600' href="https://energyharbor.com/en" target="_blank" rel="noopener noreferrer">energyharbor.com</a>. Leading the development of two critical projects, I focused on optimizing functionality and enhancing user experience. My responsibilities extended to overseeing server operations, ensuring the seamless performance of associated applications, and contributing to the overall web asset management. This experience not only granted me extensive expertise but also cultivated adaptability to various technologies, making me well-suited for various tech positions.</p>
                </animated.div>
            </div>
        </div>
    )
}

export default Experience