import React from 'react'
import {ComponentC} from "./component-c";

export const ComponentB = ({dataForD}) => {
    return(
        <div>
            <h1>Component B</h1>
            <ComponentC dataForD={dataForD}/>
        </div>
    )
}