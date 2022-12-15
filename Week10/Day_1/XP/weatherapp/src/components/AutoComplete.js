import {useState, useEffect, useContext} from 'react';
import { AppContext } from '../App';
import autoComplete from '../data/autoComplete.json'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const AutoComplete = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState('')
    const {setCity, setCountry, setCityKey, city} = useContext(AppContext)

    const getSuggestions=(val)=>{
        setInput(val);
        // fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${val}&language=en-us`)
        // .then(res=>res.json())
        // .then(data=>setSuggestions(data))
        // .catch(e=>console.log(e))
        setSuggestions(autoComplete)
    }

    const selectCity = (cityObj)=>{
        setCity(cityObj.LocalizedName);
        setCountry(cityObj.Country.LocalizedName);
        setCityKey(cityObj.Key)
        setSuggestions([])
        setInput('')
        console.log('updated context=>',city);
    }

return(
    <div>
        <input type='text' placeholder='Type city name' value={input} onChange={(e)=>getSuggestions(e.target.value)}/>
        <ul>
            {
                suggestions.map(item=>{return(
                    <li key={item.Key} onClick={()=>selectCity(item)}>City: {item.LocalizedName} Country: {item.Country.LocalizedName}</li>
                )})
            }
        </ul>
    </div>
)
}
export default AutoComplete