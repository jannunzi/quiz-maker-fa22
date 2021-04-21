import React from 'react'

export default class UpComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <button onClick={this.props.up}>Up</button>
        )
    }
}
