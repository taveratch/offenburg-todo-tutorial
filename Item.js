/* Import react from npm (node package manager) */
import React from 'react';

/* React component */
class Item extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.item}</span>
        <button onClick={() => {this.props.remove(this.props.index);}}>Remove</button>
      </div>
    );
  }
}

/* Defining default properties from parent */
Item.defaultProps = {
  item: '',
  index: -1,
  remove: () => {}
};

/* Make this component is requirable */
export default Item;
