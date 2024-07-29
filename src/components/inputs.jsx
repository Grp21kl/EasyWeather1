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
    <div className="flex flex-col items-center my-2">
      {/* Contenedor para el input y los iconos */}
      <div className="flex flex-row items-center space-x-2 w-full max-w-md">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Buscar ciudad"
          className="text-sm font-light p-2 flex-grow shadow-xl focus:outline-none rounded-lg placeholder:lowercase"
        />
        <div className="flex flex-row items-center space-x-2">
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      </div>
      {/* Contenedor para los botones de unidad */}
      <div className="flex flex-row items-center mt-3 max-w-md bg-black bg-opacity-20 p-1 rounded-lg align-center justify-center">
        <button
          className="flex items-center justify-center w-20 h-10 transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("metric")}
        >
          <img 
            src="/icons/celsius.svg" 
            alt="Celsius Icon" 
            className="w-20 h-20" // Ajusta el tamaño del icono SVG
          />
        </button>
        <p className="text-sm font-light mx-1">|</p>
        <button
          className="flex items-center justify-center w-30 h-10 transition ease-out hover:scale-125"
          onClick={() => handleUnitChange("imperial")}
        >
          <img 
            src="/icons/fahrenheit.svg" 
            alt="Fahrenheit Icon" 
            className="w-20 h-25" // Ajusta el tamaño del icono SVG
          />
        </button>
      </div>
    </div>
  );
};

export default Inputs;
