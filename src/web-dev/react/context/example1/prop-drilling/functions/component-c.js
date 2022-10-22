import React from 'react'
import {ComponentD} from "./component-d";

export const ComponentC = ({dataForD}) => {
    return(
        <div>
            <h1>Component C</h1>
            <ComponentD dataForD={dataForD}/>
        </div>
    )
}