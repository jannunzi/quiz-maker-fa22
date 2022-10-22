import React from 'react'
import {randomArrayOfStrings} from "../../utils/utils";

const Nav1 = () => {
    let strings = randomArrayOfStrings(3, 20, true);
    
    const Router = strings[0];
    const SomeComponent = strings[1];
    const SomeComponentImport = strings[2];
    const NavigationComponent = strings[3];
    const ClickMe = strings[4];
    const path = strings[5];
    return(
        <div>
            <h3>Navigation</h3>
            
            <div>
            Consider the code snippet below.
            Use React's routing library so that when the user clicks on {ClickMe},
            component {SomeComponent} is displayed. Also, the URL of the browser
            changes to /{path}

            <pre>{`
import React from 'react';
import {__1__ as ${Router}, __2__, Route} from 'react-router-dom';
import ${SomeComponent} from './${SomeComponentImport}'
const ${NavigationComponent} = () => (
<__3__>
        <__4__ to="/__5__">${ClickMe}</__6__>
        <__7__ path='/__8__'>
            <__9__/>
        </__10__>
</__11__>
)
                        `}</pre>
            <ol>
                <li>[BrowserRouter]</li>
                <li>[Link]</li>
                <li>[{Router}_1]</li>
                <li>[LinkA]</li>
                <li>[{path}_1]</li>
                <li>[LinkB]</li>
                <li>[Route]</li>
                <li>[{path}_2]</li>
                <li>[{SomeComponent}]</li>
                <li>[Route]</li>
                <li>[{Router}_2]</li>
            </ol>
            </div>
        </div>
    )
}

export default Nav1