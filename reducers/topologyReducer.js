

const InitialState = {
  nodes: [
  {
      id:1,
      nodeType: "router",
  },
],
   nodeLength: 1,
// data on the current battle
edges: [
  
],
  edgeLength: 0,
};

export default (state = InitialState, action) => {
    switch (action.type) {
     case 'CREATE_SERVER_NODE':
     var newNode = {
      id:state.nodeLength+1,
      nodeType: 'server',
      
    }
      return {
        ...state,
        nodes: [...state.nodes, newNode],
        nodeLength: state.nodeLength+1,
        // nodeLength: ...state.nodeLength++,
        }
      case 'CREATE_ROUTER_NODE':
     var newNode = {
      id:state.nodeLength+1,
      nodeType: 'router',
      
    }
      return {
        ...state,
        nodes: [...state.nodes, newNode],
        nodeLength: state.nodeLength+1,
        // nodeLength: ...state.nodeLength++,
        }
      case 'CREATE_FIREWALL_NODE':
     var newNode = {
      id:state.nodeLength+1,
      nodeType: 'firewall',
      
      }
        return {
        ...state,
        nodes: [...state.nodes, newNode],
        nodeLength: state.nodeLength+1,
        // nodeLength: ...state.nodeLength++,
        }
      case 'CREATE_EDGE':
     var newEdge = {
      id: state.edgeLength + 1,
      fromNode: action.fromNode,
      toNode: action.toNode,
      
     }
     console.log(action.toNode, 'toNode')
     console.log(action.fromNode)
      return {
        ...state,
        edges: [...state.edges, newEdge],
        edgeLength: state.edgeLength+1,
        }
      
     default:
      return state
    }
   }