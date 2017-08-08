/* Import react from npm (node package manager) */
import React from 'react';
/* Import children (React component) */
import InputField from './InputField.js';
import ListItem from './ListItem.js';

/* Create Javascript class which extended from React's component */
class App extends React.Component {

  constructor(props) {
    super(props);
    /* Defining component's state */
    this.state = {
      items: []
    };

    /* binding functions */
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(item) {
    /* Add new item to items in state */
    this.setState({
      items: this.state.items.concat(item)
    });
  }

  remove(index) {
    /* Remove item at apecific index from items in state */
    let items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  /* Every html language will be only rendered by render() */
  render() {
    return (
      <div style={{padding: 20}}>
        <InputField add={this.add}/>
        <ListItem items={this.state.items} remove={this.remove} />
      </div>
    );
  }
}

/* Export React component to make itself as requirable file */
export default App;
