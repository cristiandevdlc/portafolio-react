import React from 'react';
import { FaCode, FaHeadset, FaChartLine, FaPlane, FaDatabase, FaPaintBrush, FaFileExcel, FaTools, FaCamera } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section id="about-me" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 sm:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Sobre Mí</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Soy un profesional apasionado por el desarrollo de software y la tecnología. 
                        Tengo experiencia en programación, soporte técnico, análisis de datos, diseño gráfico, reparación de hardware, limpieza de equipos, 
                        instalación de cámaras y ventas. Mi enfoque siempre está en brindar soluciones efectivas y creativas para cada desafío.
                    </p>
                </div>

                {/* Sección de detalles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Programación */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                            <FaCode className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Programación</h3>
                        <p className="text-gray-600 text-sm">
                            Creo soluciones tecnológicas innovadoras que generan valor.
                        </p>
                    </div>

                    {/* Análisis de datos */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-indigo-500 text-white rounded-full mx-auto mb-4">
                            <FaDatabase className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Análisis de Datos</h3>
                        <p className="text-gray-600 text-sm">
                            Transformo datos en información valiosa para la toma de decisiones.
                        </p>
                    </div>

                    {/* Reparación de Hardware */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-orange-500 text-white rounded-full mx-auto mb-4">
                            <FaTools className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Reparación de Hardware</h3>
                        <p className="text-gray-600 text-sm">
                            Experiencia en mantenimiento, limpieza de equipos e instalación de componentes.
                        </p>
                    </div>

                    {/* Diseño gráfico */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-red-500 text-white rounded-full mx-auto mb-4">
                            <FaPaintBrush className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Diseño Gráfico & Marketing</h3>
                        <p className="text-gray-600 text-sm">
                            Manejo herramientas como Photoshop y Figma para crear diseños atractivos.
                        </p>
                    </div>

                    {/* Soporte técnico */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4">
                            <FaHeadset className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Soporte Técnico</h3>
                        <p className="text-gray-600 text-sm">
                            Ayudo a resolver problemas técnicos asegurando la continuidad operativa.
                        </p>
                    </div>

                    {/* Instalación de Cámaras */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-gray-500 text-white rounded-full mx-auto mb-4">
                            <FaCamera className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Instalación de Cámaras</h3>
                        <p className="text-gray-600 text-sm">
                            Configuración e instalación de sistemas de vigilancia para diversos entornos.
                        </p>
                    </div>

                    {/* Manejo de Office */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-blue-700 text-white rounded-full mx-auto mb-4">
                            <FaFileExcel className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Manejo de Office</h3>
                        <p className="text-gray-600 text-sm">
                            Experto en herramientas como Excel, Word y PowerPoint para optimizar procesos.
                        </p>
                    </div>

                    {/* Ventas */}
                    <div className="bg-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105">
                        <div className="flex justify-center items-center w-16 h-16 bg-green-500 text-white rounded-full mx-auto mb-4">
                            <FaChartLine className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Ventas</h3>
                        <p className="text-gray-600 text-sm">
                            Experiencia en conectar con clientes y alcanzar objetivos comerciales.
                        </p>
                    </div>

                    
                </div>

                {/* Mensaje final */}
               
            </div>
        </section>
    );
};

export default AboutMe;
