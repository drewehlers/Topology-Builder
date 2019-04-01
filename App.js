import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { simpleAction, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/actions';
import TopologyFullView from './TopologyFullView';
import EdgeForm from './EdgeForm';
import MyNetwork from './MyNetwork';
import NodeCreator from './NodeCreator';
import NodeList from './NodeList';
import TopologySaver from './TopologySaver';
import serversvg from './images/server.svg';
import firewalljpg from './images/firewall.jpg';
import MyGraph from './MyGraph';


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


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  createServerNode = (event) => {
    this.props.createServerNode();
  }
  createRouterNode = (event) => {
    this.props.createRouterNode();
  }
  createFirewallNode = (event) => {
    this.props.createFirewallNode();
  }
  createEdge = (event) => {
    this.props.createEdge();
  }
 render() {
  return (
   <div className="Topology Builder">
   
    <div className="Containter">
    <div className="Left">
    Welcome to our Topology Builder!
    <MyNetwork/>
    {/* <TopologyFullView/> */}
    <EdgeForm/>
    <NodeCreator/>
    <TopologySaver/>
    </div>
    <div className="Right" >
    <NodeList/>
    </div>
    <div id="clear" ></div>
    </div>
     </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);