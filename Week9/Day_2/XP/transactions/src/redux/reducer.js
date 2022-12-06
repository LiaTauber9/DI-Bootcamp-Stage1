const initState = {
    list:[],
    currentTransaction:{
        accountNumber:'',
        FSC:'',
        name:'',
        amount:''     
    },
    index:-1
}
export const reducer = (state = initState, action = {}) => {
    switch(action.type){
        case 'INSERT':
            return({...initState, list:action.payload});
        case 'UPDATE':
            return {...initState,list:action.payload, index:action.index}
        default: 
            return {...initState, }
    }
    
}