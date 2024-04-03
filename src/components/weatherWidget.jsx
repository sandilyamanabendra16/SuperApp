import  react, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./weatherWidget.module.css";
import { BsCloudFog } from "react-icons/bs";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { TbDropletHalf2Filled } from "react-icons/tb";

function WeatherWidget(){

    const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
    const [weather,setweather]=useState();

    useEffect(()=>{
        getWeather();
    
    },[])

    const getWeather= async ()=>{
        const {data, status} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=Mumbai`);
        if(status==200){
            setweather(data.current);
        }
    }

    const formatDate = () => {
        
            const formattedDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const formattedTime = new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
    
            return {
                date: formattedDate,
                time: formattedTime
            };
    };

    return <div>
        {weather &&(
            <div className={styles.weatherWidget}>
                <div className={styles.header}>
                    <p>{formatDate().date} </p>
                    <p>{formatDate().time} </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.cloud}> 
                    <p > <BsCloudFog size={70}/> </p> 
                    <p>{weather.condition.text}</p>
                    </div>
                    <div className={styles.line}> |
                    </div>
                    <div> 
                    <p className={styles.weatherc}> {weather.temp_c} °C </p>
                    <p> <FaTemperatureHalf />  {weather.pressure_mb} mbar <br/> Pressure</p>
                    </div>
                    <div className={styles.line}> |
                    </div>
                    <div> 
                    <p>  <FiWind />  {weather.wind_kph} km/h <br/> Wind</p>
                    <p> <TbDropletHalf2Filled /> {weather.humidity} % <br/> Humidity </p>
                    </div>
                </div> 

            </div>
        )}
    </div>

}

export default WeatherWidget;