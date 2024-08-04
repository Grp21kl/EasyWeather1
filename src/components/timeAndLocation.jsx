/**
 * TimeAndLocation Component
 * Muestra la hora local y la ubicación actual (nombre de la ciudad y país).

 * - weather (object): Objeto que contiene la hora local formateada, el nombre de la ciudad y el país.
 */



import React from 'react';

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div className="flex flex-col items-center justify-center my-6 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center my-3">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-300">
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-300">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
