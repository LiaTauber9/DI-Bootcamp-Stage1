
    const usersData = async() =>{
        try{
            const promise = await(fetch('https://jsonplaceholder.typicode.com/users'));
            return await promise.json();
        }
        catch(e){
            console.log(e);
        }
    }
    

module.exports = {
    usersData
}
