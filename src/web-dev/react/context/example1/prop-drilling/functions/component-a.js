import React from 'react'
import {ComponentB} from "./component-b";

export const ComponentA = () => {
    const dataForD = 'Hello D!';
    return(
        <div>
            <h1>Component A</h1>
            <ComponentB dataForD={dataForD}/>
        </div>
    )
}