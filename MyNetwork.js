import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import { connect } from 'react-redux';
import store from './store';
import initialState from './initialstate';
import PropTypes from 'prop-types';

/* 
 * mapDispatchToProps
*/
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
  
  
  const CustomIcon = ({ icon, color = '#5596ed' }) => {
  const viewBox = 36;
  const iconSize = 20;
  const pad = (viewBox - iconSize) / 2;
  const center = viewBox / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g>
        <circle cx={center} cy={center} r={16} fill={color} />
        <g transform={`translate(${pad}, ${pad})`}>
          {React.createElement(icon, { color: 'white', size: iconSize })}
        </g>
      </g>
    </svg>
  );
};

var options = {
  "layout": {
      "hierarchical": {
          "direction": "UD",
          "sortMethod": "directed",
          "nodeSpacing": 200,
          "treeSpacing": 400
      }
  },
  "interaction": {
      "dragNodes": false,
      // "dragView": "false",
      // "zoomView": "false",

  },
  "edges": {
      "smooth": {
          "type": "continuous"
      }
  }};
  
class MyNetwork extends Component {
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
    
    
    nodes(){
      
      const nodesItems = this.state.nodes.map((node) =>
          <Node key= {node.id} id={node.id} label={node.nodeType}/>

      );
      return (
        <>
            {nodesItems}
        </>
    );
  }

  edges(){
      
      const edgesItems = this.state.edges.map((edge) => 
          <Edge key = {edge.id} id={edge.id} from={edge.fromNode}  to={edge.toNode}         />
      );
      return (
          <>
              {edgesItems}
          </>
      );
      
      
  }
  
  // drawNetwork(chartData) {
  //   const chart = document.getElementById('chart'); //fails if DOM not rendered
  //  //appends an svg to #chart html element and draws a d3 Chart
  //  //assuming you chart function as Chart(element, data);
  //   if(chart && chartData){ //draw only if DOM rendered and have chartData
  //     new Chart(chart, chartData); //calls to draw graph
  //   }
  // }
  // myNetwork(){
  //   const Network = <Network options={options}>
  //   {this.state.nodes.props.children}
  //   {this.state.edges.props.children}
  //   {/* {this.edges().props.children} */}
  //   </Network>;
  //   return (
  //     <>
  //         {Network}
  //     </>
  // );
  // }
    
  render() {
    console.log(this.nodes(), 'this.nodes')
    console.log(this.nodes().props.children, 'children')
    console.log(this.state,"state");
    return (
      <Network options={options}>
      
         {this.nodes().props.children}
         {this.edges().props.children}
         {/* {this.state.nodes}
         {this.state.edges} */}
      </Network>
      // this.myNetwork()
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);