import React from "react";
import {
    theImage,
    radioBtn,
    randomImage,
    randomArray,
    random,
    jsDataTypes,
    fruits,
    images, smallTextInput, heading, textInput, textArea,
} from "../vocabularies";

import JsxParser from "react-jsx-parser";

const id = randomArray({size: 3, array: jsDataTypes});
const types = randomArray({size: 3, array: jsDataTypes});
const fruit = 'orange';//randomArray({array: fruits});

const FillMultipleBlanks = ({
    title= 'Mongo Model Find One',
    bindings= {
        random,
        randomArray,
        fruit,
        fruits,
        heading,
        textInput,
        smallTextInput,
        textArea,
        radioBtn,
        types,
        theImage,
        randomImage,
        images,
        model: id[0],
        collection: id[1],
        field1: id[2],
        field2: id[3],
        field3: id[4],
        type1: types[0],
        type2: types[1],
        type3: types[2],
    },
    question=`
    Fill in the blanks below to complete code the snippet.
    <br/>
    Only use lowercase, no quotations, no extra spaces
    <br/>
    <br/>
    Given a mongoose model called <b>{model}</b> created from the following
    mongoose schema
    <br/>
    <br/>
    <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
    `,
                            }) => {
    return(
        <div className="jga-fill-mutiple-blanks">
            <h1>{title}</h1>
            <JsxParser
                bindings={bindings}
                jsx={question}
            />
        </div>
        )
}

export default FillMultipleBlanks;