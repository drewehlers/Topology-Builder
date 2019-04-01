import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/actions';
import NodeCreator from './NodeCreator';
import NodeList from './NodeList'

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


class NodeDescription extends Component {

 render() {
  return (
   <div >
     <ul >
  <li>Server ID : {this.props.id}</li>
  <li>VM Image Type: {this.props.imageType}</li>
  <li>IP Address: ...initializing</li>
  <li>VM URL: ...initializing</li>
</ul>
   
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeDescription);