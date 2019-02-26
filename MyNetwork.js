import React, { Component } from 'react';
import { Network, Node, Edge } from '@lifeomic/react-vis-network';
import { connect } from 'react-redux';
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
  "edges": {
      "smooth": {
          "type": "continuous"
      }
  }};

class MyNetwork extends Component {
  constructor(props)  {
    super(props);
    this.state = {nodes: props.nodes, edges: props.edges, options:props.options};
    }
  
  render() {
    return (
      <Network options={options}>
        <Node id="1" label="Router" />
        <Node id="2" label="Server" />
        <Node id="3" label="Server" />
        <Edge id="4" from="1" to="2" />
        <Edge id="5" from="1" to="3" />
      </Network>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);