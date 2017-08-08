/* Import react from npm (node package manager) */
import React from 'react';

/* React component */
class InputField extends React.Component {

  constructor(props) {
    super(props);
    /* Defining component's state */
    this.state = {
      value: ''
    };
  }

  /* Handling change from input field */
  handleChange(event) {
    /* Save value from input field to component's state */
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} />
        <button onClick={() => {this.props.add(this.state.value);}}>Add</button>
      </div>
    );
  }
}

/* Defining default properties from parent */
InputField.defaultProps = {
  add: () => {}
};

/* Make this component is requirable */
export default InputField;
