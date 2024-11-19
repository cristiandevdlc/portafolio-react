import React from "react";

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-3xl shadow-xl transform transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 id="modal-title" className="text-3xl font-bold text-gray-900">
            {item.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200"
            aria-label="Cerrar modal"
          >
            ✖
          </button>
        </div>

        {item.video ? (
          <div className="flex justify-center">
            <video
              controls
              className="w-full max-w-md rounded-lg mb-6 shadow-md"
            >
              <source src={item.video} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
          />
        )}

        <p id="modal-description" className="text-lg text-gray-700 mb-6">
          {item.description}
        </p>
        <p className="mb-6">
          <strong>Tecnologías usadas:</strong>
          <span className="text-gray-900"> {item.techStack.join(", ")}</span>
        </p>
        {item.sourceCode && (
          <a
            href={item.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Ver código fuente
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
