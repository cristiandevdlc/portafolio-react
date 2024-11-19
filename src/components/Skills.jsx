import { useState } from "react";
import { GiThink } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import {
    RiFirebaseFill,
    RiCustomerService2Fill
} from 'react-icons/ri';

import {
    TbBrandOffice,
    TbPresentationAnalytics
} from "react-icons/tb";

import {
    FaPeopleRobbery,
    FaComputer,
    FaPeopleGroup,
    FaSass,
    FaPython,
} from "react-icons/fa6";

import {
    FaReact,
    FaLaravel,
    FaNodeJs,
    FaGit,
    FaDocker,
    FaAws,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJava,
    FaAndroid,
    FaMoneyBillWave,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMui,
    SiMongodb,
    SiJavascript,
    SiMysql,
    SiPostman,
    SiJquery,
    SiPhp,
    SiTypescript,
    SiMicrosoftsqlserver,
    SiSpring,
    SiCodeigniter,
    SiAdobephotoshop,
    SiCanva,
    SiExpress,
    SiAngular,
    SiVuedotjs,
    SiDjango,
    SiCsharp,
    SiOpensourcehardware,
    SiGooglemarketingplatform
} from "react-icons/si";






const SkillBadge = ({ skill, icon }) => (
    <li className="flex flex-col items-center justify-center bg-white text-gray-800 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:border-teal-500 transform hover:scale-105 transition-transform duration-300 p-4 text-center h-40 w-40 mx-auto">
        <div className="text-4xl mb-2">{icon}</div>
        <span className="text-sm font-medium">{skill}</span>
    </li>
);

const Skills = () => {
    const [activeTab, setActiveTab] = useState('technical');

    const skillCategories = [
        {
            category: "Frameworks",
            skills: [
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
                { name: "Material-UI", icon: <SiMui className="text-black -500" /> },
                { name: "Express.js", icon: <SiExpress className="text-greey-500" /> },
                { name: "CodeIgniter", icon: <SiCodeigniter className="text-orange-500" /> },
                { name: "Spring", icon: <SiSpring className="text-green-500" /> },
                { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
                { name: "Django", icon: <SiDjango className="text-green-500" /> },
            ],
        },
        {
            category: "Front-end",
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
                { name: "Sass", icon: <FaSass className="text-pink-600" /> },
                { name: "React", icon: <FaReact className="text-blue-500" /> },
                { name: "Angular", icon: <SiAngular className="text-pink-600" /> },
                { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
                { name: "React Native", icon: <FaReact className="text-blue-500" /> },

            ],
        },
        {
            category: "Back-end",
            skills: [
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "C#", icon: <SiCsharp className="text-purple-500" /> },
                { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
                { name: "Python", icon: <FaPython className="text-yellow-500" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Firebase", icon: <RiFirebaseFill className="text-yellow-500" /> },
                { name: "Android Studio", icon: <FaAndroid className="text-green-600" /> },
            ],
        },
        {
            category: "Database, Cloud & APIs",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "SQL Server", icon: <SiMicrosoftsqlserver className="text-red-600" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "Git", icon: <FaGit className="text-orange-500" /> },
                { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
                { name: "RESTful APIs", icon: <SiPostman className="text-orange-500" /> },
                { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
            ],
        },

    ];

    const nonTechnicalSkills = [
        {
            category: "",
            skills: [
                { name: "Soporte Técnico", icon: <FaComputer className="text-black" /> },
                { name: "Manejo de personal", icon: <FaPeopleGroup className="text-blue-500" /> },
                { name: "Ventas", icon: <FaMoneyBillWave className="text-green-500" /> },
                { name: "Diseño UX/UI", icon: <SiCanva className="text-blue-500" /> },
                { name: "Photoshop", icon: <SiAdobephotoshop className="text-black" /> },
                { name: "Manejo de office", icon: <TbBrandOffice className="text-orange-600" /> },
            ],
        },
        {
            category: "",
            skills: [
                { name: "Análisis de datos", icon: <TbPresentationAnalytics className="text-black" /> },
                { name: "Servicio al cliente", icon: <RiCustomerService2Fill className="text-red-600" /> },
                { name: "Comunicación efectiva", icon: <FaPeopleRobbery className="text-greey-600" /> },
                { name: "Marketing", icon: <SiGooglemarketingplatform className="text-greey-600" /> },
                { name: "Gestión de tiempos", icon: <IoMdTime className="text-greey-600" /> },
                { name: "Instalación Hardaware/Sofftware", icon: <SiOpensourcehardware className="text-greey-600" /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Habilidades
                </h2>
                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setActiveTab('technical')}
                        className={`flex items-center px-4 py-2 mx-2 rounded-lg shadow-sm transition-colors duration-300 ${activeTab === 'technical' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Habilidades Técnicas
                    </button>
                    <button
                        onClick={() => setActiveTab('non-technical')}
                        className={`flex items-center px-4 py-2 mx-2 rounded-lg shadow-sm transition-colors duration-300 ${activeTab === 'non-technical' ? 'bg-teal-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Habilidades Blandas
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {activeTab === 'technical' &&
                        skillCategories.map((category, index) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                                    {category.category}
                                </h3>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                    {category.skills.map((skill, idx) => (
                                        <SkillBadge key={idx} skill={skill.name} icon={skill.icon} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    {activeTab === 'non-technical' &&
                        nonTechnicalSkills.map((category, index) => (
                            <div key={index} className="mb-8">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                                    {category.skills.map((skill, idx) => (
                                        <SkillBadge key={idx} skill={skill.name} icon={skill.icon} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
