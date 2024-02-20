import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import TraitCard from '../Traits/TraitCard.jsx';
import SkillsSlider from '../SkillsSlider/SkillsSlider.jsx';
import BoltIcon from '@mui/icons-material/Bolt';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GestureIcon from '@mui/icons-material/Gesture';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MyselfPhoto from '../../images/foto Simon LF.jpg';


const About = () => {
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const [traitsRef, traitsInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const [myselfRef, myselfInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0.22,
    });

    const headerProps = useSpring({
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? 'scale(1)' : 'scale(0.3)',
        config: { duration: 520 },
    })

    const traitsProps = useSpring({
        opacity: traitsInView ? 1 : 0,
        transform: traitsInView ? 'translateX(0)' : 'translateX(200px)',
        config: { duration: 420 },
    });

    const myselfProps = useSpring({
        opacity: myselfInView ? 1 : 0,
        transform: myselfInView ? 'translateX(0)' : 'translateX(-200px)',
        config: { duration: 420 },
    });

    const skillsProps = useSpring({
        opacity: skillsInView ? 1 : 0,
        transform: skillsInView ? 'translateX(0)' : 'translateX(200px)',
        config: { duration: 420 },
    });

    const traits = [
        {
            icon: <BoltIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <BoltIcon sx={{ fontSize: 42 }} />,
            title: 'Fast',
            description: 'Quick loading web pages, seamless experience.',
        },
        {
            icon: <AspectRatioIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <AspectRatioIcon sx={{ fontSize: 42 }} />,
            title: 'Responsive',
            description: 'Layouts that work on any device.',
        },
        {
            icon: <EmojiObjectsIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <EmojiObjectsIcon sx={{ fontSize: 42 }} />,
            title: 'Innovative',
            description: 'Pioneering innovative solutions.',
        },
        {
            icon: <ShowChartIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <ShowChartIcon sx={{ fontSize: 42 }} />,
            title: 'Scalable',
            description: 'Designed to scale, adapt, and grow effortlessly.',
        },
        {
            icon: <GestureIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <GestureIcon sx={{ fontSize: 42 }} />,
            title: 'Intuitive',
            description: 'User-friendly design, easy to use.',
        },
        {
            icon: <RocketLaunchIcon sx={{ fontSize: 69 }} />,
            mobileIcon: <RocketLaunchIcon sx={{ fontSize: 42 }} />,
            title: 'Dynamic',
            description: 'Embracing fluidity, where elements come to life.',
        },

    ];

    return (
        <div id='about'
            className=" w-screen flex flex-col justify-start text-slate-900 min-h-screen -mt-46 z-1"
        >
            <animated.div ref={headerRef}
                style={{ ...headerProps, zIndex: 1 }}
                className="max-w-5xl mx-auto pt-14 mb-5">
                <h2 className="text-4xl font-bold mb-4 border-b border-pink-500">ABOUT ME</h2>
            </animated.div>
            <animated.div
                ref={traitsRef}
                style={{ ...traitsProps, zIndex: 1 }}
                className='flex flex-wrap justify-around'
            >
                {traits.map((trait, index) => (
                    <TraitCard key={index} {...trait} />
                ))}
            </animated.div>
            <div className='flex flex-wrap justify-around p-2'>
                <animated.div
                    ref={myselfRef}
                    style={{ ...myselfProps, zIndex: 1 }}
                    className='flex flex-col items-center'
                >
                    <img
                        src={MyselfPhoto}
                        alt='Simon Lanza Fiorito'
                        className='w-full h-auto z-10 max-w-[16rem]'
                        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                    />
                    <p className='max-w-[20rem] text-lg p-1 text-center'>Greetings! I'm Simon Lanza Fiorito, a Full Stack Dev who loves to blend creativity seamlessly with code, always prone to learning and adapting to the ever-evolving tech landscape.</p>
                    <p className='max-w-[20rem] text-lg p-1 text-center'>I'm thrilled to be part of projects that reshape the digital frontier.</p>
                </animated.div>
                <animated.div
                    ref={skillsRef}
                    style={{ ...skillsProps, zIndex: 1 }}
                >
                    <SkillsSlider />
                </animated.div>
            </div>
        </div>
    );
};

export default About;