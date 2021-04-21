import React from 'react'

const Checkbox = () => {
    return(
        <>
            <A/>
        </>
    )
}

const A = () => {
    const [] = useState([])
    return(
        <div>
            <input type="checkbox" name="b" value="d" checked/>
            <input type="checkbox" name="b" value="e"/>
            <input type="checkbox" name="b" value="f" checked/>
            <input type="checkbox" name="c" value="g"/>
            <input type="checkbox" name="c" value="h" checked/>
            <input type="checkbox" name="c" value="i"/>
            <input type="checkbox" name="c" value="j" checked/>
        </div>
    )
}