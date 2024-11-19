import React from 'react';

const Navbar = () => {
  const navItems = ['Inicio', 'Experiencia', 'Habilidades', 'Proyectos', 'Contacto'];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


