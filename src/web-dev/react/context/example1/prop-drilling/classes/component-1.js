import React from 'react'
import Component2 from "./component-2";

export default class Component1 extends React.Component {
    state = {
        dataFor4: 'Hello 4!'
    };
    render() {
        return(
            <div>
                <h1>Component 1</h1>
                <Component2 dataFor4={this.state.dataFor4}/>
            </div>
        )
    }
}