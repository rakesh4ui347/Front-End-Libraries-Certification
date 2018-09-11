// Redux is a state management framework that can be used 
//with a number of different web technologies, including React.
//In Redux, there is a single state object that's responsible for 
//the entire state of your application. 
// The Redux store is an object which holds and manages application state. 

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store= Redux.createStore(reducer);