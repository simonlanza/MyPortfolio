import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faJs, faHtml5, faCss3, faGit, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faServer, faHandshake, faTasks, faClock, faDatabase, faBrain, faLightbulb, faComments } from '@fortawesome/free-solid-svg-icons';
import AdobeIcon from '../../icons/adobe.png';
import ApiIcon from '../../icons/api.png';
import AzureIcon from '../../icons/azure.png';
import NextIcon from '../../icons/next.png';
import SassIcon from '../../icons/sass.png';
import SpringIcon from '../../icons/spring.png';
import StyledIcon from '../../icons/styled.png';
import TypeScriptIcon from '../../icons/typescript.png';
import TailwindIcon from '../../icons/tailwind.png'

const SkillsSlider = () => {
  const categories = ['Front-End', 'Back-End', 'Soft Skills'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const skillsByCategory = {
    'Front-End': [
      { title: 'React', icon: faReact, level: 10 },
      { title: 'JavaScript', icon: faJs, level: 9 },
      { title: 'Tailwind CSS', icon: TailwindIcon, level: 8 },
      { title: 'HTML5', icon: faHtml5, level: 8 },
      { title: 'CSS3', icon: faCss3, level: 8 },
      { title: 'Styled Components', icon: StyledIcon, level: 7 },
      { title: 'Typescript', icon: TypeScriptIcon, level: 5 },
      { title: 'Next.js', icon: NextIcon, level: 5 },
      { title: 'Sass', icon: SassIcon, level: 5 },
    ],
    'Back-End': [
      { title: 'Java', icon: faJava, level: 7 },
      { title: 'Git', icon: faGit, level: 7 },
      { title: 'Azure', icon: AzureIcon, level: 6 },
      { title: 'MySQL', icon: faDatabase, level: 6 },
      { title: 'Spring', icon: SpringIcon, level: 6 },
      { title: 'AEM', icon: AdobeIcon, level: 5 },
      { title: 'Apache', icon: faServer, level: 5 },
      { title: 'RESTful API design', icon: ApiIcon, level: 5 },
      { title: 'Linux servers', icon: faLinux, level: 5 },
    ],
    'Soft Skills': [
      { title: 'Problem Solving', icon: faBrain, level: 10 },
      { title: 'Adaptability', icon: faLightbulb, level: 10 },
      { title: 'Effective Communication', icon: faComments, level: 8 },
      { title: 'Time Management', icon: faClock, level: 8 },
      { title: 'Project Management', icon: faTasks, level: 6 },
      { title: 'SCRUM', icon: faHandshake, level: 5 },
    ],
  };



  return (
    <div className='flex flex-wrap justify-around p-2'>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold mb-4 border-b-1 border-pink-500'>Skills</h2>
        <div className='flex'>
          {categories.map((category) => (
            <button
              key={category}
              className={`border text-white m-2 p-2 rounded hover:text-pink-500 ${selectedCategory === category ? 'bg-indigo-700 scale-110' : 'bg-slate-900 hover:scale-105'
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ul>
          {skillsByCategory[selectedCategory].map((skill) => (
            <li key={skill.title} >
              <strong className="flex items-center">
                {typeof skill.icon === 'object' ? (
                  <FontAwesomeIcon icon={skill.icon} className="mr-2" />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    className="mr-2"
                    width="20" // Adjust the width as needed
                    height="20" // Adjust the height as needed
                  />
                )}
                <span className="ml-2">{skill.title}</span>
              </strong>
              <div className="flex mt-1">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className={` w-6 sm:w-10 h-5 mx-0.5 border-2 border-indigo-700 ${index < skill.level ? 'bg-indigo-500' : 'bg-transparent'}`}
                    style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
                  ></div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSlider;