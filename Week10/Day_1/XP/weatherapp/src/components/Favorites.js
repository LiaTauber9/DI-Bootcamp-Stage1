const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

const Favorites = ()=>{
    const favoritesList = localStorage.getItem("favoritesList")|| [];
    const wetherList = [];
    for(city of favoritesList){
       getFavorites(city) 
    }
    const getFavorites = async(item)=>{
         const res = await fetch(`${BASE_URL}/currentconditions/v1/${item.Key}?apikey=${API_KEY}&language=en-us&details=false`);
        const data = await res.json();
        wetherList.push(data[0]);
    }

    return <h1>Favotits</h1>
}
export default Favorites