import React from 'react';

// Mapea las categorías de UV a los nombres de archivo SVG
const uvIconMap = {
  Bajo: 'uv-index.svg',
  Moderado: 'uv-index.svg',
  Alto: 'uv-index.svg',
  MuyAlto: 'uv-index.svg',
};

const UVIndex = ({ uvIndex }) => {
  const getUVCategory = (index) => {
    if (index < 3) return 'Bajo';
    if (index < 6) return 'Moderado';
    if (index < 8) return 'Alto';
    return 'MuyAlto';
  };

  const uvCategory = getUVCategory(uvIndex);
  const iconFileName = uvIconMap[uvCategory];

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-4 my-4 flex items-center">
      <img
        src={`/icons/${iconFileName}`} // Ruta al ícono SVG en la carpeta public/icons
        alt={uvCategory}
        className="w-12 h-12 mr-4" // Tamaño del ícono
      />
      <div>
        <p className="text-lg font-semibold">Índice UV</p>
        <p className="text-2xl">{uvIndex.toFixed(1)}</p>
        <p className="text-lg">{uvCategory}</p>
      </div>
    </div>
  );
};

export default UVIndex;
