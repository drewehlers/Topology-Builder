import React, { Component } from 'react';
import { connect } from 'react-redux';


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


class TopologyFullView extends Component {

  
 render() {
  return (
   <div>
    This is a Component
   </div>
  );
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopologyFullView);