import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState('')
  const [data, setData] = useState([])

  const options = {
    method: 'GET',
    url: `https://weather1099.p.rapidapi.com/v1/weather/${location}`,
    headers: {
      'X-RapidAPI-Key': '7625192b00msh89174f470fd8cf4p11051bjsn1c2478acd2b2',
      'X-RapidAPI-Host': 'weather1099.p.rapidapi.com'
    }
  };

  const handleSearch = (e) => {
    e.preventDefault()
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data)
    })
    setLocation('')
  }

  
  return (
    <div className="App">
      <form className="form" onSubmit={handleSearch}>
        <input className="searchInput"
          placeholder="Enter Location"
          type='text' value={location}
          onChange={((e) => setLocation(e.target.value))} />
       <button className="button" type="submit">Search</button> 
      </form>

      <div className="container">
        <div className="header">
          <small>{data.name} {data.state}</small> 
          {data.main ? <h1>{data.main.temp}°P</h1>: null}
          {data.weather ? <div className="howIsDay">{data.weather[0].main}</div> : null}
        </div>
        <div className="footer">
          <div className="footerDiv">
            {data.main ? <small>{data.main.feels_like}°P</small> : null}
            <p>feels like</p>
          </div>
          <div className="footerDiv">
            {data.main ? <small>{data.main.humidity}°P</small> : null}
            <p>humidity</p>
          </div>
          <div className="footerDiv">
            {data.main ? <small>{data.main.sea_level}°P</small> : null}
            <p>sea level</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
