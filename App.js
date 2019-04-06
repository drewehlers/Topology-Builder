import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { simpleAction, changeEditMode, createServerNode, createEdge, createFirewallNode, createRouterNode } from './actions/actions';
import TopologyFullView from './TopologyFullView';
import EdgeForm from './EdgeForm';
import MyNetwork from './MyNetwork';
import NodeCreator from './NodeCreator';
import NodeList from './NodeList';
import TopologySaver from './TopologySaver';
import serversvg from './images/server.svg';
import firewalljpg from './images/firewall.jpg';
import MyGraph from './MyGraph';
import RouterDescription from './RouterDescription';
import RouterList from './RouterList';


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  createServerNode: ()  => dispatch(createServerNode()),
  changeEditMode: () => dispatch(changeEditMode()),
  createRouterNode: ()  => dispatch(createRouterNode()),
  createFirewallNode: ()  => dispatch(createFirewallNode()),
  createEdge: (fromNode, toNode) => dispatch(createEdge(fromNode, toNode)),
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  canEdit: state.canEdit,
  ...state
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canEdit: this.props.topologyReducer.canEdit,
    }}

    componentWillMount() {
      this.setState({
        canEdit : this.props.topologyReducer.canEdit
    });
    }
    componentWillReceiveProps(nextProps) {
      
      this.setState({
        canEdit : nextProps.topologyReducer.canEdit,
    });
  }

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
  changeEditMode = (event) => {
    this.props.changeEditMode();
  }

  edit(){
      
    if (this.state.canEdit){
    return (
      <div className="Topology Builder">
      
       <div className="Containter">
       <div className="Left">
       Welcome to our Topology Builder!
       <MyNetwork/>
       {/* <TopologyFullView/> */}
       {/* <EdgeForm/> */}
       <NodeCreator/>
       <TopologySaver/>
       <br/>
       <button onClick={this.changeEditMode}>Enter View Mode</button>
       </div>
       <div className="Right" >
       <NodeList/>
       <br/>
       <br/>
       <RouterList/>
       </div>
       <div id="clear" ></div>
       </div>
        </div>
     );}
     return(
      <div className="Topology Builder">
    
      <div className="Containter">
      <div className="Left">
      Welcome to our Topology Builder!
      <MyNetwork/>
      <button onClick={this.changeEditMode}>Enter Edit Mode</button>
      {/* <TopologyFullView/> */}
      {/* <EdgeForm/> */}
      </div>
      <div className="Right" >
      <NodeList/>
      <br/>
      <br/>
      <RouterList/>
      </div>
      <div id="clear" ></div>
      </div>
       </div>
     );
}



 render() {
   console.log(this.props.topologyReducer.canEdit, this.state.canEdit, "line 119")
  return (
    <div>
    {this.edit()}
    </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);