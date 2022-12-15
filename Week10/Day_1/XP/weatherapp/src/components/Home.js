import {useState, useEffect, useContext} from 'react';
import { AppContext } from '../App';
import AutoComplete from './AutoComplete';
import CurrentWeather from './CurrentWeath';
import FiveDays from './fiveDays';




const Home = () => {
    const {city,country,cityKey} = useContext(AppContext);

    if(cityKey){
        return (
            <>
            <AutoComplete />
            <CurrentWeather />
            <FiveDays />
            </>
        )    
    }
    return(
            <AutoComplete />
    )
}
export default Home;