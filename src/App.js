import React, {Component} from 'react';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    componentDidMount() {
        //https://yts.ag/api/v2/list_movies.json
        console.log(this._tstFunction())
    }

    _tstFunction = () => {
        return 111;
    }

    render() {

        return (
            <div>hello</div>
        );
    }
}

export default App;
