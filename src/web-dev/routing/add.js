import React from 'react'
import {useParams} from 'react-router-dom'

const Add = () => {
    let {a, b} = useParams()
    a = parseInt(a)
    b = parseInt(b)
    return(
        <span>{a + b}</span>
    )
}
export default Add