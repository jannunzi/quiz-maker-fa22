import React from 'react'
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import Counter from "./counter"
import {randomArrayOfStrings, randomInt} from "../../../../utils/utils"

const initialCount = randomInt(10)
const increment = randomInt(10)
const decrement = randomInt(10)

const StateRedux = () => {
    const strings = randomArrayOfStrings()
    const stringsCapitalized = randomArrayOfStrings(2, 20, true)
    const incrementButton = stringsCapitalized[0]
    const decrementButton = stringsCapitalized[1]
    const counterContainerStr = stringsCapitalized[2]
    return(
        <div>
            <h2>State Redux Plus 2 Minus 3 </h2>
            Consider the following code snippet:
            <CounterContainerStr
                reducer={strings[0]}
                stateInReducer={strings[2]}
                count={strings[1]}
                stateProperty={strings[3]}
                PLUS_TWO={strings[5]}
                MINUS_THREE={strings[4]}
                plus2={strings[5]}
                minus3={strings[6]}
                initialCount={initialCount}
                increment={increment}
                decrement={decrement}
                incrementButton={incrementButton}
                decrementButton={decrementButton}
                CounterContainer={counterContainerStr}
                Counter={stringsCapitalized[3]}
                stpmState={strings[7]}
                dtpmDispatch={strings[8]}
                action={strings[9]}
            />
            <br/>
            What does {`<h1>`} display when the component {counterContainerStr} first renders: {`[INITIALCOUNT_${initialCount}]`}
            <br/>
            What does {`<h1>`} display if you then press button {incrementButton}: {`[AFTERINCREMENT_${initialCount + increment}]`}
            <br/>
            What does {`<h1>`} display if you then press button {decrementButton}: {`[AFTERDECREMENT_${initialCount + increment - decrement}]`}
            <br/>

            <CounterContainer
                incrementButton={incrementButton}
                decrementButton={decrementButton}/>
        </div>
    )
}

const CounterContainerStr = (
    {
        reducer="reducer",
        stateInReducer="state",
        count="count",
        stateProperty="count",
        PLUS_TWO="PLUS_TWO",
        MINUS_THREE="MINUS_THREE",
        plus2="plus2",
        minus3="minus3",
        initialCount=0,
        increment=2,
        decrement=3,
        incrementButton,
        decrementButton,
        Counter="Counter",
        CounterContainer="CounterContainer",
        stpmState="state",
        dtpmDispatch="dispatch",
        action="action"
    }) =>
    <div>

        <pre>
{`
const ${reducer} = (${stateInReducer} = {${count}: ${initialCount}, ${action}) => {
    switch(${action}.type) {
        case "${PLUS_TWO}":
            return {
                ${count}: ${stateInReducer}.${count} + ${increment}
            }
        case "${MINUS_THREE}":
            return {
                ${count}: ${stateInReducer}.${count} - ${decrement}
            }
        default:
            return ${stateInReducer}
    }
}`}
        </pre>
        <pre>
{`const store = createStore(${reducer})

const ${CounterContainer} = () =>
    <Provider store={store}>
        <${Counter}/>
    </Provider>
`}
        </pre>
        <pre>
{`
const ${Counter} = ({${plus2}, ${minus3}, ${stateProperty}}) =>
    <div>
        <h1>{${stateProperty}}</h1>
        <button onClick={${plus2}}>${incrementButton}</button>
        <button onClick={${minus3}}>${decrementButton}</button>
    </div>

const stpm = (${stpmState}) => ({${stateProperty}: ${stpmState}.${count}})
const dtpm = (${dtpmDispatch}) => ({
    ${plus2}: () => ${dtpmDispatch}({type: "${PLUS_TWO}"}),
    ${minus3}: () => ${dtpmDispatch}({type: "${MINUS_THREE}"}),
})
export default connect(stpm, dtpm)(${Counter})
`}
        </pre>
    </div>

const reducer = (state = {count: initialCount}, action) => {
    switch(action.type) {
        case "PLUS_TWO":
            return {
                count: state.count + increment
            }
        case "MINUS_THREE":
            return {
                count: state.count - decrement
            }
        default:
            return state
    }
}

const store = createStore(reducer)

const CounterContainer = ({incrementButton, decrementButton}) =>
    <Provider store={store}>
        <Counter incrementButton={incrementButton} decrementButton={decrementButton}/>
    </Provider>

export default StateRedux