import React from "react";

const Forecast = ({ title, data }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] p-4 rounded-lg shadow">
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>

      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p>{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-30 h-30 my-1" />
            <p className="text-2xl">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
