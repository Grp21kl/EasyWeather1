/**
 * Componente principal de la aplicación
 * 
 * Muestra la interfaz de usuario de la aplicación de clima, incluyendo la ubicación y el tiempo actual, detalles del clima, pronósticos y el índice UV. Permite buscar ciudades y cambiar unidades de temperatura.
 * 
 * Funciones:
 * - getWeather: Obtiene y actualiza los datos del clima utilizando la función getFormattedWeatherData.
 * 
 * Renderiza:
 * - TopButtons: Botones para buscar ciudades predefinidas.
 * - Inputs: Campo de búsqueda y selección de unidades.
 * - TimeAndLocation: Muestra la hora y ubicación actual.
 * - TempAndDetails: Muestra la temperatura actual y detalles adicionales del clima.
 * - UVIndex: Muestra el índice UV.
 * - Forecast: Muestra los pronósticos de clima cada 3 horas y diarios.
 */

import React, { useEffect, useState } from 'react';
import TimeAndLocation from "./components/timeAndLocation";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/inputs";
import TempAndDetails from "./components/tempAndDetails";
import Forecast from "./components/forecast";
import UVIndex from "./components/uvIndex"; 
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

  useEffect(() => {
    document.body.style.zoom = "90%"; 
    return () => {
      document.body.style.zoom = "100%"; 
    };
  }, []);

  return (
    <div 
      className="min-h-screen " 
      style={{ 
        backgroundImage: 'url(/op1.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contenedor semitransparente para la imagen y el texto */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center bg-black bg-opacity-40 p-4 z-10">
        <div className="flex items-center space-x-4">
          <img 
            src="sol.gif"
            alt="Logo" 
            className="w-24 h-auto sm:w-32 md:w-40"
          />
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
            Easy Weather
          </h1>
        </div>
      </div>

      {/* Espaciado para TopButtons e Inputs justo debajo del logo */}
      <div className="pt-[200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-2">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative mt-4">
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            {/* Contenedor del pronóstico UV */}
            <div className="absolute top-12 right-4 z-10">
              <UVIndex uvIndex={weather.uvIndex} />
            </div>
            {/* Contenedor de pronóstico */}
            <div className="bg-black bg-opacity-0 rounded-lg p-4 my-4 text-2xl">
              <Forecast title="Pronóstico cada 3 horas" data={weather.hourly} />
            </div>
            <div className="bg-black bg-opacity-0 rounded-lg p-4 my-4 text-2xl text-black font-bold">
              <Forecast title="Pronóstico diario" data={weather.daily} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;