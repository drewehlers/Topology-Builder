

const InitialState = {
  nodes: [
  {
      id:1,
      nodeType: "router",
      imageType: "",
      ip: "",
      VMurl: ""
  },
],
  servers: [

  ],
   isFetchingNodeData: false,
   fetchNodeDataSuccess: false,
   fetchNodeDataFailure: false,
   nodeLength: 1,
   serverLength: 0,
    edges: [  
    ],
    
    edgeLength: 0,
    templates: [
      {
      }
    ],
    isfetchingTemplates: false,
    fetchTemplatesSuccess: false,
    fetchTemplatesFailed: false,
};

export default (state = InitialState, action) => {
    switch (action.type) {
     case 'CREATE_SERVER_NODE':
     var newNode = {
      id:state.nodeLength+1,
      nodeType: 'server',
      imageType: action.imageType
      }
      var newServer = {
        id:state.serverLength+1,
        nodeType: 'server',
        imageType: action.imageType
      }
      // var newEdge = {
      //   id: state.edgeLength + 1,
      //   fromNode: action.fromNode,
      //   toNode: action.toNode,
        
      //  }
      return {
        ...state,
        nodes: [...state.nodes, newNode],
        servers: [...state.servers, newServer],
        nodeLength: state.nodeLength+1,
        serverLength: state.serverLength+1,
        // edges: [...state.edges, newEdge],
        // edgeLength: state.edgeLength+1,
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
      
      case 'FETCH_NODE_DATA_REQUEST':
      return {
        ...state,
        isFetchingNodeData: true,
        fetchNodeDataSuccess:false,
        fetchNodeDataFailure:false,
      };

    case 'FETCH_NODE_DATA_SUCCESS':
      
      return {
        ...state,
        isFetchingNodeData: false,
        data: action.data,
        fetchNodeDataSuccess:true,
        fetchNodeDataFailure:false,
      };

    case 'FETCH_NODE_DATA_FAILURE':
     
      return {
        ...state,
        isFetchingNodeData: false,
        fetchNodeDataSuccess:false,
        fetchNodeDataFailure:true,
      };
      case 'FETCH_TEMPLATES_REQUEST':
      return {
        ...state,
        isFetchingTemplates: true,
        fetchTemplatesSuccess:false,
        fetchTemplatesFailure:false,
      };

    case 'FETCH_TEMPLATES_SUCCESS':
      
      return {
        ...state,
        isFetchingTemplates: false,
        templates: action.data,
        fetchTemplatesSuccess:true,
        fetchTemplatesFailure:false,
      };

    case 'FETCH_TEMPLATES_FAILURE':
     
      return {
        ...state,
        isFetchingTemplates: false,
        fetchTemplatesSuccess:false,
        fetchTemplatesFailure:true,
      };
     default:
      return state
    }
   }

   