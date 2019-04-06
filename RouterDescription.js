import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/actions';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  createServerNode: ()  => {dispatch(createServerNode())},
  createRouterNode: ()  => dispatch(createRouterNode()),
  createFirewallNode: ()  => dispatch(createFirewallNode()),
  createEdge: (fromNode, toNode) => dispatch(createEdge(fromNode, toNode)),
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})


class RouterDescription extends Component {

 render() {
  return (
   <div >
     <ul >
  <li>Router ID : {this.props.id}</li>
  <li>IP Address: ...initializing</li>
  <li>VM URL: ...initializing</li>
</ul>
   
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(RouterDescription);