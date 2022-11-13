import "./App.css";

export default function App() {
  let weatherData = {
    city: "Kyiv",
    date: "Today 16:02",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: "77",
    wind: "2.5",
    temperature: "19",
  };

  return (
    <div className="App">
      <div className="Weather">
        <form className="search-form" id="form-search">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                className="form-control shadow-sm"
                id="search-another"
              />
            </div>
            <div className="col-3">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-dark" type="submit">
                  Search
                </button>
                <button
                  className="btn btn-outline-dark"
                  id="current-button"
                  type="submit"
                >
                  Current
                </button>
              </div>
            </div>
          </div>
        </form>
        <h1> {weatherData.city} </h1>
        <ul>
          <li>
            {weatherData.date}
            <span id="date"></span>
          </li>
          <li id="description"></li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex wheather-temperature">
              <img
                src={weatherData.imgUrl}
                alt="Cloudy icon"
                className="weather-icon float-left"
                id="icon"
              />
              <div className="d-flex wheather-temperature">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="units">
                  <a href="/" id="celsius-link">
                    C°
                  </a>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li> Humidity: {weatherData.humidity}%</li>

                <li>Wind speed: {weatherData.wind}</li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="'weather-forecast" id="forecast"></div>
        </div>
      </div>
      <div className="gitlink">
        <a href="gg">Open-source code </a>
        by hh
      </div>
    </div>
  );
}
