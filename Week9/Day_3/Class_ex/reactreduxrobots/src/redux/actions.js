export const SEARCH = 'SEARCH';
export const GET_ROBOT = 'GET_ROBOT';


export const search = (text) => {
    return {
      type:SEARCH,
      payload: text
    }
  }
export const getRobots = () => (dispatch, getState) => {
    // console.log(getState); // the current state from the store
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data => {
        console.log('data from fetch=>',data);
      // this.setState({robots: data})
      
      dispatch({type:GET_ROBOT,payload:data})
    })
    .catch(err => console.log(err))

    // return {
    //   type:'GET_ROBOT',
    //   payload: arr
    // }
  }

  