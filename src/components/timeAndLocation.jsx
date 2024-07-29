const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-xl font-extralight'>{formattedLocalTime}</p>
      </div>
      <div className='flex items-center justify-center my-3 font-bold'>
        <p className='text-3xl  font-bold'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
