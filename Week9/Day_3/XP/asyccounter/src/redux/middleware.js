const log = (store) => (next) => (action) => {
    // Our middleware
    // console.log("---IN THE MIDDLEWARE---")
    // console.log(`Redux Log:`, action)
    // call the next function
    console.log('in the middleware: ',JSON.stringify(action))
   
        next(action);
    console.log(' state after action: ', store.getState());
   
}

export {
    log,
}