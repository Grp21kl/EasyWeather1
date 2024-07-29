import { DateTime, Settings } from "luxon";

const API_KEY = '365fa8e66d8f81df5914fd6a5ea99d5c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

Settings.defaultLocale = 'es';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }
      return res.json();
    });
};

const getUVIndex = (lat, lon) => {
  const url = new URL(`${BASE_URL}uvi`);
  url.search = new URLSearchParams({ lat, lon, appid: API_KEY });

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`UV Index request failed with status ${res.status}`);
      }
      return res.json();
    });
};

const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime = (secs, offset, format = "cccc, dd LLL yyyy' | Hora local: 'hh:mm a") => {
  const dateTime = DateTime.fromSeconds(secs).setZone(`UTC${offset / 3600}`);
  return dateTime.toFormat(format);
};

const weatherDescriptions = {
  "Thunderstorm": "Tormenta",
  "Drizzle": "Llovizna",
  "Rain": "Lluvia",
  "Snow": "Nieve",
  "Mist": "Niebla",
  "Smoke": "Humo",
  "Haze": "Neblina",
  "Dust": "Polvo",
  "Fog": "Niebla",
  "Sand": "Arena",
  "Ash": "Ceniza",
  "Squall": "Chubasco",
  "Tornado": "Tornado",
  "Clear": "Despejado",
  "Clouds": "Nublado"
};

const translateDescription = (description) => {
  return weatherDescriptions[description] || description;
};

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  const cityName = name.toLowerCase() === "opar" ? "Azogues" : name;

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name: cityName,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
    sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
    speed,
    details: translateDescription(details),
    icon: iconUrlFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon
  };
};

const formatForecastWeather = (secs, offset, data) => {
  const hourly = data.filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrlFromCode(f.weather[0].icon),
      data: f.dt_txt,
    })).slice(0, 5);

  const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map(f => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconUrlFromCode(f.weather[0].icon),
      data: f.dt_txt,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData('forecast', { lat, lon, units: searchParams.units })
    .then((d) => formatForecastWeather(dt, timezone, d.list));

  const uvIndexData = await getUVIndex(lat, lon);

  return { ...formattedCurrentWeather, ...formattedForecastWeather, uvIndex: uvIndexData.value };
};

export default getFormattedWeatherData;