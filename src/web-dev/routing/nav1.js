import React from 'react'

const Nav1 = () => {
    return(
        <div>
            <h3>Navigation</h3>

            Consider the code snippet below.
            Use React's routing library to
            implement a link that navigates to
            component DEF. The URL pattern of
            the URL should be /GHI

            <pre>{`
import {__1__ as ABC, __2__, Route} from 'react-router-dom'
import DEF from './someComponent'
const NavigationComponent = () => (
<__3__>
        <__4__ to="/__5__">SOME LINK</__6__>
        <__7__ path='/__8__' __9__={__10__}/>
</__11__>
)
                        `}</pre>
            <ol>
                <li>[BrowserRouter]</li>
                <li>[Link]</li>
                <li>[ABC_1]</li>
                <li>[LinkA]</li>
                <li>[GHI_1]</li>
                <li>[LinkB]</li>
                <li>[Route]</li>
                <li>[GHI_2]</li>
                <li>[component]</li>
                <li>[DEF]</li>
                <li>[ABC_2]</li>
            </ol>
        </div>
    )
}

export default Nav1