import React from 'react'
import Clazz from "./clazz";
import AssociationHorizontal from "./association-horizontal";

const ClassDiagramHorizontal = (
    {
        classes = [
            <Clazz/>,
            <Clazz/>,
        ],
        associations = [
            <AssociationHorizontal/>,
        ]
    }) => {
    return(
        <div style={{clear:"both"}}>
            <div style={{clear:"both"}}>
                {
                    classes.map((clazz, ndx) =>
                        <div style={{float: "left"}}>
                            <div style={{float: "left"}}>
                                {clazz}
                            </div>
                            {
                                ndx < associations.length &&
                                    <div style={{float: "left"}}>
                                    {associations[ndx]}
                                    </div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ClassDiagramHorizontal