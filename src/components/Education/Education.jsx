import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });
    const headerProps = useSpring({
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? 'scale(1)' : 'scale(0.3)',
        config: { duration: 520 },
    })
    const [usalRef, usalInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    })
    const [platziRef, platziInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    })
    const [digitalRef, digitalInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    })
    const usalProps = useSpring({
        opacity: usalInView ? 1 : 0,
        transform: usalInView ? 'blur(0px)' : 'blur(10px)',
        config: { duration: 1000}
    })
    const platziProps = useSpring({
        opacity: platziInView ? 1 : 0,
        transform: platziInView ? 'blur(0px)' : 'blur(10px)',
        config: { duration: 1000}
    })
    const digitalProps = useSpring({
        opacity: digitalInView ? 1 : 0,
        transform: digitalInView ? 'blur(0px)' : 'blur(10px)',
        config: { duration: 1000}
    })
    return (
        <div id='education' className='w-screen flex flex-col justify-start text-slate-900 z-1 min-h-screen h-fit'>
            <animated.div ref={headerRef} className="max-w-5xl mx-auto pt-14 mb-5" style={{ ...headerProps }}>
                <h2 className="text-4xl font-bold border-b border-pink-500">Education</h2>
            </animated.div>
            <div className='flex flex-col p-6 items-center'>
                <animated.div className='flex flex-col items-center text-left m-2 max-w-4xl'
                    ref={usalRef} style={{ ...usalProps }}>
                    <h4 className='text-pink-500'>2019-2021</h4>
                    <h2 className='text-2xl m-2'>Informatic Engineering - USAL</h2>
                    <p>During my initial academic journey, I pursued Informatic Engineering at USAL, where I immersed myself in the fundamentals of technology and honed my logical thinking skills. The two years spent in this program provided a solid foundation, introducing me to the vast world of technology. While the formal education path was valuable, I eventually recognized alternative avenues better aligned with my learning style and goals.</p>
                </animated.div>
                <animated.div className='flex flex-col items-center text-left m-2 border-dotted border-t border-pink-500 max-w-4xl'
                    ref={platziRef} style={{ ...platziProps }} >
                    <h4 className='text-pink-500'>from 2020</h4>
                    <h2 className='text-2xl m-2'>Platzi Online Bootcamp</h2>
                    <p>Following my departure from formal education, I embarked on a dynamic learning journey through the Platzi online platform. Engaging with a range of courses, I earned several diplomas, including Basic JavaScript, FrontEnd Development, JavaScript Fundamentals, and ReactJS. This immersive experience allowed me to refine my practical skills and stay abreast of the latest industry trends. The hands-on approach provided by Platzi complemented my learning style, empowering me to apply theoretical knowledge to real-world scenarios and reinforcing my passion for web development.</p>
                </animated.div>
                <animated.div className='flex flex-col items-center text-left m-2 border-dotted border-t border-pink-500 max-w-4xl'
                    ref={digitalRef} style={{ ...digitalProps }} >
                    <h4 className='text-pink-500'>2021-2023</h4>
                    <h2 className='text-2xl m-2'>Certified Tech Developer - Digital House</h2>
                    <p>Transitioning from a foundational learning phase, I pursued the Certified Tech Developer program at Digital House from 2021 to 2023. This comprehensive initiative, co-created by Digital House, Mercado Libre, and Globant, adheres to the highest industry standards, offering a robust curriculum covering Front End, Back End, infrastructure, databases, and soft skills such as learning agility, teamwork, effective communication, and professional attitude.</p>
                </animated.div>
            </div>

        </div>
    )
}

export default Education