import React from 'react'
import {randomArrayOfStrings} from "../../../utils/utils";

const SpreaderObject = () => {
    const strings = randomArrayOfStrings()
    
    return(
        <div>
            <h2>Spreader Object</h2>
            <div>
            <Question
                obj1={strings[0]}
                obj2={strings[1]}
                obj3={strings[2]}
                a={strings[3]}
                b={strings[4]}
                c={strings[5]}
                d={strings[6]}
                e={strings[7]}
                f={strings[8]}
                g={strings[9]}
                h={strings[10]}
                i={strings[11]}
            />
            <Answer
                obj1={strings[0]}
                obj2={strings[1]}
                obj3={strings[2]}
                a={strings[3]}
                b={strings[4]}
                c={strings[5]}
                d={strings[6]}
                e={strings[7]}
                f={strings[8]}
                g={strings[9]}
                h={strings[10]}
                i={strings[11]}
            />
            </div>
        </div>
    )
}

const Question = (
    {
        obj1="obj1",
        obj2="obj2",
        obj3="obj3",
        a="a",
        b="b",
        c="c",
        d="d",
        e="e",
        f="f",
        g="g",
        h="h",
        i="i",
    }) => {
    return(
        <div>
            {/*<h3>Question</h3>*/}
            <p>
                Consider the following code snippet:
            </p>
<pre>{`
let ${obj1} = {
    ${a}: '${b}',
    ${c}: '${d}'
}
let ${obj2} = {
    ${c}: '${e}',
    ${f}: '${g}',
    ...${obj1},
}
${obj1} = {
    ...${obj2},
    ${c}: '${h}',
    ${f}: '${i}'
}
console.log(${obj1}.${a})
console.log(${obj2}.${c})
console.log(${obj1}.${f})
`}</pre>
        </div>
    )
}

const Answer = (
    {
        obj1="obj1",
        obj2="obj2",
        obj3="obj3",
        a,b, c, d, e, f, g, h, i
    }) => {
    let o1 = {
        a: b,
        c: d
    }
    let o2 = {
        c: e,
        f: g,
        ...o1,
    }
    o1 = {
        ...o2,
        c: h,
        f: i
    }
    console.log(o1.a)
    console.log(o2.c)
    console.log(o1.f)

    return(
        <div>
            What does <code>console.log({obj1}.{a})</code> print? [ANSWER_{o1.a}]
            <br/>
            What does <code>console.log({obj2}.{c})</code> print? [ANSWER_{o2.c}]
            <br/>
            What does <code>console.log({obj1}.{f})</code> print? [ANSWER_{o1.f}]
            <br/>
            {/*<br/>*/}
            {/*<h2>Answer</h2>*/}
            {/*<pre>{JSON.stringify(o1)}</pre>*/}
            {/*<pre>{JSON.stringify(o2)}</pre>*/}
            {/*<pre>console.log(obj1.a) = {o1.a}</pre>*/}
            {/*<pre>console.log(obj2.c) = {o2.c}</pre>*/}
            {/*<pre>console.log(obj1.f) = {o1.f}</pre>*/}

        </div>
    )
}

export default SpreaderObject