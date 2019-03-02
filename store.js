/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialstate';


const store = {
  nodes: [
  {
      id:1,
      nodeType: "server",
  },
  {
      id:2,
      nodeType: "server",
  },
  {
      id: 3,
      nodeType: "server",
  },
  {
      id: 4,
      nodeType: "server",
  }
],
// data on the current battle
links: [
  {
      id:1,
      fromNode: 1,
      toNode: 2,
  }
]
};

console.log(store)
export default function configureStore(preloadedState=store) {
 return createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk)
 ));
}