import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/simpleAction';
import NodeCreator from './NodeCreator';
import NodeList from './NodeList'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  createServerNode: ()  => dispatch(createServerNode()),
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


class NodeDescription extends Component {

 render() {
  return (
   <div >
     Node {this.props.id} of type {this.props.nodeType}
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeDescription);