import "./current-weather.css"

const CurrentWeather = (data) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <div>
                        <p className="city">{data.data.city}</p>
                        <p className="weather-description">{data.data.weather[0].description}</p>
                    </div>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.data.main.temp-273)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.data.main.feels_like-273)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{Math.round(data.data.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CurrentWeather;