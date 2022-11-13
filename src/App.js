import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <form className="d-flex" role="search" id="search-form" />

                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter a city"
                  aria-label="Search"
                  id="city-input"
                  autofocus="on"
                />
              </div>

              <div className="col-1">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </div>

              <div className="col-1">
                <button
                  type="button"
                  class="btn btn-success"
                  id="second-button"
                >
                  Current
                </button>
              </div>
            </div>

            <div className="row cities-data">
              <div className="col-6 chosen-city" id="city-of-choise">
                New York
              </div>
              <div className="col-6 weather-conditions"></div>
              <div className="col-6" id="data-now">
                Tuesday 10:00
              </div>
              <div className="col-6">
                Wind: <span id="wind"></span> 5<span>km/h</span>
              </div>
              <div className="col-6" id="description">
                Clouds
              </div>
              <div className="col-6">
                Humidity: <span id="humidity"></span> 80<span>%</span>
              </div>
              <div className="col-6 current-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <span id="temperature-data"> 23</span>
                <span id="celsius">
                  <a href="#" id="celsius-link">
                    °C
                  </a>
                </span>
                <span className="separator">|</span>
                <span>
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
              <div className="col-6"></div>
            </div>

            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
