import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import { connect } from 'react-redux';
import serversvg from './images/server.svg';
import { MdRouter, MdComputer} from "react-icons/md";
import { FaFire } from "react-icons/fa";
import firewalljpg from './images/firewall.jpg';
import routersvg from './images/router.svg';
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
        viewBox={`0 0 ${viewBox} ${viewBox}`}
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
      "dragView": "false",
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
    this.networkref = React.createRef();
    this.state = {
      nodes: this.props.topologyReducer.nodes,
      edges: this.props.topologyReducer.edges,
    }
    }

    componentWillMount() {
      
  
    }

    componentWillReceiveProps(nextProps) {
      
      this.setState({
        nodes : nextProps.topologyReducer.nodes,
        edges: nextProps.topologyReducer.edges
    });
    var Network = this.refs.MyNetwork;
    
    var options = {
      layout: {
        
        
          hierarchical: {
              direction: "UD",
              sortMethod: "directed",
              nodeSpacing: 200,
              treeSpacing: 400
          }
      },
      interaction: {
          dragNodes: false,
          // "dragView": "false",
          // "zoomView": "false",
    
      },
      edges: {
          smooth: {
              type: "continuous"
          }
      },
      physics: {
        stabilization: {
            enabled: true,
            iterations: 5000, // maximum number of iteration to stabilize
            fit: true
        },
    }
      };
  Network.network.setOptions(options);
  Network.network.fit();
  }
    
    
    nodes(){
      
      var nodesItems = [];

      const Router = './images/router.svg';
      const Firewall = './images/firewall.jpg'
      const server = './images/server.svg'
      this.state.nodes.map((node) => {
        
      if (node.nodeType=="router") {
        nodesItems.push(<Node key= {node.id} id={node.id} label={node.nodeType} title={node.id} component={CustomIcon} icon={MdRouter} color="black" />);
      }
      if (node.nodeType=="firewall") {
        nodesItems.push(<Node key= {node.id} id={node.id} label={node.nodeType}  title={node.id} component={CustomIcon} icon={FaFire} color="black"/>);
      }
      if (node.nodeType=="server") {
        nodesItems.push(<Node key= {node.id} id={node.id} label={node.nodeType}  title={node.id} component={CustomIcon} icon={MdComputer} color="black"/>);
      }}
      
      
      );
      return (
        <>
            {nodesItems}
        </>
    );
  }

  edges(){
      
      const edgesItems = this.state.edges.map((edge) => 
          <Edge key = {edge.id} id={edge.id} from={edge.fromNode} to={edge.toNode}         />
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
    
    return (
      
      <Network options={options} ref="MyNetwork">
      
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

// <div id="mynetwork"></div>       


// <script type="text/javascript">
// var firewall = "https://www.shareicon.net/data/128x128/2016/05/12/764037_security_512x512.png";
// var server = "http://www.clker.com/cliparts/7/A/Y/v/h/E/server-md.png"
// var router = "https://d29fhpw069ctt2.cloudfront.net/icon/image/49244/preview.svg"
//     // create an array with nodes
//     var nodes = new vis.DataSet([
//         {id: 1, label: 'Router 1', shape: 'circularImage', image: router, "title": "10.148.132.134"},
//         {id: 2, label: 'Server 2', shape: 'circularImage', image: server, "title": "10.148.132.139"},
//         {id: 3, label: 'Server 3', shape: 'circularImage', image: server, "title": "10.148.132.124"},
//         {id: 4, label: 'Server 4', shape: 'circularImage', image: server, "title": "10.148.132.194"},
//         {id: 5, label: 'Server 5', shape: 'circularImage', image: server, "title": "10.148.132.130"},
//         {id: 6, label: 'Firewall 1', shape: 'circularImage', image: firewall, "title": "10.148.132.634"},
//         {id: 7, label: 'Server 7', shape: 'circularImage', image: server, "title": "10.148.132.934"},
//         {id: 8, label: 'Server 8', shape: 'circularImage', image: server, "title": "10.148.132.134"},
//     ]);

//     // create an array with edges
//     var edges = new vis.DataSet([
//         {from: 1, to: 3},
//         {from: 1, to: 2},
//         {from: 2, to: 4},
//         {from: 1, to: 5},
//         {from: 2, to: 6},
//         {from: 6, to: 7},
//         {from: 7, to: 8},
//     ]);

//     // create a network
//     var container = document.getElementById('mynetwork');

//     // provide the data in the vis format
//     var data = {
//         nodes: nodes,
//         edges: edges
//     };
    
//     var options = {
//         "layout": {
//             "hierarchical": {
//                 "direction": "UD",
//                 "sortMethod": "directed",
//                 "nodeSpacing": 200,
//                 "treeSpacing": 400
//             }
//         },
//         "edges": {
//             "smooth": {
//                 "type": "continuous"
//             }
//         },
//         // "nodes": {
//         //     "physics": false
//         // }
//         };

//     // initialize your network!
//     var network = new vis.Network(container, data, options);
// </script>
// </div>