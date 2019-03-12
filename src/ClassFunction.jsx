import React, {Component} from 'react';

// 클래스형 컴포넌트
class ClassFunction extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            age: 33
        }
    }

    render() {
        let self = this;

        return (
            <div>ClassFunction age : {self.state.age}</div>
        );
    }
}

export default ClassFunction;