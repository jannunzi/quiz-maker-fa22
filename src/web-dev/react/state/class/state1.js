import React from 'react'
import {randomArray, randomString, randomSet, fruits, randomInt, work} from "../../../../utils/utils";

const State1 = () => {
    // const a = randomString(3);
    // const a = randomString(3);
    // const a = randomString(3);
    // const a = randomString(3);
    // const a = randomString(3);
    const randomString = randomSet(10, fruits, false);
    const a = randomString[0]
    const b = randomString[1]
    const c = randomString[2]
    const d = randomString[3]
    const e = randomString[4]
    const f = randomInt(10);
    const g = randomInt(10);
    
    const randomCapitalized = randomSet(10, work, true)
    const D = randomCapitalized[0];
    const E = randomCapitalized[1];
    const Toggle = randomCapitalized[2];
    
    return(
        <div>
            <h1>Class State</h1>
            Consider the following code snippet
            <br/>
            <ToggleStr Toggle={Toggle} a={a} b={b} c={c} D={D} E={E} f={f} g={g}/>
            What is displayed in {`<h1>`} when the component first renders: {'[ZERO]'}
            <br/>
            What is displayed in {`<h1>`} when you click on {D}: {'[ONE]'}
            <br/>
            What is displayed in {`<h1>`} when you click on {E}: {'[ZERO1]'}
            <Toggle123 f={f} g={g} D={D} E={E}/>
        </div>
    )
}

export default State1

const ToggleStr = ({Toggle, a, b, c, D, E, f, g}) => {
    return(
        <pre>
{`
class ${Toggle} extends React.Component {
  state = {
    ${a}: 0
  }
  render() {
    return(
      <div>
        <h1>{this.state.${a}}</h1>
        {this.state.${a} % ${f} === 0 &&
          <button onClick={() => this.setState((${b}) => ({${a}: ++${b}.${a}}))}>
            ${D}
          </button>}
        {this.state.${a} % ${g} !== 0 &&
          <button onClick={() => this.setState((${c}) => ({${a}: --${c}.${a}}))}>
            ${E}
          </button>}
      </div>
    )
  }
}`}</pre>
    )
}

class Toggle123 extends React.Component {
    state = {
        a: 0
    }
    render() {
        return(
            <div>
                <h1>{this.state.a}</h1>
                {this.state.a % this.props.f === 0 && <button onClick={() => this.setState((b) => ({a: ++b.a}))}>{this.props.D}</button>}
                {this.state.a % this.props.g !== 0 && <button onClick={() => this.setState((c) => ({a: --c.a}))}>{this.props.E}</button>}
                <br/>
                {this.props.f}
                <br/>
                {this.props.g}
            </div>
        )
    }
}

const Correct = () =>
    <div>
        Consider the following coded snippet:
        {'export default class A extends {'}
    </div>