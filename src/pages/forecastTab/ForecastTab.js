import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ForecastTab.css';

function ForecastTab({coordinates}) {
    const apiKey = '46cafb34cf26d123796e0233ff898d2e'
    const [forecasts, setForecasts] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                setForecasts(result.data.daily.slice(1, 6))
                console.log(result.data.daily.slice(1, 6))
            } catch (e) {
                console.error(e);
            }
        }

        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);

    function createDateString(timestamp) {
        const day = new Date(timestamp * 1000);

        return day.toLocaleDateString('nl-NL', {weekday: 'long'});
    }

    return (
        <div className="tab-wrapper">
            {forecasts && forecasts.map((forecast) => {
                return (
                    <article className="forecast-day" key={forecast.dt}>
                        <p className="day-description">
                            {createDateString(forecast.dt)}
                        </p>

                        <section className="forecast-weather">
              <span>
                {forecast.temp.day}
              </span>
                            <span className="weather-description">
                {forecast.weather[0].description}
              </span>
                        </section>
                    </article>
                )
            })}
        </div>
    );
}

export default ForecastTab;
