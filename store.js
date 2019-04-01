/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialstate';



const InitialState = {
  nodes: [
  {
      id:1,
      nodeType: "router",
      imageType: "",
  },
],
   nodeLength: 1,
// data on the current battle
edges: [
  
],
  edgeLength: 0,
};


export default function configureStore(preloadedState=InitialState) {
 return createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk))
   );
}