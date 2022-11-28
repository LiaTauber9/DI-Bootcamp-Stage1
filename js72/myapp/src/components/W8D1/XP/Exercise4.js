import './Exercise4.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
const Exercise4 = () => {
    return(
        <div>
          <h1 style={{color:'red', backgroundColor:'lightblue'}}>This is a Header</h1>
          <p className='para'>This is a Paragraph</p>
          <a href=''>This is a link</a>
          <h2 style={style_header}>This is a form</h2> 
          <form>
            <input type='text'></input>
            <input type='submit' value='Submit'/>
            </form> 
            <h3>Here is an image:</h3> 
            <img src='https://cdn.thenewstack.io/media/2022/06/1270f621-600b72f9-react-1024x680-1.png' />
            <h4>This is a List</h4>
            {['Coffee', 'Tea', 'Milk'].map((item,index) => <li key={index}>{item}</li>)}
        </div>
    )
}
export default Exercise4