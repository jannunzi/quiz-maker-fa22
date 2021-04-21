import React from 'react'
import DiamondShape from "../utils/diamond-shape";
import AssociationHorizontal from "../utils/association-horizontal";
import Clazz from "../utils/clazz";
import ClassDiagramHorizontal from "../utils/class-diagram-horizontal";
import {education, randomSet, work} from "../../utils/utils";
import Fk from "../utils/fk";
import Pk from "../utils/pk";

const TextToUml = () => {

    const uppercase = randomSet(10, work, true)
    const lowercase = randomSet(10, education)
    
    const songs = uppercase[0];//"SONGS";
    const playlists = uppercase[1];//"PLAYLISTS";

    const id = lowercase[0];//"id";
    const id2 = lowercase[1];//"id";
    const name = lowercase[2];//"name";
    const name2 = lowercase[3];//"name";

    const fields = [
        {name: id, pk:true},
        {name: name},
    ]
    const fields2 = [
        {name: id2, pk:true},
        {name: name2},
        {name: id, fk:true},
    ]

    return(
        <div>
            <h1>Text to UML</h1>
            <div id="question321">

                Consider the following schema
                <br/>
                <br/>
                {playlists}(<Pk name={id}/>, {name})
                <br/>
                {songs}(<Pk name={id2}/>, {name2}, <Fk name={id}/>)
                <br/>
                <br/>

                further consider the following constraint
                <br/>
                <br/>
                "{songs} can not exist without a corresponding {playlists}"
                <br/>
                <br/>
                Select the best equivalent UML diagram from the choices listed below
                <br/>
                <br/>
            </div>
            <div id="1">
                <ClassDiagramHorizontal
                    classes={[
                        <Clazz clazzName={playlists} fields={fields}/>,
                        <Clazz clazzName={songs} fields={fields2}/>,
                    ]}
                    associations={[
                        <AssociationHorizontal
                            left={{cardinality: 1, decoration: "COMPOSITION"}}
                            right={{cardinality: "*"}}/>
                    ]}
                />
            </div>
            
                <hr style={{clear: "both"}}/>
            <div id="2">
                <ClassDiagramHorizontal
                    classes={[
                        <Clazz clazzName={playlists} fields={fields}/>,
                        <Clazz clazzName={songs} fields={fields2}/>,
                    ]}
                    associations={[
                        <AssociationHorizontal
                            left={{cardinality: 1, decoration: "AGGREGATION"}}
                            right={{cardinality: "*"}}/>
                    ]}
                />
            </div>
                <hr style={{clear: "both"}}/>
            <div id="3">
                <ClassDiagramHorizontal
                    classes={[
                        <Clazz clazzName={playlists} fields={fields}/>,
                        <Clazz clazzName={songs} fields={fields2}/>,
                    ]}
                    associations={[
                        <AssociationHorizontal
                            left={{cardinality: 1, decoration: "INHERITANCE"}}
                            right={{cardinality: "*"}}/>
                    ]}
                />
            </div>
                <hr style={{clear: "both"}}/>
            <div id="4">
                <ClassDiagramHorizontal
                    classes={[
                        <Clazz clazzName={playlists} fields={fields}/>,
                        <Clazz clazzName={songs} fields={fields2}/>,
                    ]}
                    associations={[
                        <AssociationHorizontal
                            left={{cardinality: "*"}}
                            right={{cardinality: "1", decoration: "AGGREGATION"}}/>
                    ]}
                />
            </div>
                <hr style={{clear: "both"}}/>
            <div id="5">
                <ClassDiagramHorizontal
                    classes={[
                        <Clazz clazzName={playlists} fields={fields}/>,
                        <Clazz clazzName={songs} fields={fields2}/>,
                    ]}
                    associations={[
                        <AssociationHorizontal
                            right={{cardinality: 1, decoration: "COMPOSITION"}}
                            left={{cardinality: "*"}}/>
                    ]}
                />
            </div>
        </div>
    )
}

export default TextToUml