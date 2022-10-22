import React from 'react'
import Component4 from "./component-4";

export default class Component3 extends React.Component {
    render() {
        return(
            <div>
                <h1>Component3</h1>
                <Component4 dataFor4={this.props.dataFor4}/>
            </div>
        )
    }
}