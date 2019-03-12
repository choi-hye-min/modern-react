import React, { Component } from 'react';

import Hello from './Hello';
import ClassFunction from './ClassFunction';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Hello val={"arthur"}/>
          <ClassFunction />
      </React.Fragment>
    );
  }
}

export default App;
