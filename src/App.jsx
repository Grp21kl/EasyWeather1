import React, { useEffect, useState } from 'react';
import TimeAndLocation from "./components/timeAndLocation";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/inputs";
import TempAndDetails from "./components/tempAndDetails";
import Forecast from "./components/forecast";
import UVIndex from "./components/uvIndex"; // Importa el nuevo componente
import getFormattedWeatherData from "./services/weatherService";
import './assets/f.jpg'; 

const App = () => {
  const [query, setQuery] = useState({ q: 'quito' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ ...query, units });
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="min-h-screen bg-orange-300 relative">
      {/* Contenedor semitransparente para la imagen y el texto */}
      <div style={{
        position: 'absolute', 
        top: '20px',  
        left: '20px', 
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        padding: '10px', 
        borderRadius: '8px' 
      }}>
        <img 
          src="sol.gif"
          alt="Logo" 
          style={{ 
            width: '120px',  
            height: 'auto',
            zIndex: 10,  
          }} 
        />
        <h1 style={{ 
          fontSize: '30px', 
          fontWeight: 'bold', 
          color: 'white', 
          marginLeft: '10px' 
        }}>
          Easy Weather
        </h1>
      </div>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            {/* Contenedor del índice UV */}
            <div className="absolute top-0 right-8 bg-black bg-opacity-30 rounded-lg shadow-lg p-2 max-w-xs z-8">
              <UVIndex uvIndex={weather.uvIndex} />
            </div>
            {/* Contenedor de pronóstico */}
            <div className="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 my-4 pt-20"> {/* Ajusta el padding-top para crear espacio */}
              <Forecast title="Pronóstico cada 3 horas" data={weather.hourly} />
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg shadow-lg p-4 my-4">
              <Forecast title="Pronóstico diario" data={weather.daily} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
