import React from "react";
import './WeatherApp.css';
import cloud from '../Assets/cloud.avif'
import { FaSearch } from "react-icons/fa";
import { PiWindDuotone } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import {useState} from 'react';
import { useEffect } from "react";

function WeatherApp() {

    const [search,setSearch] = useState("chennai");
    const [city,setCity] = useState(null);


const getWeatherData = async()=>{

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2ec8027f9afa11371eb8cb23292005ff`);
    let result = await response.json();

    setCity(result)
}

useEffect(()=>{
    getWeatherData();
},[search])

    return(

    <center>    
        <div className="Card">
         
        
            <input className='searchbar' type='text' placeholder="Enter City Name" 
            spellcheck='false' onChange={(e)=>{setSearch(e.target.value)}}/>
             <button className="searchbtn"><FaSearch/></button>
        <br/>
    <center>  
            <img className='image' src={cloud} alt=''/>     
         <br/>

        <div className="weather-temp">
             {city?.main?.temp}&#8451;
        </div>
        
        <div className="weather-location">
            {city?.name}
        </div>
    </center>
        <div className="element1">
         <p><WiHumidity style={{fontSize:'30px'}} /><b>{city?.main?.humidity}<br/>Humidity</b></p>    
        </div>
        <div className="element2">
         <p><PiWindDuotone style={{fontSize:'30px'}} /><b>{city?.wind?.speed} km/h <br/>Wind Speed</b></p> 
        </div>

        </div>
    </center>    
    )
}

export default WeatherApp;
