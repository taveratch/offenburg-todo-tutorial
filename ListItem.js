/* Import react from npm (node package manager) */
import React from 'react';
/* Import Item (React component) */
import Item from './Item.js';

/* React component */
class ListItem extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            return <Item item={item} index={index} remove={this.props.remove}/>;
          })
        }
      </div>
    );
  }
}

/* Defining default properties from parent */
ListItem.defaultProps = {
  items: [],
  remove: () => {}
};

/* Make this component is requirable */
export default ListItem;
