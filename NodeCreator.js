import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import Popup from "reactjs-popup";
import { createServerNode, createFirewallNode, createSeperateRouterNode, createRouterNode, fetchTemplates} from './actions/actions';
import { bindActionCreators } from "redux"


const mapDispatchToProps = dispatch => ({
  createServerNode: (fromNode, toNode, imageType)  => {dispatch(createServerNode(fromNode, toNode, imageType))},
  createRouterNode: (fromNode, toNode)  => {dispatch(createRouterNode(fromNode, toNode))},
  createSeperateRouterNode: ()  => {dispatch(createSeperateRouterNode())},
  createFirewallNode: ()  => {dispatch(createFirewallNode())},
  fetchTemplates: () => {dispatch(fetchTemplates())}
  } )
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    routers: state.routers,
    ...state
    
  })

class NodeCreator extends React.Component {
  constructor(props) {
    super(props);
    const firsttoNode = this.props.topologyReducer.nodeLength+1;
    this.state = {
      routers: this.props.topologyReducer.routers,
      toNode: firsttoNode,
      selectedRouter: 1,
      imageType: "Ubuntu Standard", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    
;
  }
  componentWillReceiveProps(nextProps) {
  
    this.setState({
      toNode : nextProps.topologyReducer.nodeLength+1,
      routers: nextProps.topologyReducer.routers,
      
  });
}

  componentWillMount() {
    this.props.fetchTemplates();
    this.setState({
      toNode : this.props.topologyReducer.nodeLength+1,
  });
  }

    createServerNode = (fromNode, toNode, imageType) => {
      
       
        console.log('here i am')
        console.log(this.props.topologyReducer.nodeLength+1)
        console.log(this.refs.imageType.value)
        this.props.createServerNode(1, this.props.topologyReducer.nodeLength+1, this.refs.imageType.value);
        
      }
      createRouterNode = (fromNode, toNode) => {
        this.props.createRouterNode(1, this.state.toNode);
       
      }
      createSeperateRouterNode = (event) => {
        this.props.createSeperateRouterNode();
       
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

      handleChange2(e) {
        this.setState({ selectedRouter: e.target.value});
      }

      // getOptions = () => {
      //   this.props.topologyReducer.templates.map(template => { 
      //     return <option value={template.id_string}> {template.id_string} </option>;
      //     })
      // }
      getOptions(){
        var formOptions = [];
        this.state.routers.map((router) => {
        var routerid=router.id.toString();
        var labelname="Router "
        var routerlabel=labelname+routerid;
        formOptions.push(<option key= {router.id} value={router.id}>{routerlabel}</option>)
        console.log(formOptions, 1)
        console.log(router, 2)
        });
        console.log(formOptions);
        return (
                {formOptions}
           
        );
        
    }
      
  
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
          <br/>
         <button onClick={this.createSeperateRouterNode}>Add an unattached Router</button>
         <br/>
         (Sometimes you must click on the canvas or make another action for this router to appear. We are working on this issue.)
         {/* <button onClick={this.createFirewallNode}>Add a Firewall</button> */}


        <form onSubmit={this.handleSubmit}>
          <select ref="imageType" value={this.state.selectedRouter} onChange={this.handleChange2}>
          {this.getOptions().formOptions}
          </select>
        <input type="submit" value="Submit" />
      </form>
        </div>
        );
    }
    
}

  export default connect(mapStateToProps, mapDispatchToProps)(NodeCreator);