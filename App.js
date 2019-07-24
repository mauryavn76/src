// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
// }
// }

// export default App;



import { createStore, combineReducers,applyMiddleware } from "redux";
 
//  const initialState = {
//    result: 1,
//    lastValue: [],
//    name: "Mukesh"
//  };

// const reducer = (state = initialState, action) => {
//    switch (action.type) {
//       case "ADD":
//        state = {
//          ...state,
//          result: state.result + action.payload,
//         lastValue: [...state.lastValue, action.payload]
//        };
      
//       // state=state + action.payload; 
//       break;
//       case "SUBTRACT":
//        state = {
//             ...state,
//             result: state.result - action.payload,
//             lastValue: [...state.lastValue, action.payload]
//          }
         
//       // state=state - action.payload;
//       break;
//     }
//   return state;
// };


// const store =  createStore(reducer);

// store.subscribe(() => {
//   console.log("Store Update !...", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 10
// });

// store.dispatch({
//   type: "ADD",
//   payload: 9
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 2
// });





 mathReducer = (state = {
  result: 1,
  lastValue: []
}, action) => {
  switch (action.type) {
     case "ADD":
      state = {
        ...state,
       console.log("Printing Addintion of numbers");
        result: state.result + action.payload,
       lastValue: [...state.lastValue, action.payload]
      };
     
     // state=state + action.payload; 
     break;
     case "SUBTRACT":
      state = {
           ...state,
           result: state.result - action.payload,
           lastValue: [...state.lastValue, action.payload]
        }
        
     // state=state - action.payload;
     break;
   }
 return state;
};


const nameReducer = (state = {
  userName: "Mukesh",
  age: 26
}, action) => {
  switch (action.type) {
     case "UASE_NAME":
      state = {
        ...state,
        userName: action.payload
       
      };
     
     // state=state + action.payload; 
     break;
     case "AGE":
      state = {
           ...state,
           age: action.payload
        }
        
     // state=state - action.payload;
     break;
   }
 return state;
};

const myLogger = (store) => (next) => (action) => {
  console.log("Logger Action ",action);
  next(action)
}

const store =  createStore(combineReducers({mathReducer,nameReducer}),
  {},
  applyMiddleware(myLogger)
);

store.subscribe(() => {
 console.log("Store Update !...", store.getState());
});

store.dispatch({
 type: "ADD",
 payload: 10
});

store.dispatch({
 type: "ADD",
 payload: 9
});
store.dispatch({
 type: "SUBTRACT",
 payload: 2
});
store.dispatch({
  type: "AGE",
  payload: 35
})
