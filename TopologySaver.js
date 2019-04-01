import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetch} from 'whatwg-fetch';


const mapDispatchToProps = dispatch => ({
    
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class TopologySaver extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    
;
  }

      handleClick()
    {
      var myTopology = this.props.topologyReducer;
      

      fetch('http://192.168.99.100:81/api/posttest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
       },
        data: JSON.stringify(myTopology)
      })
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
          });
        }
      });
        
}
    
      // handleSubmit(e) {
      //   console.log('here first')
      //   e.preventDefault();
      //   console.log('here i am')
      //   console.log(this.props.topologyReducer.nodeLength+1)
      //   console.log(this.refs.imageType.value)
      //   this.props.createServerNode(1, this.props.topologyReducer.nodeLength+1, this.refs.imageType.value);
      // }
  
    render() {
      return (
          <div>
          <button onClick={this.handleClick}>Save your Topology</button>
        </div>
        );
    }
    
}

  export default connect(mapStateToProps, mapDispatchToProps)(TopologySaver);