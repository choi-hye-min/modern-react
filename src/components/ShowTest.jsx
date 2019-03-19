import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class ShowTest extends PureComponent {

    render() {
        return (
            <div>
                <h3>---list---</h3>
                <ul>
                    {
                        this.props.tasks.map((task, key) => {
                            return (
                                <li key={key}>{task.payload.task}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    /*return {
        tasks: state.tasks.toJS() // 변경전
    }*/
    return {
        tasks: state.get('tasks').toJS() // 변경후
    }
}

export default connect(mapStateToProps)(ShowTest);