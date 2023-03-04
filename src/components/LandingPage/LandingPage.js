import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import{PATHS} from "../../paths";
import "./LandingPage.css";
import Detail from "./components/Detail/Detail";

import {client} from "../../client";
const  LandingPage = () => {
    const[searchInp,setSearchInp]=useState("");
    const[error,setError]=useState(false);
    const[weatherList,setweatherList]=useState([]);

    const navigate = useNavigate();
    const handleChange=(e)=>{
        setSearchInp(e.target.value);
    }
    const handleSearch=()=>{
       client
       .get(`${(searchInp)}`)
       .then((resp)=>{
        console.log(resp)
        setweatherList(resp.data)
        window.localStorage.setItem("token", resp.data.token);
        navigate(PATHS.WEATHER_DETAIL);
    })
     .catch((err)=>console.log("ERROR : ",err));
  }
  return (
    <div>
        <h1 className="top">Weather Api</h1>
        <input className="bottom" value={searchInp} onChange={handleChange} type="text" placeholder='Location'></input>
        <button className="button" onClick={handleSearch}>Search</button>
        {searchInp &&(<div className={error ? "error":"success"}>{error ? `NO CITY FOUND ${searchInp}` :""}</div>
    
        )}
        <div className="weatherlist">
            {weatherList.map((weather)=><Detail weatherdata={weather}></Detail>)}
        </div>
    </div> 
    

  )
}

export default LandingPage;