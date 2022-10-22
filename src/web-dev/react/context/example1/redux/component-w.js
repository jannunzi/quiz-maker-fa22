import React from 'react'
import {ComponentX} from "./component-x";
import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = () => ({dataForZ: 'Hello Z!'})
const store = createStore(reducer);

export const ComponentW = () => {
    return(
        <Provider store={store}>
        <div>
            <h1>Component W</h1>
            <ComponentX/>
        </div>
        </Provider>
    )
}