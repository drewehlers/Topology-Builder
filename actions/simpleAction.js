import {SIMPLE_ACTION, CREATE_SERVER_NODE, CREATE_EDGE, CREATE_ROUTER_NODE, CREATE_FIREWALL_NODE} from './constants'

export const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   };

   export const createServerNode = () => dispatch => {
    dispatch({
     type: 'CREATE_SERVER_NODE',
    })
   };

   export const createRouterNode = () => dispatch => {
    dispatch({
     type: 'CREATE_ROUTER_NODE',
    })
   };

   export const createFirewallNode = () => dispatch => {
    dispatch({
     type: 'CREATE_FIREWALL_NODE',
    })
   };

   export const createEdge = (fromNode, toNode) => dispatch => {
    dispatch({
     type: 'CREATE_EDGE',
     toNode,
     fromNode,
    //  nodeLength: state.nodeLength++,
    })
   };

