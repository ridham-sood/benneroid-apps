import React, { useState, useEffect } from 'react';
import style from './weather.module.css';

import Clear from './images/clear.png';
import Clouds from './images/clouds.png';
import Drizzle from './images/drizzle.png';
import Humidity from './images/humidity.png';
import Mist from './images/mist.png';
import Rain from './images/rain.png';
import Search from './images/search.png';
import Snow from './images/snow.png';
import Wind from './images/wind.png';

const Card = () => {
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWind] = useState(0);
  const [humid, setHumidity] = useState(0);

  const [weather, setWeather] = useState(Clear);

  const [city, setCity] = useState('Jammu');

  const key = '4b8b874d943b63f97950ff7dddae63f4';
  const header = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  async function getDate() {
    try {
      const response = await fetch(header + `${city}` + `&appid=${key}`);
      const data = await response.json();

      setTemp(data.main.temp);
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);

      const weatherCondition = data.weather[0].main;
      switch (weatherCondition) {
        case 'Clear':
          setWeather(Clear);
          break;
        case 'Clouds':
          setWeather(Clouds);
          break;
        case 'Drizzle':
          setWeather(Drizzle);
          break;
        case 'Mist':
          setWeather(Mist);
          break;
        case 'Rain':
          setWeather(Rain);
          break;
        case 'Snow':
          setWeather(Snow);
          break;
        default:
          setWeather(Clear);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDate();
  }, []);

  function handleSeachField(event) {
    var cName = event.target.value;
    cName = cName.slice(0, 1).toUpperCase() + cName.slice(1).toLowerCase();
    setCity(cName);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      getDate();
    }
  }

  return (
    <div>
      <div className={style.body}>
        <div className={style.card}>
          <div className={style.header}>
            <input
              className={style['search-bar']}
              type="text"
              placeholder="Search City..."
              onChange={handleSeachField}
              onKeyDown={handleKeyDown}
            />
            <button className={style['search-button']} type="submit" onClick={getDate}>
              <img className={style['search-button-img']} src={Search} alt="search-button" />
            </button>
          </div>
          <div className={style['weather-image']}>
              <img className={style['weather-image-png']} src={weather} alt="weather-image" />
            </div>
            <div className={style.temperature}>
              <div className={style['temperature-value']}>{temp}&deg;c</div>
              <div className={style['temperature-location']} value={city}>
                {city}
              </div>
            </div>
            <div className={style.stats}>
              <div className={style.humidity}>
                <div className={style['humidity-header']}>
                  <img className={style['humidity-img']} src={Humidity} alt="" />
                </div>
                <div className={style['humidity-body']}>
                  <div className={style['humidity-value']}>{humid} %</div>
                  <p className={style['humidity-text']}>Humidity</p>
                </div>
              </div>
              <div className={style['wind-speed']}>
                <div className={style['wind-speed-header']}>
                  <img className={style['wind-speed-img']} src={Wind} alt="" />
                </div>
                <div className={style['wind-speed-body']}>
                  <div className={style['wind-spped-value']}>{windSpeed} km/h</div>
                  <p className={style['wind-speed-text']}>Wind Speed</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
