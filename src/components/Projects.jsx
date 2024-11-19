import React, { useState } from 'react';
import fish from '../img/components2/fish2.jpeg';
import videoFish from '../img/components2/fish.mp4';
import Modal from './Modal';

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      name: 'Save The Fish',
      description: 'Descripción detallada del Proyecto 1, mostrando las funcionalidades clave y el impacto.',
      image: fish,
      video: videoFish,
      techStack: ['React', 'Laravel', 'Tailwind CSS'],
      sourceCode: 'https://github.com/usuario/proyecto1',
    },
  ];

  const components = [
    {
      name: 'Componente 1',
      description: 'Descripción del Componente 1 y su funcionalidad.',
      image: fish,
      video: videoFish,
      techStack: ['React', 'JavaScript'],
      sourceCode: 'https://github.com/usuario/componente1',
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
