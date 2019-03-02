import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createServerNode, createFirewallNode, createRouterNode } from './actions/simpleAction';
import { bindActionCreators } from "redux"


const mapDispatchToProps = dispatch => (bindActionCreators({
    createServerNode: ()  => dispatch(createServerNode()),
  createRouterNode: ()  => dispatch(createRouterNode()),
  createFirewallNode: ()  => dispatch(createFirewallNode()),
  }, dispatch))
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })

class NodeCreator extends React.Component {

    createServerNode = (event) => {
        this.props.createServerNode();
      }
      createRouterNode = (event) => {
        this.props.createRouterNode();
      }
      createFirewallNode = (event) => {
        this.props.createFirewallNode();
      }

    
  
    render() {
      return (
          <div>
         <button onClick={this.createServerNode}>Add a Server</button>
         <button onClick={this.createRouterNode}>Add a Router</button>
         <button onClick={this.createFirewallNode}>Add a Firewall</button>
        </div>
        );
    }
    
}

  export default connect(mapStateToProps, mapDispatchToProps)(NodeCreator);