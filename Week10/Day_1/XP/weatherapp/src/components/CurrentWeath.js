import {useState, useEffect, useContext} from 'react';
import { AppContext } from '../App';
import currWeather from '../data/currentWeather.json'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const CurrentWeather = () =>{
    const {city, country, cityKey} = useContext(AppContext);
    const [currWeath, setCurrWeath] = useState({});
    
    const getWeather = async()=>{
        // const res = await fetch(`${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&language=en-us&details=false`);
        // const data = await res.json();
        // setCurrentWeath(data[0]);
        setCurrWeath(currWeather[0]);
        console.log(currWeather[0]);
    }

    const iconNum = (num)=> {
        return (num<10 ? '0'+num : num)     
}

const addFavorite = () => {
    const favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];
    console.log( favoritesList);
    const newList = [...favoritesList, {city, country, cityKey}]
    console.log(newList);
    localStorage.setItem("favoritesList",JSON.stringify(newList))
}

    useEffect(()=>{
            getWeather()
    },[cityKey])

    return(
        <div>{city}, {country},<br/>
        {currWeath.WeatherText}{': '} 
        {/* {currWeath.Temperature.Metric.Value}C  */}
        <br/>
        <img src={`https://developer.accuweather.com/sites/default/files/${iconNum(currWeath.WeatherIcon
)}-s.png`}/>
<button onClick={addFavorite}>Add to Favorites</button>
        </div>
    )
}

export default CurrentWeather