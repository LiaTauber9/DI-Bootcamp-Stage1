
const Search = (props) => {
    return(
        <>
        <input type='text' onChange={(e)=>props.input(e)}/>        
        <button onClick={props.click}>Search</button> 
        </>
    )
}
export default Search
