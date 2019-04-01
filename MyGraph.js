import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';
import { connect } from 'react-redux';
import * as d3 from "d3";

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

class MyGraph extends Component {
    constructor(props)  {
      
      super(props);
      this.state = {
        nodes: this.props.topologyReducer.nodes,
        edges: this.props.topologyReducer.edges,
      }
      }
  
      componentWillMount() {
        console.log("i mounted");
    
      }
  
      componentWillReceiveProps(nextProps) {
        console.log('I got new props', nextProps);
        this.setState({
          nodes : nextProps.topologyReducer.nodes,
          edges: nextProps.topologyReducer.edges
      });
    }
 
// graph payload (with minimalist structure)
 getData(){
    const nodeData=({
    nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
    links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]});
        return (nodeData);
    
};
 
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
getmyConfig(){
    const myConfig={
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }}
    return(myConfig)
};
 
// // graph event callbacks
// onClickGraph(){
//     window.alert(`Clicked the graph background`);
// };
 
// onClickNode(){
//     window.alert(`Clicked node ${nodeId}`);
// };
 
// onRightClickNode(){
//     window.alert(`Right clicked node ${nodeId}`);
// };
 
// onMouseOverNode(){
//     window.alert(`Mouse over node ${nodeId}`);
// };
 
// onMouseOutNode(){
//     window.alert(`Mouse out node ${nodeId}`);
// };
 
// onClickLink(){
//     window.alert(`Clicked link between ${source} and ${target}`);
// };
 
// onRightClickLink(){
//     window.alert(`Right clicked link between ${source} and ${target}`);
// };
 
// onMouseOverLink(){
//     window.alert(`Mouse over in link between ${source} and ${target}`);
// };
 
// onMouseOutLink(){
//     window.alert(`Mouse out link between ${source} and ${target}`);
// };

render() {
    console.log(this.nodes(), 'this.nodes')
    console.log(this.nodes().props.children, 'children')
    console.log(this.state,"state");
    return (
      
        <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data="nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }]}
        links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]"
        config="nodeHighlightBehavior: true,
        node: {
            color: 'lightgreen',
            size: 120,
            highlightStrokeColor: 'blue'
        },
        link: {
            highlightColor: 'lightblue'
        }"
        // onClickNode={this.onClickNode()}
        // onRightClickNode={this.onRightClickNode()}
        // onClickGraph={this.onClickGraph()}
        // onClickLink={this.onClickLink()}
        // onRightClickLink={this.onRightClickLink()}
        // onMouseOverNode={this.onMouseOverNode()}
        // onMouseOutNode={this.onMouseOutNode()}
        // onMouseOverLink={this.onMouseOverLink()}
        // onMouseOutLink={this.onMouseOutLink()}
    />
     
      // this.myNetwork()
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGraph);
 

      