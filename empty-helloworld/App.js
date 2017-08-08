/* Import react from npm (node package manager) */
import React from 'react';

/* Create Javascript class which extended from React's component */
class App extends React.Component {

  /* Every html language will be only rendered by render() */
  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Hello World</h3>
      </div>
    );
  }
}

/* Export React component to make itself as requirable file */
export default App;
