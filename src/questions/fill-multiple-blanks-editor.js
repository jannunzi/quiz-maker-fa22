import React, {useState, useEffect} from "react";
import FillMultipleBlanks from "./fill-multiple-blanks";
import CKEditor from 'ckeditor4-react';

const FillMultipleBlanksEditor = () => {
    const [question, setQuestion] = useState('');
    return(
        <div>
            <h1>Fill Multiple Blanks Editor</h1>
            <CKEditor
                data={`
                    <ul>
                        <li>{random()}</li>
                        <li>{types}</li>
                        <li>{fruit}</li>
                        <li>{fruits}</li>
                        <li>{fruits[0]}</li>
                        <li>{randomArray({array: fruits})[2]}</li>
                        <li>{textArea}</li>
                        <li>{textInput(3)}{textInput(6)}</li>
                    </ul>`
                }
                onChange={(e) => setQuestion(e.editor.getData())}
            />
            <h2>Preview</h2>
            <FillMultipleBlanks
                question={question}/>
        </div>
    )
}

export default FillMultipleBlanksEditor;