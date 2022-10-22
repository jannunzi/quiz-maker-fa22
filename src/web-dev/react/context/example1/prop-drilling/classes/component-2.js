import React from 'react'
import Component3 from "./component-3";

export default class Component2 extends React.Component {
    render() {
        return(
            <div>
                <h1>Component2</h1>
                <Component3 dataFor4={this.props.dataFor4}/>
            </div>
        )
    }
}