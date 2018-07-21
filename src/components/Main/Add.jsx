import React from "react";
import ReactDOM from "react-dom";
// import { connect } from "react-redux";
import {isOpen} from "../../actions";
import Form from "./Form.jsx";
// import { connect } from "react-redux";
import {connect } from "react-redux";


class Add extends React.Component {
  state = {
    add: true
  };

  render() {
    return (
<React.Fragment>
  <div ref="wassup" onClick={this.handleAddTask} className="card-wrapper__footer">
    <div className="add-task">Add task</div>
    <div className="add-task-ico"><i
      className="material-icons">add_circle_outline</i></div>
  </div>
  {this.isOpenAdd}
</React.Fragment>
    );
  }

  handleAddTask = () => {

    // this.props.toggleOpenItem(this.props.item.type);


    // this.setState({
    //   item: this.state.item ? null : this.props.item.type
    // })

    // this.setState({
    //   add: !this.state.add
    // });
    this.props.isOpenFunc(this.props.typez);
    // let mountNode = ReactDOM.findDOMNode(this.refs.wassup);
    // console.log(mountNode);
    // ReactDOM.unmountComponentAtNode(mountNode);
  };

  get isOpenAdd() {
    if (this.props.typez !== this.props.isOpenA) {
      return null;
    }
    return (
      <Form type={this.props.typez}/>
    )
}

}

const mapStateToProps = (state) => ({
  isOpenA: state.isOpen
});

export default connect(mapStateToProps, {isOpenFunc: isOpen})(Add);
