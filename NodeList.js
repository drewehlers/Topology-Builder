import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import { connect } from 'react-redux';
import NodeDescription from './NodeDescription';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    
  })
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    nodes: state.nodes,
    edges: state.edges,
    ...state
  })
    
class NodeList extends Component {
  constructor(props)  {
    
    super(props);
    }
    
    
    nodes(){
      
        const nodesItems = this.props.topologyReducer.nodes.map((node) =>
            <NodeDescription key= {node.id} id={node.id} nodeType={node.nodeType}/>
        );
        
        return (
            <>
                {nodesItems}
            </>
        );
    }

  edges(){
      
      const edgesItems = this.props.topologyReducer.edges.map((edge) => ({id:edge.id, fromNode:edge.fromNode, toNode:edge.toNode}))
      
      return (
          <>
              {edgesItems}
          </>
      );
  }
  
    
  render() {
     
    return (
     
        this.nodes().props.children
         
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeList);