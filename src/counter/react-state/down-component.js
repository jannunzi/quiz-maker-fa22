import React from 'react'

export default class DownComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <button onClick={this.props.down}>Down</button>
        )
    }
}
