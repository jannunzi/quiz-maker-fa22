import React from 'react'
import UpComponent from "./up-component";
import DownComponent from "./down-component";
import CounterDisplay from "./counter-display";

export default class CounterReactState extends React.Component {
    state = {
        counter: 0
    }
    up = () =>
        this.setState(oldState => ({counter: oldState.counter+1}))
    down = () =>
        this.setState(oldState => ({counter: oldState.counter-1}))
    render() {
        return(
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <UpComponent up={this.up}/>
                <DownComponent down={this.down}/>
            </div>
        )
    }
}
