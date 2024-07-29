import React from 'react';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

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
          alt="Humidity Icon"
          style={{ width: '50px', height: 'auto' }} 
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
          alt="Humidity Icon"
          style={{ width: '50px', height: 'auto' }} 
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
          alt="Wind Icon"
          style={{ width: '50px', height: 'auto' }} 
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
          alt="Sunrise Icon"
          style={{ width: '80px', height: 'auto' }} 
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
          alt="Sunset Icon"
          style={{ width: '80px', height: 'auto' }} 
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
          alt="Temperature Max Icon"
          style={{ width: '80px', height: 'auto' }} 
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
          alt="Temperature Min Icon"
          style={{ width: '80px', height: 'auto' }} 
        />
      ),
      title: 'Temperatura Min.',
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-black-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <div className="flex items-center ml-80" style={{ gap: '175px' }}>
          <img
            src={icon}
            alt="Weather Icon"
            style={{ width: '200px', height: '200px' }} // Ajusta el tamaño del ícono de clima principal aquí
          />
          <p className="text-9xl">{`${temp.toFixed()}°`}</p>
        </div>

        <div className="flex flex-col space-y-3 items-start ml-2 bg-black bg-opacity-20 p-4 rounded-lg shadow">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex font-light text-sm items-center">
              <Icon className="mr-2" />
              <span className="text-lg">{`${title}: ${value}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 text-sm py-3 bg-black bg-opacity-20 p-4 rounded-lg shadow max-w-50 mx-auto" style={{ width: '700px', margin: '0 auto' }}>
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex font-light text-sm items-center">
            <Icon className="mr-2" />
            <span className="text-lg">{`${title}: ${value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
