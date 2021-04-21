import React from 'react'
import CounterDisplay from "../react-state/counter-display";
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";

const _state = {
    counter: 0
}

const reducer = (state = _state, action) => {
    switch (action.type) {
        case "UP":
            return {
                counter: state.counter + 1
            }
        case "DOWN":
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

export default class CounterRedux extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div>
                    <h1>Counter Redux</h1>
                    <CounterDisplay/>
                    <CounterUp/>
                    <CounterDown/>
                </div>
            </Provider>
        )
    }
}
