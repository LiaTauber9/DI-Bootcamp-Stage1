const apiKey = 'iMFWdxfjptDlhoROXLQFgTJfSK26vRAS';
const qAutocomplete = 'tel'
const urlAutocomplete = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${qAutocomplete}&language=en-us`

const urlCity = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=tel%20aviv&language=en-us&details=false&offset=10`; ///get text from search

const cityKey = '215854'; //TLV
const fullDetails = false;
const isMetric = true; 
const urlCurrentWeather = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=en-us&details=${fullDetails}`;

const urlDailyForecast = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=en-us&details=${fullDetails}&metric=${isMetric}`

const urlFiveDaysForecast = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&language=en-us&details=${fullDetails}&metric=${isMetric}`