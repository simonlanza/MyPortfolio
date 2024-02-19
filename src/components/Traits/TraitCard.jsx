import React, { useState, useEffect } from 'react';

const TraitCard = ({ icon, mobileIcon, title, description }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="flex flex-col items-center mb-3 mx-2 ">
            <div className="bg-indigo-700 p-2 mb-1 z-0" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                <span className="text-white">{isMobile ? mobileIcon : icon}</span>
            </div>

            <div className="text-center w-[8rem]">
                <h3 className="text-base font-semibold">{title}</h3>
                {isMobile ? '' : <div className="text-base text-slate-900 mx-auto max-w-[12rem]">
                    {description}
                </div>}

            </div>
        </div>
    );
};

export default TraitCard;










