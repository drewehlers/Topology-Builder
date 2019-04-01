import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEdge } from './actions/actions';
import { bindActionCreators } from "redux"


const mapDispatchToProps = dispatch => (bindActionCreators({
    createEdge: (fromNode, toNode) => dispatch(createEdge(fromNode,toNode)),
  }, dispatch))
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })

class EdgeForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
          fromNode: 0, 
          toNode: 0,
        };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFromNode(event) {
        console.log('made it to action', event, this.props, this.state)
        this.setState({fromNode: event.target.value});
        event.preventDefault();
      }

    handleToNode(event) {
        this.setState({toNode: event.target.value});
        event.preventDefault();
      }
  
      
    handleSubmit(event) {
        event.preventDefault();
 
      this.props.createEdge(this.state.fromNode, this.state.toNode)
 
     
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Create an Edge from Node #:
            <input type="number" name="fNode" value={this.state.fromNode} onChange= {this.handleFromNode.bind(this)}/>
          </label>
          <label>
            to Node #:
            <input type="number" name="tNode" value={this.state.toNode} onChange= {this.handleToNode.bind(this)}/>
          </label>
          <input type="submit" value="Submit" />
          <div>
            (hovering over a node will reveal its node #)
          </div>
        </form>
      );
    }
    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EdgeForm);