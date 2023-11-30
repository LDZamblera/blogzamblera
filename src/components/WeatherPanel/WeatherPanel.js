import React, {useState} from 'react';
import FormClima from '../FormClima/FormClima';
import CardClima from '../CardClima/CardClima';


const WeatherPanel = () => {
    const apiKey = "1be0caac83b48b6f60719352408d9cab";
    let urlWeather = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
    let urlForecast = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;
    let cityUrl = "&q=";
   

    

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        
    }


    return(

        <React.Fragment>
    
            <FormClima
                newLocation = {getLocation}
            />

            <CardClima
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />


        </React.Fragment>

    );

}

export default WeatherPanel;