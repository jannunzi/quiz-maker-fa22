import React from 'react'
import {connect} from 'react-redux'

class CounterDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Count: {this.props.counter}</h1>
        );
    }
}

export default connect((state) => ({counter: state.counter}))(CounterDisplay)
