/**
 * TempAndDetails Component
 * 
 * Muestra los detalles del clima actual, incluyendo sensación térmica, humedad, viento, amanecer, atardecer y temperaturas máxima y mínima.

 * - weather (object): Objeto que contiene detalles del clima, íconos, temperatura, humedad, viento, amanecer, atardecer y temperaturas mínima y máxima.
 */
import React from 'react';

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: () => (
        <img
          src="/icons/thermometer.svg"
          alt="Sensación Térmica"
          className="w-13 h-20"
        />
      ),
      title: 'Sensación Térmica',
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: () => (
        <img
          src="/icons/humidity.svg"
          alt="Humedad"
          className="w-13 h-20"
        />
      ),
      title: 'Humedad',
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: () => (
        <img
          src="/icons/wind-beaufort-1.svg"
          alt="Viento"
          className="w-13 h-20"
        />
      ),
      title: 'Viento',
      value: `${speed.toFixed()}km/h`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: () => (
        <img
          src="/icons/sunrise.svg"
          alt="Amanecer"
          className="w-24 h-auto"
        />
      ),
      title: 'Amanecer',
      value: sunrise,
    },
    {
      id: 2,
      Icon: () => (
        <img
          src="/icons/sunset.svg"
          alt="Atardecer"
          className="w-24 h-auto"
        />
      ),
      title: 'Atardecer',
      value: sunset,
    },
    {
      id: 3,
      Icon: () => (
        <img
          src="/icons/thermometer-warmer.svg"
          alt="Temperatura Max."
          className="w-24 h-auto"
        />
      ),
      title: 'Temperatura Max.',
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: () => (
        <img
          src="/icons/thermometer-colder.svg"
          alt="Temperatura Min."
          className="w-24 h-auto"
        />
      ),
      title: 'Temperatura Min.',
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className="text-center py-6 text-3xl text-white">
        <p>{details}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center py-3">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={icon}
            alt="Weather Icon"
            className="w-40 h-auto"
          />
          <p className="text-6xl sm:text-9xl text-white">{`${temp.toFixed()}°`}</p>
        </div>

        <div className="flex flex-col space-y-3 items-start ml-8 bg-[rgba(255,255,255,0.3)] p-4 rounded-lg shadow">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex items-center space-x-2 text-black">
              <Icon />
              <span className="text-lg">{`${title}: ${value}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 text-base py-3 bg-[rgba(255,255,255,0.3)]  p-1 rounded-lg shadow mx-auto max-w-[80%]">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex font-light items-center text-lg text-black">
            <Icon className="mr-2" />
            <span className="text-xl">{`${title}: ${value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
