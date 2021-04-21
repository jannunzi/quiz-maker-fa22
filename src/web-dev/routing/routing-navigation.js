import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Add from "./add";
import Subtract from "./subtract";

const RoutingNavigation = () => {
    return(
        <div>
            <h3>Routing Navigation</h3>
            Consider the following code snippet:
            <pre>{`
<Link to="/qwe/2/3">ABC</Link>
<Link to="/asd/7/5">DEF</Link>
            `}</pre>
<pre>{`
<BrowserRouter>
    <Route path="/qwe/:a/:b" component={A}/>
    <Route path="/asd/:c/:d" component={B}/>
</BrowserRouter>
`}</pre>
            
            
<pre>{`
const A = () => {
    const {a, b} = useParams()
    return(
        <span>{a + b}</span>
    )
}
`}</pre>
            
            <pre>{`
const B = () => {
    const {c, d} = useParams()
    return(
        <span>{c - d}</span>
    )
}
`}
            </pre>

            What is rendered when you click on link ABC? [5]
            <br/>
            What is rendered when you click on link DEF? [2]
            
            <BrowserRouter>
                <Route path="/add/:a/:b">
                    <Add/>
                </Route>
                <Route path="/sub/:c/:d">
                    <Subtract/>
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default RoutingNavigation