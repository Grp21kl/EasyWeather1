/**
 * Inputs Component
 * 
 * Proporciona una interfaz para buscar ciudades, obtener la ubicación actual y cambiar las unidades de temperatura.
 *
 * - setQuery (function): Función para actualizar la consulta de búsqueda.
 * - setUnits (function): Función para cambiar las unidades de temperatura.
 */

import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    const latitude = -2.7392;
    const longitude = -78.8467;
    setQuery({ lat: latitude, lon: longitude });
  };

  const handleUnitChange = (unit) => {
    setUnits(unit);
  };

  return (
    <div className="flex flex-col items-center my-2 px-4 sm:px-6 lg:px-8">
      {/* Contenedor para el input y los iconos */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Buscar ciudad..."
          className="text-sm font-light p-4 shadow-xl focus:outline-none rounded-full lg:placeholder:text-lg"
          style={{ width: '300px', maxWidth: '100%' }}
        />
        <div className="flex flex-row items-center space-x-2 mt-2 sm:mt-0">
          <BiSearch
            size={35}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={35}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      </div>
      {/* Contenedor para los botones de unidad */}
      <div className="flex flex-row items-center mt-10 ml-13 max-w-md bg-[rgba(255,255,255,0.3)] p-1 rounded-full align-center justify-center space-x-2">
        <button
          className="flex items-center justify-center w-20 h-10 transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("metric")}
        >
          <img 
            src="/icons/celsius.svg" 
            alt="Celsius Icon" 
            className="w-20 h-20 sm:w-24 sm:h-24" 
          />
        </button>
        <p className="text-sm font-light mx-1">|</p>
        <button
          className="flex items-center justify-center w-20 h-10 transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("imperial")}
        >
          <img 
            src="/icons/fahrenheit.svg" 
            alt="Fahrenheit Icon" 
            className="w-20 h-20 sm:w-24 sm:h-24" 
          />
        </button>
      </div>
    </div>
  );
};

export default Inputs;
