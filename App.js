import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import TopologyFullView from './TopologyFullView';
import MyNetwork from './MyNetwork';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
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
 render() {
  return (
   <div className="Topology">
    <MyNetwork/>
    <TopologyFullView/>
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
    
    
    </p>
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);