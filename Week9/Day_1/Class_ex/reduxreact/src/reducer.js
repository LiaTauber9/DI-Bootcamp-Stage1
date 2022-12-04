let initState = {
    property_one:'one one one',
    property_two:'two',
    text1:'text1 from store'
  }
  
  export const reducer = (state=initState, action={}) => {
    // action.type action.payload
    switch (action.type) {
      case 'PROP_ONE':
        return {...state, property_one:action.payload};
      case 'PROP_TWO':
        return {...state, property_two:state.text1};
      default:
        return {...state}
    }
  }