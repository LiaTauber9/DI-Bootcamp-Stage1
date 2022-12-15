import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import fiveDays from '../data/fiveDays.json'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const FiveDays = () => {
    const { cityKey } = useContext(AppContext);
    const [forcast, setForcast] = useState([]);

    const geForcast = async () => {
        // const res = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&language=en-us&details=false&metric=true`);
        // const data = await res.json();
        // setForcast(data.DailyForecasts);
        // console.log(data);
        setForcast(fiveDays.DailyForecasts);
        console.log(fiveDays.DailyForecasts);
    }

    const iconNum = (num) => {
        return (num < 10 ? '0' + num : num)
    }
    useEffect(() => {
        geForcast()
    }, [cityKey])

    return (
        <div>
            {forcast.map((item, index) => {
                return(
                    <div key={index}>{index}<br />
                    {'Day: '}{item.Day.IconPhrase}{': '}{item.Temperature.Maximum.Value}C
                    <br />
                    <img src={`https://developer.accuweather.com/sites/default/files/${iconNum(item.Day.Icon)}-s.png`} />
                    <br />
                    {'Night: '}{item.Night.IconPhrase}{': '}{item.Temperature.Minimum.Value}C
                    <br />
                    <img src={`https://developer.accuweather.com/sites/default/files/${iconNum(item.Night.Icon)}-s.png`} />
                </div>
                )})
            }
        </div>
    )

}

export default FiveDays