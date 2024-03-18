/* eslint-disable react/prop-types */
function WeatherIcon(props) {
  const { iconName } = props;

  return (
    <div>
      <img
        width={70}
        height={70}
        alt='weather-icon'
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
      />
    </div>
  );
}

export default WeatherIcon;
