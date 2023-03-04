
import React from 'react';

import "./Detail.css";
const Detail = ({weatherdata}) => {
  return (
    <div className='main'>
      <div>
      <h1  className='one'>Weather Data</h1>
      <input className="cel"  value="Celsius" type="checkbox" ></input>
      <input  className="Fah" value="Fahrenheit" type="checkbox"></input>
      </div>
      <div className='box'>
        <p className='two'>Location:{weatherdata.location}</p>
        <p className='three'>Feels Like:{weatherdata.condition.feelslike_c}</p>
        <p className='four'>Temperature:{weatherdata.condition.temp_c}</p>

      </div>

    </div>
    
  )
}

export default Detail;