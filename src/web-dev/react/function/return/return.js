import React from 'react'
import {randomArrayOfStrings} from "../../../../utils/utils";
import {Link} from "react-router-dom";

const ReactFunctionReturn = () => {
    const strings = randomArrayOfStrings()
    const caps = randomArrayOfStrings(2, 20, true)
    return(
        <div>
            <h1>React Function Return</h1>
            <Question f={caps[2]} HelloWorld={caps[4]}/>
        </div>
    )
}

export default ReactFunctionReturn

const Question = (
    {
        f="f",
        HelloWorld = "Hello World"
    }) => {
    return(
        <div>
            Which of the following implementations displays {`<h1>`}{HelloWorld}{`</h1>`}?
            Select all that apply
<hr/>

            <input type="checkbox" checked={true}/>
<pre>{`
const ${f} = () =>
    <h1>${HelloWorld}</h1>
`}
</pre>
<input type="checkbox" checked={true}/>
<pre>{`
function ${f}() {
    return(<h1>${HelloWorld}</h1>)
}
`}</pre>
            <input type="checkbox" checked={true}/>
<pre>{`
const ${f} = () => {
    return(<h1>${HelloWorld}</h1>)
}
`}</pre>
            <input type="checkbox" checked={true}/>
<pre>{`
class ${f} extends React.Component {
    render() {
        return(
            <h1>${HelloWorld}</h1>
        )
    }
}`}
            </pre>
        </div>
    )
}

const Answer = () =>
    <div>
        <A message="Hello World"/>
        <B message="Hello World"/>
        <C message="Hello World"/>
        <D message="Hello World"/>
    </div>

class A
    extends React.Component {
    render() {
        return(
            <h1>{this.props.message}</h1>
        )
    }
}

const B = ({message}) =>
    <h1>{message}</h1>

const C = ({message}) =>
    <h1>{this.props.message}</h1>

class D
    extends React.Component {
    render({message}) {
        return(
            <h1>{message}</h1>
        )
    }
}
