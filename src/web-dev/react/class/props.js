import React from 'react'
import {randomArrayOfStrings} from "../../../utils/utils";

const ReactClassProps = () => {
    const strings = randomArrayOfStrings()
    const caps = randomArrayOfStrings(2, 20, true)
    return(
        <div>
            <h1>React Class Props Syntax</h1>
            <Question
                A={caps[0]} B={caps[1]} C={caps[2]} D={caps[3]}
                messageAtr={strings[0]} HelloWorld={caps[4]}/>
        </div>
    )
}

export default ReactClassProps

const Question = (
    {
        A="A", B="B", C="C", D="D",
        messageAtr = "message", HelloWorld = "Hello World"
    }) => {
    return(
        <div>
            Consider the following code snippet:
            <pre>
                {`
const Answer = () =>
    <div>
        <${A} ${messageAtr}="${HelloWorld}"/>
        <${B} ${messageAtr}="${HelloWorld}"/>
        <${C} ${messageAtr}="${HelloWorld}"/>
        <${D} ${messageAtr}="${HelloWorld}"/>
    </div>
`}</pre>

            Which of the following implementations for <code>{A}</code>, <code>{B}</code>, <code>{C}</code>, and <code>{D}</code> displays "{HelloWorld}"?
            Select all that apply
<hr/>

            <input type="checkbox" checked={true}/>
<pre>{`
class ${A}
    extends React.Component {
    render() {
        return(
            <h1>{this.props.${messageAtr}}</h1>
        )
    }
}`}
</pre>
<input type="checkbox" checked={true}/>
<pre>{`
const ${B} = ({${messageAtr}}) =>
    <h1>{${messageAtr}}</h1>
`}</pre>
<input type="checkbox"/>
<pre>{`
const ${C} = ({${messageAtr}}) =>
    <h1>{this.props.${messageAtr}}</h1>
`}</pre>
<input type="checkbox"/>
<pre>{`
class ${D}
    extends React.Component {
    render({${messageAtr}}) {
        return(
            <h1>{${messageAtr}}</h1>
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
