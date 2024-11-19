import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// Componente para mostrar la experiencia laboral
const Job = ({ role, company, period, description }) => (
    <div className="p-4 border-l-4 border-teal-500 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
        <span className="block text-sm text-gray-500 mb-1">{company} | {period}</span>
        <p className="text-sm text-gray-700">{description}</p>
    </div>
);

// Componente para mostrar los grados académicos
const Degree = ({ level, institution, year }) => (
    <div className="p-4 border-l-4 border-blue-500 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800">{level}</h3>
        <span className="block text-sm text-gray-500 mb-1">{institution} | {year}</span>
    </div>
);

// Componente principal que gestiona las pestañas
const Experience = () => {
    const [activeTab, setActiveTab] = useState('experience');

    const jobs = [
        // {
        //     role: 'Director General | Desarrollador',
        //     company: 'Nexus Prime',
        //     period: 'Actualidad',
        //     description: 'Lidero el desarrollo de soluciones de software empresarial y personalizadas, gestionando proyectos y garantizando resultados alineados con las necesidades de los clientes.',
        // },
        {
            role: 'Vendedor',
            company: 'Ishü',
            period: '2024',
            description: 'Asesoré a clientes en la compra de tenis de marca, superando objetivos de ventas y garantizando una excelente experiencia de compra.',
        },
        {
            role: 'Soporte Técnico',
            company: 'AM Sistemas',
            period: '2024',
            description: 'Brindé soporte técnico a clientes, resolviendo problemas de software y hardware.',
        },
        {
            role: 'Desarrollador JR',
            company: 'Intergas del Norte',
            period: '2023 - 2024',
            description: 'Desarrollo de aplicaciones web utilizando React y Laravel.',
        },

        {
            role: 'Supervisor',
            company: 'GolfStore',
            period: '2021 - 2022',
            description: 'Supervisión de operaciones diarias del almacén y apoyo al equipo en el campestre torreón.',
        },
        {
            role: 'Desarrollador JR',
            company: 'Runnouni Technology',
            period: '2020 - 2021',
            description: 'Implementación de soluciones escalables y personalizadas para clientes globales.',
        },
    ];

    const degrees = [
        {
            level: 'Licenciatura en Sistemas Computacionales Administrativos',
            institution: 'Escuela de Sistemas UT',
            year: '2019 - 2023',
        },
        {
            level: 'Preparatoria',
            institution: 'Instituto Grecolatino',
            year: '2017 - 2019',
        },
        {
            level: 'Secundaria',
            institution: 'María Dolores Vigata de Méndez',
            year: '2013 - 2016',
        },
        {
            level: 'Primaria',
            institution: 'Lucio Blanco',
            year: '2007 - 2013',
        },
    ];

    return (
        <section id="experience" className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Experiencia</h2>

                {/* Navegación de pestañas */}
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg shadow transition-colors duration-300 ${activeTab === 'experience'
                            ? 'bg-teal-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        aria-label="Ver experiencia laboral"
                        aria-selected={activeTab === 'experience'}
                    >
                        <FaBriefcase className="mr-2" />
                        Experiencia Laboral
                    </button>
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg shadow transition-colors duration-300 ${activeTab === 'education'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        aria-label="Ver formación académica"
                        aria-selected={activeTab === 'education'}
                    >
                        <FaGraduationCap className="mr-2" />
                        Formación Académica
                    </button>
                </div>

                {/* Contenido de las pestañas */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {activeTab === 'experience' &&
                        jobs.map((job, index) => <Job key={index} {...job} />)}
                    {activeTab === 'education' &&
                        degrees.map((degree, index) => <Degree key={index} {...degree} />)}
                </div>
            </div>
        </section>
    );
};

export default Experience;
