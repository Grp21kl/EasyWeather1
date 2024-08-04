/**
 * UVIndex Component
 * 
 * Muestra el índice UV de mañana, categorizado y con un icono asociado. El índice UV se categoriza en 'Bajo', 'Moderado', 'Alto' o 'MuyAlto' y se muestra junto a un icono correspondiente.
 *   - uvIndex (number): Valor del índice UV.
 */


import React from 'react';


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
    <div className="bg-[rgba(255,255,255,0.3)] rounded-lg p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start max-w-xs sm:max-w-md mx-auto">
      <img
        src={`/icons/${iconFileName}`} 
        alt={uvCategory}
        className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0" // Ajusta el tamaño del icono
      />
<div className="text-center sm:text-left">
  <p className="text-xl sm:text-2xl font-semibold mb-2">UV de mañana</p>
  <p className="text-3xl sm:text-4xl mb-2">{uvIndex.toFixed(1)}</p>
  <p className="text-xl sm:text-2xl">{uvCategory}</p>
</div>
    </div>
  );
};

export default UVIndex;
