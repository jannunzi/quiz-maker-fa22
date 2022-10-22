import React from 'react'

export default class Component4 extends React.Component {
    render() {
        return(
            <div>
                <h1>Component4</h1>
                <h2>{this.props.dataFor4}</h2>
            </div>
        )
    }
}