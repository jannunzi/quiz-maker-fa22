import React from 'react'
import {useParams} from 'react-router-dom'

const Subtract = () => {
    let {c, d} = useParams()
    c = parseInt(c)
    d = parseInt(d)
    return(
        <span>{c - d}</span>
    )
}
export default Subtract