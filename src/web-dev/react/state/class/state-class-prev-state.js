import React from 'react'
import {randomArrayOfStrings, randomInt} from "../../../../utils/utils";

const StateClassPrevState = () => {
    const strings = randomArrayOfStrings()
    const caps = randomArrayOfStrings(2, 20, true)
    const ten = randomInt(50, 10)
    return (
        <div>
            <h2>State Class Prev State</h2>
            <Question Answer={caps[0]} count={strings[1]} ten={ten}
                      ewq={strings[2]} rew={strings[3]} tre={strings[4]} 
                      prevState={strings[5]}
                      A={caps[6]} B={caps[7]} C={caps[8]}/>
            <Answer ten={ten}/>
        </div>)
}

export default StateClassPrevState

const Question = (
    {
        Answer="Answer", count="count", ten=10, ewq="ewq", rew="rew", tre="tre",
        prevState="prevState", A="A", B="B", C="C"
    }) => {
    const code = `
class ${Answer} extends React.Component {
    state = {
        ${count}: ${ten}
    }
    ${ewq} = () => this.state.${count} = this.state.${count}++
    ${rew} = () => this.setState({
        ${count}: ++this.state.${count}
    })
    ${tre} = () => this.setState(${prevState} => ({
        ${count}: ++${prevState}.${count}
    }))
    render() {
        return(
            <div>
                <h1>{this.state.${count}}</h1>
                <button onClick={this.${ewq}}>${A}</button>
                <button onClick={this.${rew}}>${B}</button>
                <button onClick={this.${tre}}>${C}</button>
            </div>
        )
    }
}`
    return (<div>
        Consider the following code snippet:
        <pre>
            {code}
        </pre>

        What does {`<h1>`} render when component {Answer} first mounts? [ANSWER_{ten}]
        <br/>
        What does {`<h1>`} render when we click button {B}? [ANSWER_{ten + 1}]
        <br/>
        What does {`<h1>`} render when we click button {C}? [ANSWER_{ten + 2}]
        <br/>
        Which is a better implementation, function <code>{rew}</code> or function <code>{tre}</code>? [ANSWER_{tre}]
        <br/>
    </div>)
    }    

class Answer extends React.Component {
    state = {
        count: this.props.ten
    }
    ewq = () => this.state.count = this.state.count++
    rew = () => this.setState({
        count: ++this.state.count
    })
    tre = () => this.setState(prevState => ({
        count: ++prevState.count
    }))
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.ewq}>A</button>
                <button onClick={this.rew}>B</button>
                <button onClick={this.tre}>C</button>
            </div>
        )
    }
}