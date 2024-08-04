/**
 * TopButtons Component
 * 
 * Muestra una fila de botones para seleccionar ciudades predefinidas. Al hacer clic en un botón, se actualiza la consulta de búsqueda con el nombre de la ciudad correspondiente.
 * - setQuery (function): Función para actualizar la consulta de búsqueda con el nombre de la ciudad seleccionada.
 */






import React from 'react';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'Azogues' },
    { id: 2, name: 'Guayaquil' },
    { id: 3, name: 'Bogota' },
    { id: 4, name: 'Brasilia' },
    { id: 5, name: 'Lima' },
  ];

  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex flex-wrap bg-[rgba(255,255,255,0.3)] rounded-full overflow-hidden">
        {cities.map((city, index) => (
          <button
            key={city.id}
            className={`text-lg sm:text-xl md:text-2xl font-medium text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 transition-opacity duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 ${index !== cities.length - 1 ? 'border-r border-gray-400' : ''} rounded-full`}
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;
