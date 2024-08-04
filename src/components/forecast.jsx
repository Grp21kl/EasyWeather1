/**
 * Forecast Component
 * Muestra una previsión del clima en una cuadrícula. Cada ítem incluye un título, una hora, un ícono y una temperatura.
 */
import React from "react";

const Forecast = ({ title, data }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] p-4 rounded-lg shadow">
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9"> {/* Ajusta las columnas y el espacio entre cuadros */}
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-5 bg-[rgba(255,255,255,0.3)] rounded-lg opacity-1" // Ajusta el tamaño del cuadro
          >
            <p className="text-xl font-semibold">{d.title}</p> {/* Ajusta el tamaño del texto del título */}
            <p className="text-3xl font-semibold">{d.time}</p> {/* Ajusta el tamaño del texto de la hora */}
            <img src={d.icon} alt="weather icon" className="w-40 h-35 my-1" /> {/* Ajusta el tamaño del icono */}
            <p className="text-3xl">{`${d.temp.toFixed()}°`}</p> {/* Ajusta el tamaño del texto de la temperatura */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
