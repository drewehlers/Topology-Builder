import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import Popup from "reactjs-popup";
import { createServerNode, createFirewallNode, createRouterNode, fetchTemplates} from './actions/actions';
import { bindActionCreators } from "redux"


const mapDispatchToProps = dispatch => ({
  createServerNode: (fromNode, toNode, imageType)  => {dispatch(createServerNode(fromNode, toNode, imageType))},
  createRouterNode: ()  => {dispatch(createRouterNode())},
  createFirewallNode: ()  => {dispatch(createFirewallNode())},
  createFirewallNode: ()  => {dispatch(createFirewallNode())},
  fetchTemplates: () => {dispatch(fetchTemplates())}
  } )
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })

class NodeCreator extends React.Component {
  constructor(props) {
    super(props);
    const firsttoNode = this.props.topologyReducer.nodeLength+1;
    this.state = {
      toNode: firsttoNode,
      imageType: "Ubuntu Standard", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    
;
  }
  componentWillReceiveProps(nextProps) {
  
    this.setState({
      toNode : nextProps.topologyReducer.nodeLength+1,
      
  });
}

  componentWillMount() {
    this.props.fetchTemplates();
    this.setState({
      toNode : this.props.topologyReducer.nodeLength+1,
  });
  }

    // createServerNode = (fromNode, toNode, imageType) => {
      
       
    //     console.log('here i am')
    //     console.log(this.props.topologyReducer.nodeLength+1)
    //     console.log(this.refs.imageType.value)
    //     this.props.createServerNode(1, this.props.topologyReducer.nodeLength+1, this.refs.imageType.value);
        
    //   }
      createRouterNode = (event) => {
        this.props.createRouterNode();
      }
      createFirewallNode = (event) => {
        this.props.createFirewallNode();
      }

      handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.createServerNode(1, this.state.toNode, this.state.imageType)
       
      }

      handleChange(e) {
        this.setState({ imageType: e.target.value});
      }

      // getOptions = () => {
      //   this.props.topologyReducer.templates.map(template => { 
      //     return <option value={template.id_string}> {template.id_string} </option>;
      //     })
      // }
      
  
    render() {
      // var options = this.getOptions();
      return (
          <div>
          {/* <button onClick={this.createServerNode()}>Add a Server</button> */}
          <Popup trigger={<button> Add a Server</button>} position="right center">
          <div>Please select your Image Type</div>
          <form onSubmit={this.handleSubmit}>
          <select ref="imageType" value={this.state.imageType} onChange={this.handleChange}>
          <option value="Ubuntu Standard">Ubuntu Standard</option>
          <option value="CentOS Standard">CentOS Standard</option>
          <option value="Ubuntu LAMP">Ubuntu LAMP</option>
          <option value="Ubuntu Bind DNS">Ubuntu Bind DNS</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
  </Popup>
         <button onClick={this.createRouterNode}>Add a Router</button>
         <button onClick={this.createFirewallNode}>Add a Firewall</button>
        </div>
        );
    }
    
}

  export default connect(mapStateToProps, mapDispatchToProps)(NodeCreator);