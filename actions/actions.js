import {SIMPLE_ACTION, CHANGE_EDIT_MODE, CREATE_SERVER_NODE, CREATE_EDGE, CREATE_ROUTER_NODE, CREATE_SEPERATE_ROUTER_NODE, CREATE_FIREWALL_NODE, FETCH_NODE_DATA_FAILURE, FETCH_NODE_DATA_SUCCESS, FETCH_NODE_DATA_REQUEST, FETCH_TEMPLATES_FAILURE, FETCH_TEMPLATES_SUCCESS, FETCH_TEMPLATES_REQUEST} from './constants'
import customData from './jsontest.js'

export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   };

  export const createServerNode = (fromNode, toNode, imageType) => ({
    type: CREATE_SERVER_NODE,
    fromNode,
    toNode,
    imageType
  });

  export const createRouterNode = (fromNode, toNode) => ({
    type: CREATE_ROUTER_NODE,
    fromNode,
    toNode
  });

  export const createSeperateRouterNode = () => ({
    type: CREATE_SEPERATE_ROUTER_NODE,
  });

  export const createFirewallNode = () => ({
    type: CREATE_FIREWALL_NODE,
  });


  export const createEdge = (fromNode, toNode) => ({
    type: CREATE_EDGE,
    fromNode,
    toNode,
  });

  export const fetchNodeDataRequest = () => ({
    type: FETCH_NODE_DATA_REQUEST,
  });
  
  export const fetchNodeDataSuccess = data => ({
    type: FETCH_NODE_DATA_SUCCESS,
    data,
  });
  
  export const fetchNodeDataFailure = error => ({
    type: FETCH_NODE_DATA_FAILURE,
    error,
  });

  export const fetchTemplatesRequest = () => ({
    type: FETCH_TEMPLATES_REQUEST,
  });
  
  export const fetchTemplatesSuccess = data => ({
    type: FETCH_TEMPLATES_SUCCESS,
    data,
  });
  
  export const fetchTemplatesFailure = error => ({
    type: FETCH_TEMPLATES_FAILURE,
    error,
  });
  export const changeEditMode = () => ({
    type: CHANGE_EDIT_MODE,
  });
//    export const createServerNode = () => dispatch => {
//     dispatch({
//      type: 'CREATE_SERVER_NODE',
//     })
//    };

//    export const createRouterNode = () => dispatch => {
//     dispatch({
//      type: 'CREATE_ROUTER_NODE',
//     })
//    };

//    export const createFirewallNode = () => dispatch => {
//     dispatch({
//      type: 'CREATE_FIREWALL_NODE',
//     })
//    };

//    export const createEdge = (fromNode, toNode) => dispatch => {
//     dispatch({
//      type: 'CREATE_EDGE',
//      toNode,
//      fromNode,
//     //  nodeLength: state.nodeLength++,
//     })
//    };

export function fetchTemplates() {
  return dispatch => {
    dispatch(fetchTemplatesRequest());
    return fetch('http://127.0.0.1:8080/192.168.99.100:81/api/getavailabletemplates')    
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTemplatesSuccess(json));
        return json.data;
      })
      .catch(error => dispatch(fetchTemplatesFailure(error)));
  };
}


// Must correct data forma
// export function fetchNodeData() {
//   return dispatch => {
//     dispatch(fetchNodeDataRequest());
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')    
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchNodeDataSuccess(json.data));
//         return json.data;
//       })
//       .catch(error => dispatch(fetchNodeDataFailure(error)));
//   };
// }