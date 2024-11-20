import React, { useState } from 'react';
import Modal from './Modal';
import cvReact from '../img/proyectos/cv-react.png';
import cvHTML from '../img/proyectos/cv.png';
import ViescaSiller from '../img/proyectos/ViescaSiller.png';
import SistemaPHP from '../img/proyectos/SistemaPHP.png';
import SAWEB from '../img/proyectos/SAWEB.png';
import VideoViescaSiller from '../img/proyectos/ViescaSiller.mp4';
import VideoSistemaPHP from '../img/proyectos/SistemaPHP.mp4';
import datatable from '../img/components2/datatable.png';
import fish from '../img/components2/fish2.jpeg';
import tenis from '../img/components2/teniscard.png';
import buscador from '../img/components2/buscador.png';
import login from '../img/components2/login.png';
import videoFish from '../img/components2/fish.mp4';
import videoTenis from '../img/components2/teniscard.mp4';
import videoBuscador from '../img/components2/buscador.mp4';
import videoLogin from '../img/components2/login.mp4';

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      name: 'Curriculum web',
      description: 'curriculum web con portafolio',
      image: cvReact,
      image: cvReact,
      techStack: ['React'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Sistema Administrador WEB',
      description: 'Sistema administration web con opción de agregar catalogos y mostrarlos por rol',
      image: SAWEB,
      image: SAWEB,
      techStack: ['React, laravel'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Landing Page',
      description: 'Landing Page de productos',
      image: ViescaSiller,
      video: VideoViescaSiller,
      techStack: ['HTML', 'CSS', 'JavaScript'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Sistema de inventario',
      description: 'Es un sistema de inventario para registrar productos',
      image: SistemaPHP,
      video: VideoSistemaPHP,
      techStack: ['PHP', 'MySql'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Curriculum web',
      description: 'curriculum web con portafolio',
      image: cvHTML,
      image: cvHTML,
      techStack: ['HTML', 'CSS', 'Javascript'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
  ];

  const components = [
    {
      name: 'Salva el Pez',
      description: 'Abre la llave para que el pez pueda nadar.',
      image: fish,
      video: videoFish,
      techStack: ['React','CSS'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
   
    {
      name: 'Tenis Card',
      description: 'Cards animados sobre un ecommerce.',
      image: tenis,
      video: videoTenis,
      techStack: ['React','CSS'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Buscador',
      description: 'buscador en tiempo real con animación.',
      image: buscador,
      video: videoBuscador,
      techStack: ['React','CSS'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'Login',
      description: 'Login animado.',
      image: login,
      video: videoLogin,
      techStack: ['React','CSS'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
    {
      name: 'DataTable',
      description: 'Componente de tabla dinamica.',
      image: datatable,
      image: datatable,
      techStack: ['React'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
  ];

  const items = activeTab === 'projects' ? projects : components;

  const handleModalClose = () => setSelectedItem(null);

  return (
    <section id="projects-components" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Portafolio</h2>

        {/* Navegación de pestañas */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors duration-300 ${
              activeTab === 'projects'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Proyectos
          </button>
          <button
            onClick={() => setActiveTab('components')}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg shadow-sm transition-colors duration-300 ${
              activeTab === 'components'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Componentes
          </button>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button
                onClick={() => setSelectedItem(item)}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
              >
                Ver detalles
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && <Modal item={selectedItem} onClose={handleModalClose} />}
      </div>
    </section>
  );
};

export default Projects;
