import React from 'react';
import image from '../img/cv.png';
import backgroundImage from '../img/fondo.jpg';

const Header = () => {
    return (
        <header
            className="relative bg-gray-900 text-white shadow-lg"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay para oscurecer la imagen */}
            <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

            <div className="relative z-20 container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
                {/* Información personal */}
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                    <img
                        src={image}
                        alt="Foto de Cristian Eduardo De La Cruz Cardenas"
                        className="w-32 h-32 rounded-full border-4 border-gray-400 object-cover"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-2">
                            Cristian Eduardo De La Cruz Cardenas
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-300 mb-2">
                            Desarrollador Web Full-Stack
                        </h2>
                        <p className="text-lg text-gray-300">
                            Licenciado en sistemas computacionales administrativos
                        </p>
                    </div>
                </div>

                {/* Enlaces de contacto */}
                <div className="flex space-x-4">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/tu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-200"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.06 20.45H3.57V8.9h3.49v11.55zM5.32 7.58c-1.13 0-2.05-.91-2.05-2.03 0-1.12.92-2.03 2.05-2.03s2.05.91 2.05 2.03c0 1.12-.92 2.03-2.05 2.03zm15.12 12.87h-3.49v-5.91c0-1.41-.03-3.24-1.97-3.24-1.97 0-2.28 1.54-2.28 3.13v6.02H9.21V8.9h3.35v1.57h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.41v6.36z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/cristiandevdlc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-200"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.49.5.09.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.092-.647.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.268.098-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 7.29c.85.004 1.705.115 2.504.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.372.201 2.387.099 2.64.64.698 1.028 1.591 1.028 2.682 0 3.841-2.338 4.687-4.565 4.935.359.308.678.92.678 1.855 0 1.338-.012 2.418-.012 2.745 0 .268.181.578.688.48A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </a>

                    {/* Portafolio */}
                    <a
                        href="https://tu-portafolio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-200"
                        aria-label="Portafolio"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-.047-17.928c-.948 0-1.763.378-2.351.966-.58.588-.938 1.403-.938 2.351v5.242c0 .948.378 1.763.966 2.351.588.58 1.403.938 2.351.938h5.242c.948 0 1.763-.378 2.351-.966.58-.588.938-1.403.938-2.351v-5.242c0-.948-.378-1.763-.966-2.351-.588-.58-1.403-.938-2.351-.938h-5.242zm-.031 14.457v-7.014H8.577V7.535h7.01v7.014h-3.375v3.375h-3.31zm4.085-7.014h3.31v3.31h-3.31v-3.31z" />
                        </svg>
                    </a>
               
                </div>

            </div>
        </header>
    );
};

export default Header;
