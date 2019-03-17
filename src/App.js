import React, {Component} from 'react';

import TodoApp from './components/TodoApp';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        let self = this;

        return (
            <TodoApp store={self.props.store} />
        );
    }
}

export default App;
