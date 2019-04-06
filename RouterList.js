import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouterDescription from './RouterDescription';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    
  })
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    routers: state.routers,
    edges: state.edges,
    ...state
  })
    
class RouterList extends Component {
  constructor(props)  {
    
    super(props);

    this.state = {
      routers: this.props.topologyReducer.routers,
      edges: this.props.topologyReducer.edges,
      servers: this.props.topologyReducer.servers
    }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        routers : nextProps.topologyReducer.routers,
        edges: nextProps.topologyReducer.edges,
        servers: nextProps.topologyReducer.servers
    });
  }
    
    routers(){
      
        const routersItems = this.state.routers.map((router) =>
            <RouterDescription key= {router.id} id={router.id} />
        );
        
        return (
            <>  <div>
              Router Information
            </div>
                {routersItems}
            </>
        );
    }

  
  
    
  render() {
     
    return (
     
        this.routers().props.children
         
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RouterList);