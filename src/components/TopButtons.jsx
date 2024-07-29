import React from 'react';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'Azogues' },
    { id: 2, name: 'Guayaquil' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'Paris' },
    { id: 5, name: 'Lima' },
  ];

  return (
    <div className='flex items-center justify-center my-6'>
      <div className='flex bg-black bg-opacity-20 rounded-b-lg'>
        {cities.map((city, index) => (
          <React.Fragment key={city.id}>
            <button
              className={`text-lg font-medium text-white px-4 py-2 transition-opacity duration-300 ease-in-out hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 ${index !== cities.length - 1 ? 'border-r border-gray-400' : ''}`}
              onClick={() => setQuery({ q: city.name })}
            >
              {city.name}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;
