import React, {useState} from 'react'

const T = () => 
    <>
        <A/>
        <B/>
        <C/>
        <D/>
    </>

const A = () => {
    const [a, b] = useState(false)
    return(<div>
            {  a && <span onClick={() => b(false)}>C</span>}
            { !a && <span onClick={() => b(true) }>D</span>}
        </div>)}

const B = () => {
    const [e, f] = useState(false)
    return(<div>
            {  e && <span onClick={() => f(false)}>G</span>}
            { !e && <span onClick={() => f(true) }>H</span>}
        </div>)}

const C = () => {
    const [i, j] = useState(false)
    return(<div>
            {  i && <span onClick={() => j(false)}>K</span>}
            { !i && <span onClick={() => j(true) }>L</span>}
        </div>)}

const D = () => {
    const [m, n] = useState(false)
    return(<div>
            {  m && <span onClick={() => n(false)}>O</span>}
            { !m && <span onClick={() => n(true) }>P</span>}
        </div>)}

export default T