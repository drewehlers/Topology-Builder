import React, { Component } from 'react';
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

    this.state = {
      nodes: this.props.topologyReducer.nodes,
      edges: this.props.topologyReducer.edges,
      servers: this.props.topologyReducer.servers
    }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        nodes : nextProps.topologyReducer.nodes,
        edges: nextProps.topologyReducer.edges,
        servers: nextProps.topologyReducer.servers
    });
  }
    
    nodes(){
      
        const nodesItems = this.state.servers.map((node) =>
            <NodeDescription key= {node.id} id={node.id} nodeType={node.nodeType} imageType={node.imageType}/>
        );
        
        return (
            <>  <div>
              Server Information
            </div>
                {nodesItems}
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