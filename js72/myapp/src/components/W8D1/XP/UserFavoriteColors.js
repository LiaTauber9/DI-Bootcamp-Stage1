import User from "./User";
const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };

 const UserFavoriteColors = () => {
    return(
        <div>
        <h3>first Name: {user.first_name}</h3>
        <h3>Last Name: {user.last_name}</h3>
        <h4>Favorit Animals:</h4>
        <ul>
            {user.fav_animals.map(item => <User animal={item} />)}
        </ul>
        </div>
    )
 }

 export default UserFavoriteColors
