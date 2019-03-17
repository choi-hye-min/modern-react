import React, {Component} from 'react';

import TodoApp from './components/TodoApp';
import ShowTest from './components/ShowTest';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        let self = this;

        return (
            <React.Fragment>
                <TodoApp />
                <ShowTest />
            </React.Fragment>
        );
    }
}

export default App;
