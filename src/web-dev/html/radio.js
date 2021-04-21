import React from 'react'

const Radios = () => {
    return(
        <>
            Which of the following options implement a set
            of radio buttons that are mutually exclusive?
            <A/>
        </>
    )
}

const A = () =>
    <div>
        <input type="radio"/>
        <br/>
        <>
            {'<input type="radio" name="gender"/>MALE'}
            <br/>
            {'<input type="radio" name="gender"/>FEMALE'}
            <hr/>
        </>
        <input type="radio"/>
        <br/>
        <>
            {'<radio id="gender" value="MALE"/>MALE'}
            <br/>
            {'<radio id="gender" value="FEMALE"/>FEMALE'}
            <hr/>
        </>
        <input type="radio"/>
        <br/>
        <>
            {'<input type="radio" id="gender"/>MALE'}
            <br/>
            {'<input type="radio" id="gender"/>FEMALE'}
            <hr/>
        </>
        <input type="radio"/>
        <br/>
        <>
            {'<radio name="gender"/>MALE'}
            <br/>
            {'<radio name="gender"/>FEMALE'}
            <hr/>
        </>
    </div>

export default Radios;