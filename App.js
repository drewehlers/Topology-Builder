import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { simpleAction, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/simpleAction';
import TopologyFullView from './TopologyFullView';
import EdgeForm from './EdgeForm';
import MyNetwork from './MyNetwork';
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
   <div className="Topology">
    <MyNetwork/>
    <TopologyFullView/>
    <EdgeForm/>
    <NodeCreator/>
    <NodeList/>
    {/* <NodeCreator/> */}
    {/* <button onClick={this.createServerNode}>Test adding a Node action</button>
    <button onClick={this.createRouterNode}>Test adding a Node action</button>
    <button onClick={this.createFirewallNode}>Test adding a Node action</button>
    <button onClick={this.createEdge}>Test adding a Edge action</button>
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
    <pre>
      {
        JSON.stringify(this.props)
      }
      </pre>
    <button onClick={this.simpleAction}>Test redux action</button>
   
    
    
    </p> */}
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);